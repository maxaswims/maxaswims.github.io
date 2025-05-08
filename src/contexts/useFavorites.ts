import { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';

// Hook personnalisé pour utiliser le contexte des favoris
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites doit être utilisé à l\'intérieur d\'un FavoritesProvider');
  }
  return context;
}
