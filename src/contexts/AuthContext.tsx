import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { doc, setDoc, getDoc, Timestamp } from 'firebase/firestore';

// Définir le type pour le contexte d'authentification
interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signup: (email: string, password: string, displayName: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  userProfile: UserProfile | null;
}

interface UserProfile {
  displayName: string;
  email: string;
  createdAt: Date;
  lastLogin: Date;
}

// Créer le contexte
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Le hook useAuth est défini dans un fichier séparé (useAuth.ts) pour éviter les problèmes de Fast Refresh

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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Mettre à jour le profil de l'utilisateur
      await updateProfile(user, { displayName });
      
      // Créer un document utilisateur dans Firestore
      await setDoc(doc(db, 'users', user.uid), {
        displayName,
        email,
        createdAt: Timestamp.now(),
        lastLogin: Timestamp.now()
      });
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      throw error;
    }
  }

  // Fonction pour se connecter
  async function login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Mettre à jour la date de dernière connexion
      if (user) {
        await setDoc(doc(db, 'users', user.uid), {
          lastLogin: Timestamp.now()
        }, { merge: true });
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      throw error;
    }
  }

  // Fonction pour se déconnecter
  async function logout() {
    return signOut(auth);
  }

  // Fonction pour réinitialiser le mot de passe
  async function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
  }

  // Récupérer le profil utilisateur depuis Firestore
  async function fetchUserProfile(user: User) {
    try {
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUserProfile({
          displayName: userData.displayName || user.displayName || '',
          email: userData.email || user.email || '',
          createdAt: userData.createdAt?.toDate() || new Date(),
          lastLogin: userData.lastLogin?.toDate() || new Date()
        });
      } else {
        // Si le document n'existe pas, créer un nouveau profil
        const newProfile = {
          displayName: user.displayName || '',
          email: user.email || '',
          createdAt: Timestamp.now(),
          lastLogin: Timestamp.now()
        };
        
        await setDoc(doc(db, 'users', user.uid), newProfile);
        setUserProfile({
          ...newProfile,
          createdAt: new Date(),
          lastLogin: new Date()
        });
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du profil:", error);
    }
  }

  // Observer les changements d'état d'authentification
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        await fetchUserProfile(user);
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
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
