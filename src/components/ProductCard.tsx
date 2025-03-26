
import { Heart } from "lucide-react";
import { Button } from "./ui/button";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  isNew?: boolean;
  description?: string;
}

export const ProductCard = ({ image, name, price, isNew, description }: ProductCardProps) => {
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="product-image transform transition-transform duration-500 group-hover:scale-105"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 bg-white/80 backdrop-blur-sm"
        >
          <Heart className="h-5 w-5" />
        </Button>
        {isNew && (
          <span className="absolute left-2 top-2 rounded-full bg-ocean-500 px-3 py-1 text-xs text-white">
            Nouveau
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
        <p className="mt-2 text-lg font-medium text-ocean-600">{price} €</p>
        <Button className="mt-4 w-full bg-ocean-600 hover:bg-ocean-700">
          Ajouter au panier
        </Button>
      </div>
    </div>
  );
};
