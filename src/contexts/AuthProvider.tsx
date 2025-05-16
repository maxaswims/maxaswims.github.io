import React, { useState, useEffect, ReactNode } from 'react';
import { 
  auth, 
  db, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  Timestamp,
  doc,
  getDoc,
  setDoc
} from '../firebase/config';
import { AuthContext, User, UserProfile } from './AuthContext';

// Props pour le provider
interface AuthProviderProps {
  children: ReactNode;
}

// Provider du contexte d'authentification
export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Fonction pour s'inscrire
  async function signup(email: string, password: string, displayName: string) {
    try {
      // Créer l'utilisateur dans Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Mettre à jour le profil de l'utilisateur avec le nom d'affichage
      await updateProfile(user, { displayName });
      
      // Les données utilisateur sont maintenant stockées dans Firebase
      // La fonction createUserWithEmailAndPassword s'occupe déjà de créer un document dans Firestore
      console.log("Utilisateur créé avec succès:", user.uid);
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      throw error;
    }
  }

  // Fonction pour se connecter
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      // Ajouter un délai avant la tentative de connexion pour éviter les erreurs 400
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(userCredential.user);
      
      // Attendre un court instant avant de retourner pour permettre à Firebase de finaliser la connexion
      await new Promise(resolve => setTimeout(resolve, 300));
      
      return userCredential;
    } catch (error: unknown) {
      const firebaseError = error as { code?: string, message?: string };
      console.error("Erreur de connexion:", error);
      
      // Ajouter des informations de débogage spécifiques pour les erreurs 400
      if (firebaseError.code === 'auth/network-request-failed') {
        console.warn("Erreur de réseau lors de la connexion. Vérifiez votre connexion internet.");
      } else if (firebaseError.message && firebaseError.message.includes('400')) {
        console.warn("Erreur 400 détectée. Problème de configuration Firebase possible.");
      }
      
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour se déconnecter
  async function logout() {
    try {
      return await signOut(auth);
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
      throw error;
    }
  }

  // Fonction pour réinitialiser le mot de passe
  async function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
  }

  // Récupérer le profil utilisateur depuis Firestore
  async function fetchUserProfile(user: User) {
    try {
      // Récupérer les données utilisateur depuis Firestore en utilisant l'API correcte
      const userDocRef = doc(db, 'users', user.uid);
      const userDocSnap = await getDoc(userDocRef);
      
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        setUserProfile({
          displayName: user.displayName || '',
          email: user.email || '',
          createdAt: userData.createdAt?.toDate() || new Date(),
          lastLogin: userData.lastLogin?.toDate() || new Date()
        });
      } else {
        // Si le document n'existe pas encore dans Firestore, créer un profil de base
        const newUserProfile = {
          displayName: user.displayName || '',
          email: user.email || '',
          createdAt: new Date(),
          lastLogin: new Date()
        };
        
        // Créer le document utilisateur dans Firestore
        await setDoc(userDocRef, {
          displayName: user.displayName || '',
          email: user.email || '',
          createdAt: Timestamp.now(),
          lastLogin: Timestamp.now()
        });
        
        setUserProfile(newUserProfile);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du profil:", error);
    }
  }

  // Gérer les erreurs WebChannelConnection
  const handleFirestoreErrors = () => {
    // Écouter les erreurs dans la console
    const originalConsoleError = console.error;
    console.error = function(...args) {
      // Appeler la fonction originale
      originalConsoleError.apply(console, args);
      
      // Vérifier si l'erreur est liée à WebChannelConnection
      const errorMessage = args.join(' ');
      if (
        errorMessage.includes('WebChannelConnection') ||
        errorMessage.includes('400 (Bad Request)') ||
        errorMessage.includes('Listen')
      ) {
        // Essayer de réinitialiser la connexion Firestore
        import('../firebase/config').then(({ db }) => {
          import('firebase/firestore').then(({ disableNetwork, enableNetwork }) => {
            // Désactiver puis réactiver le réseau après un délai
            disableNetwork(db).then(() => {
              setTimeout(() => {
                enableNetwork(db).catch(e => 
                  originalConsoleError('Erreur lors de la réactivation du réseau:', e)
                );
              }, 3000);
            }).catch(e => 
              originalConsoleError('Erreur lors de la désactivation du réseau:', e)
            );
          });
        });
      }
    };
    
    // Restaurer la fonction console.error originale lors du démontage
    return () => {
      console.error = originalConsoleError;
    };
  };

  // Observer les changements d'état d'authentification
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        // Ajouter un délai avant d'accéder à Firestore
        setTimeout(async () => {
          try {
            await fetchUserProfile(user);
          } catch (error) {
            console.warn('Erreur lors de la récupération du profil utilisateur:', error);
          }
        }, 1500);
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    // Configurer l'intercepteur d'erreurs
    const errorHandlerCleanup = handleFirestoreErrors();

    return () => {
      unsubscribe();
      errorHandlerCleanup();
    };
  }, []);

  const value = {
    currentUser,
    userProfile,
    loading,
    signup,
    login,
    logout,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
