import { ShoppingBag, Menu, Search, User } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Bannière promotionnelle */}
      {showPromo && (
        <div className="bg-turquoise text-white text-center py-1 text-xs md:text-sm relative">
          <p>Livraison gratuite pour toute commande supérieure à 100€</p>
          <button
            type="button"
            onClick={() => setShowPromo(false)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            aria-label="Fermer"
          >
            ×
          </button>
        </div>
      )}

      {/* Navigation principale */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2 text-xl font-light tracking-wider text-turquoise-dark">
              <img src="/MAXAlogo.ico" alt="MAXASWIMS Logo" className="h-8 w-8" />
              MAXASWIMS
            </a>

            {/* Menu desktop */}
            <div className="hidden md:flex md:gap-8">
              <a href="#" className="text-text-primary hover:text-turquoise text-sm uppercase tracking-wider">
                Nouveautés
              </a>
              <a href="#" className="text-text-primary hover:text-turquoise text-sm uppercase tracking-wider">
                Best-Sellers
              </a>
              <a href="#" className="text-text-primary hover:text-turquoise text-sm uppercase tracking-wider">
                Boutique
              </a>
              <a href="#" className="text-text-primary hover:text-turquoise text-sm uppercase tracking-wider">
                Journal
              </a>
              <a href="#" className="text-text-primary hover:text-turquoise text-sm uppercase tracking-wider">
                À propos
              </a>
            </div>
          </div>

          {/* Icônes */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-text-primary hover:text-turquoise">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-text-primary hover:text-turquoise">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative text-text-primary hover:text-turquoise">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-coral text-xs text-white">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="absolute w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col space-y-4 p-6">
            <a href="#" className="text-text-primary hover:text-turquoise text-sm uppercase tracking-wider">
              Nouveautés
            </a>
            <a href="#" className="text-text-primary hover:text-turquoise text-sm uppercase tracking-wider">
              Best-Sellers
            </a>
            <a href="#" className="text-text-primary hover:text-turquoise text-sm uppercase tracking-wider">
              Boutique
            </a>
            <a href="#" className="text-text-primary hover:text-turquoise text-sm uppercase tracking-wider">
              Journal
            </a>
            <a href="#" className="text-text-primary hover:text-turquoise text-sm uppercase tracking-wider">
              À propos
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
