import { createContext } from 'react';
import { UserCredential } from 'firebase/auth';

// Définir un type User similaire à celui de Firebase
export type User = {
  uid: string;
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
  photoURL: string | null;
};

// Définir le type pour le profil utilisateur
export interface UserProfile {
  displayName: string;
  email: string;
  createdAt: Date;
  lastLogin: Date;
}

// Définir le type pour le contexte d'authentification
export interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signup: (email: string, password: string, displayName: string) => Promise<void>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  userProfile: UserProfile | null;
}

// Créer le contexte
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
