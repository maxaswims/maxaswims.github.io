import { Heart, ShoppingBag, Check } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useFavorites } from "../contexts/useFavorites";
import { useCart } from "../contexts/useCart";
import { toast } from "../components/ui/use-toast";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  isNew?: boolean;
  description?: string;
}

export const ProductCard = ({ id, image, name, price, isNew, description }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { addToCart, items } = useCart();
  
  const isProductFavorite = isFavorite(id);
  const isInCart = items.some(item => item.id === id);
  
  const handleFavoriteClick = () => {
    if (isProductFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites({
        id,
        image,
        name,
        price,
        description
      });
    }
  };
  
  const handleAddToCart = () => {
    setIsAddingToCart(true);
    addToCart({
      id,
      image,
      name,
      price
    });
    
    toast({
      title: "Produit ajouté au panier",
      description: `${name} a été ajouté à votre panier`,
      variant: "default",
    });
    
    // Réinitialiser l'état après un court délai pour l'animation
    setTimeout(() => setIsAddingToCart(false), 1500);
  };

  return (
    <div
      className="product-card group transform transition-all duration-300 hover:translate-y-[-5px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bubble-shadow hover:pink-glow">
        <img
          src={image}
          alt={name}
          className="product-image transform transition-transform duration-500 group-hover:scale-105 rounded-2xl"
        />
        <Button
          variant="ghost"
          size="icon"
          className={`absolute right-3 top-3 bg-white/80 backdrop-blur-sm hover:bg-pink-light/50 z-20 ${isProductFavorite ? 'text-pink' : 'text-pink-dark'}`}
          onClick={(e) => {
            e.stopPropagation();
            handleFavoriteClick();
          }}
        >
          <Heart className={`h-5 w-5 ${isProductFavorite ? 'fill-pink' : ''}`} />  
        </Button>
        {isNew && (
          <span className="absolute left-3 top-3 bubble-shape bg-gradient-pink px-4 py-1 text-xs font-medium text-white animate-pulse-pink">
            NOUVEAU
          </span>
        )}

        {/* Bouton Ajouter au panier qui apparaît au survol */}
        {isHovered && (
          <div className="card-overlay flex items-center justify-center animate-scale-in z-10">
            <Button 
              variant="bubble" 
              className="flex items-center gap-2 animate-float"
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
              disabled={isAddingToCart}
            >
              {isAddingToCart ? (
                <>
                  <Check className="h-4 w-4" />
                  AJOUTÉ
                </>
              ) : (
                <>
                  <ShoppingBag className="h-4 w-4" />
                  {isInCart ? 'AJOUTER ENCORE' : 'AJOUTER AU PANIER'}
                </>
              )}
            </Button>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-base font-medium text-text-primary group-hover:text-pink-dark transition-colors duration-300">{name}</h3>
        <p className="mt-1 text-sm text-text-secondary line-clamp-1">{description}</p>
        <p className="mt-2 text-base font-medium text-pink">{price} €</p>
      </div>
    </div>
  );
};
