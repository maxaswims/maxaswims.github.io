import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter
} from './ui/dialog';
import { Button } from './ui/button';
import { FavoriteProduct } from '../contexts/FavoritesContext';
import { useFavorites } from '../contexts/useFavorites';
import { Heart, ShoppingBag, X } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FavoritesModal = ({ isOpen, onClose }: FavoritesModalProps) => {
  const { favorites, removeFromFavorites, clearFavorites } = useFavorites();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-pink-dark">
            <Heart className="h-5 w-5 text-pink" />
            Mes Favoris ({favorites.length})
          </DialogTitle>
        </DialogHeader>

        {favorites.length === 0 ? (
          <div className="py-8 text-center">
            <Heart className="mx-auto h-12 w-12 text-gray-300 mb-4" />
            <p className="text-gray-500">Vous n'avez pas encore de favoris</p>
            <p className="text-sm text-gray-400 mt-2">
              Cliquez sur le cœur sur les produits pour les ajouter à vos favoris
            </p>
          </div>
        ) : (
          <>
            <ScrollArea className="max-h-[60vh]">
              <div className="space-y-4 pr-4">
                {favorites.map((product: FavoriteProduct) => (
                  <div 
                    key={product.id} 
                    className="flex items-center gap-4 p-3 rounded-lg border border-gray-100 hover:border-pink-100 transition-all"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="h-16 w-16 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-text-primary truncate">{product.name}</h4>
                      <p className="text-xs text-text-secondary line-clamp-1 mt-1">{product.description}</p>
                      <p className="text-sm font-medium text-pink mt-1">{product.price} €</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-pink hover:bg-pink/10"
                        onClick={() => removeFromFavorites(product.id)}
                        title="Retirer des favoris"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-pink-dark hover:bg-pink/10"
                        title="Ajouter au panier"
                      >
                        <ShoppingBag className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <DialogFooter className="flex justify-between gap-4 mt-4">
              <Button 
                variant="outline" 
                className="border-pink text-pink hover:bg-pink/10"
                onClick={clearFavorites}
              >
                Vider les favoris
              </Button>
              <Button 
                variant="gradient" 
                className="text-white"
                onClick={onClose}
              >
                Fermer
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
