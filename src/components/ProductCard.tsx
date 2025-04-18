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
      className="product-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-sm">
        <img
          src={image}
          alt={name}
          className="product-image transform transition-transform duration-500 group-hover:scale-105"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 bg-white/80 backdrop-blur-sm hover:bg-white/90"
        >
          <Heart className="h-5 w-5 text-text-primary" />
        </Button>
        {isNew && (
          <span className="absolute left-2 top-2 rounded-sm bg-coral px-3 py-1 text-xs font-medium text-white">
            NOUVEAU
          </span>
        )}

        {/* Bouton Ajouter au panier qui apparaît au survol */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity duration-300">
            <Button className="btn-primary flex items-center gap-2 px-4 py-2 rounded-sm">
              <ShoppingBag className="h-4 w-4" />
              AJOUTER AU PANIER
            </Button>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-base font-medium text-text-primary">{name}</h3>
        <p className="mt-1 text-sm text-text-secondary line-clamp-1">{description}</p>
        <p className="mt-2 text-base font-medium text-turquoise">{price} €</p>
      </div>
    </div>
  );
};
