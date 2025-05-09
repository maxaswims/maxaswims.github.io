import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  isNew?: boolean;
  description?: string;
}

export const ProductCard = ({ image, name, price, isNew, description }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="product-card group transform transition-all duration-300 hover:translate-y-[-5px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl bubble-shadow hover:pink-glow">
        <img
          src={image}
          alt={name}
          className="product-image transform transition-transform duration-500 group-hover:scale-105"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-3 bg-white/80 backdrop-blur-sm hover:bg-pink-light/50 text-pink-dark"
        >
          <Heart className="h-5 w-5" />
        </Button>
        {isNew && (
          <span className="absolute left-3 top-3 bubble-shape bg-gradient-pink px-4 py-1 text-xs font-medium text-white animate-pulse-pink">
            NOUVEAU
          </span>
        )}

        {/* Bouton Ajouter au panier qui apparaît au survol */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-pink/10 backdrop-blur-sm transition-all duration-300 animate-scale-in">
            <Button variant="bubble" className="flex items-center gap-2 animate-float">
              <ShoppingBag className="h-4 w-4" />
              AJOUTER AU PANIER
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
