import { createContext } from 'react';

// Type pour un produit favori
export interface FavoriteProduct {
  id: string;
  image: string;
  name: string;
  price: number;
  description?: string;
}

// Type pour le contexte des favoris
export interface FavoritesContextType {
  favorites: FavoriteProduct[];
  addToFavorites: (product: FavoriteProduct) => void;
  removeFromFavorites: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  clearFavorites: () => void;
}

// Créer le contexte
export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);
