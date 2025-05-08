import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  auth, 
  db, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  Timestamp
} from '../firebase/config';

// Définir un type User similaire à celui de Firebase
type User = {
  uid: string;
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
  photoURL: string | null;
};

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
      
      // Les données utilisateur sont déjà stockées dans notre implémentation locale
      // Pas besoin d'appeler setDoc et doc car notre implémentation s'en charge
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      throw error;
    }
  }

  // Fonction pour se connecter
  async function login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Notre implémentation locale met déjà à jour l'utilisateur courant
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

  // Récupérer le profil utilisateur depuis le stockage local
  async function fetchUserProfile(user: User) {
    try {
      // Dans notre implémentation locale, nous pouvons directement utiliser les données de l'utilisateur
      setUserProfile({
        displayName: user.displayName || '',
        email: user.email || '',
        createdAt: new Date(),
        lastLogin: new Date()
      });
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
