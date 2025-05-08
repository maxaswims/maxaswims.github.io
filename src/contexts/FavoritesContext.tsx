import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './useAuth';
import { db } from '../firebase/config';

// Type pour un produit favori
export interface FavoriteProduct {
  id: string;
  image: string;
  name: string;
  price: number;
  description?: string;
}

// Type pour le contexte des favoris
interface FavoritesContextType {
  favorites: FavoriteProduct[];
  addToFavorites: (product: FavoriteProduct) => void;
  removeFromFavorites: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  clearFavorites: () => void;
}

// Créer le contexte
export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// Props pour le provider
interface FavoritesProviderProps {
  children: ReactNode;
}

// Provider du contexte des favoris
export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<FavoriteProduct[]>([]);
  const { currentUser } = useAuth();

  // Charger les favoris depuis le localStorage ou Firebase lors du montage du composant
  useEffect(() => {
    const loadFavorites = async () => {
      if (currentUser) {
        try {
          // Si l'utilisateur est connecté, charger les favoris depuis Firebase
          const userDocRef = db.doc('users', currentUser.uid);
          const userDoc = await userDocRef.get();
          
          if (userDoc.exists && userDoc.data()) {
            const userData = userDoc.data();
            if (userData && userData.favorites) {
              setFavorites(userData.favorites);
            }
          } else {
            // Si aucun favori n'est trouvé dans Firebase, vérifier le localStorage
            const localFavorites = localStorage.getItem('favorites');
            if (localFavorites) {
              const parsedFavorites = JSON.parse(localFavorites);
              setFavorites(parsedFavorites);
              
              // Sauvegarder les favoris locaux dans Firebase
              await userDocRef.set({ favorites: parsedFavorites }, { merge: true });
            }
          }
        } catch (error) {
          console.error("Erreur lors du chargement des favoris:", error);
        }
      } else {
        // Si l'utilisateur n'est pas connecté, charger les favoris depuis le localStorage
        const localFavorites = localStorage.getItem('favorites');
        if (localFavorites) {
          setFavorites(JSON.parse(localFavorites));
        }
      }
    };

    loadFavorites();
  }, [currentUser]);

  // Sauvegarder les favoris dans le localStorage et Firebase lorsqu'ils changent
  useEffect(() => {
    // Toujours sauvegarder dans le localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Si l'utilisateur est connecté, sauvegarder aussi dans Firebase
    if (currentUser) {
      const saveFavorites = async () => {
        try {
          const userDocRef = db.doc('users', currentUser.uid);
          await userDocRef.set({ favorites }, { merge: true });
        } catch (error) {
          console.error("Erreur lors de la sauvegarde des favoris:", error);
        }
      };
      
      saveFavorites();
    }
  }, [favorites, currentUser]);

  // Ajouter un produit aux favoris
  const addToFavorites = (product: FavoriteProduct) => {
    setFavorites(prevFavorites => {
      // Vérifier si le produit est déjà dans les favoris
      if (prevFavorites.some(fav => fav.id === product.id)) {
        return prevFavorites;
      }
      return [...prevFavorites, product];
    });
  };

  // Supprimer un produit des favoris
  const removeFromFavorites = (productId: string) => {
    setFavorites(prevFavorites => 
      prevFavorites.filter(product => product.id !== productId)
    );
  };

  // Vérifier si un produit est dans les favoris
  const isFavorite = (productId: string) => {
    return favorites.some(product => product.id === productId);
  };

  // Vider la liste des favoris
  const clearFavorites = () => {
    setFavorites([]);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    clearFavorites
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
