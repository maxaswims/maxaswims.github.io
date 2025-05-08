import { ShoppingBag, Menu, Search, User, Heart, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { AuthModal } from "./AuthModal";
import { ProfileModal } from "./ProfileModal";
import { FavoritesModal } from "./FavoritesModal";
import { useAuth } from "../contexts/useAuth";
import { useFavorites } from "../contexts/useFavorites";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false);
  
  const { currentUser, logout, userProfile } = useAuth();
  const { favorites } = useFavorites();

  // Effet pour détecter le défilement et changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300">
      {/* Bannière promotionnelle */}
      {showPromo && (
        <div className="bg-gradient-pink text-white text-center py-2 text-xs md:text-sm relative animate-pulse-pink">
          <p className="font-medium">Livraison gratuite pour toute commande supérieure à 100€</p>
          <button
            type="button"
            onClick={() => setShowPromo(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
            aria-label="Fermer"
          >
            ×
          </button>
        </div>
      )}

      {/* Navigation principale */}
      <nav 
        className={`${scrolled ? 'bg-white/95 shadow-md' : 'bg-white/80'} backdrop-blur-md transition-all duration-300`}
      >
        <div className="container mx-auto flex items-center justify-between px-2 md:px-4 py-2 md:py-3">
          {/* Logo */}
          <div className="flex items-center gap-4 md:gap-8">
            <a href="/" className="flex items-center gap-2 text-xl font-light tracking-wider hover:opacity-80 transition-opacity">
              <span className="relative">
                <img
                  src="/MAXALOGO.png"
                  alt="MAXASWIMS Logo"
                  className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-pink shadow-pink-glow transition-all duration-300 hover:animate-bubble object-cover"
                />
                <span className="absolute -bottom-1 -right-1 flex h-3 w-3 md:h-4 md:w-4 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink opacity-30"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-pink"></span>
                </span>
              </span>
              <span className="text-gradient-pink font-medium">MAXA</span><span className="text-text-primary">SWIMS</span>
            </a>

            {/* Menu desktop */}
            <div className="hidden md:flex md:gap-8">
              <a href="/#/nouveautes" className="text-text-primary hover:text-pink text-sm uppercase tracking-wider transition-colors duration-300 relative group">
                Nouveautés
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/#/best-sellers" className="text-text-primary hover:text-pink text-sm uppercase tracking-wider transition-colors duration-300 relative group">
                Best-Sellers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/#/boutique" className="text-text-primary hover:text-pink text-sm uppercase tracking-wider transition-colors duration-300 relative group">
                Boutique
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/#/journal" className="text-text-primary hover:text-pink text-sm uppercase tracking-wider transition-colors duration-300 relative group">
                Journal
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/#/a-propos" className="text-text-primary hover:text-pink text-sm uppercase tracking-wider transition-colors duration-300 relative group">
                À propos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>

          {/* Icônes */}
          <div className="flex items-center gap-1 md:gap-3">
            <Button variant="ghost" size="icon" className="text-pink-dark hover:bg-pink/10 hover:text-pink transition-colors duration-300">
              <Search className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-pink-dark hover:bg-pink/10 hover:text-pink transition-colors duration-300 relative"
              onClick={() => setIsFavoritesModalOpen(true)}
            >
              <Heart className="h-4 w-4 md:h-5 md:w-5" />
              {favorites.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-pink-dark text-[10px] md:text-xs text-white border border-white">
                  {favorites.length}
                </span>
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-pink-dark hover:bg-pink/10 hover:text-pink transition-colors duration-300"
              onClick={() => currentUser ? setIsProfileModalOpen(true) : setIsAuthModalOpen(true)}
            >
              <User className="h-4 w-4 md:h-5 md:w-5" />
              {currentUser && (
                <span className="absolute -right-1 -top-1 flex h-2 w-2 items-center justify-center rounded-full bg-green-500 border border-white"></span>
              )}
            </Button>
            {currentUser && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-pink-dark hover:bg-pink/10 hover:text-pink transition-colors duration-300"
                onClick={() => logout()}
                title="Se déconnecter"
              >
                <LogOut className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            )}
            <Button variant="bubble" size="icon" className="relative text-white hover:text-white">
              <ShoppingBag className="h-4 w-4 md:h-5 md:w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-pink-dark text-[10px] md:text-xs text-white border border-white">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-pink-dark hover:bg-pink/10 hover:text-pink"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="absolute w-full bg-white/95 backdrop-blur-md shadow-md md:hidden animate-fade-down">
          <div className="flex flex-col space-y-5 p-6">
            <a href="/#/nouveautes" className="text-pink-dark hover:text-pink text-sm uppercase tracking-wider transition-colors duration-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink"></span>
              Nouveautés
            </a>
            <a href="/#/best-sellers" className="text-pink-dark hover:text-pink text-sm uppercase tracking-wider transition-colors duration-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink"></span>
              Best-Sellers
            </a>
            <a href="/#/boutique" className="text-pink-dark hover:text-pink text-sm uppercase tracking-wider transition-colors duration-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink"></span>
              Boutique
            </a>
            <a href="/#/journal" className="text-pink-dark hover:text-pink text-sm uppercase tracking-wider transition-colors duration-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink"></span>
              Journal
            </a>
            <a href="/#/a-propos" className="text-pink-dark hover:text-pink text-sm uppercase tracking-wider transition-colors duration-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink"></span>
              À propos
            </a>
            <Button 
              variant="gradient" 
              size="sm" 
              className="mt-2 w-full rounded-full shadow-pink-glow"
              onClick={() => setIsAuthModalOpen(true)}
            >
              {currentUser ? `Bonjour, ${userProfile?.displayName || 'Utilisateur'}` : 'CONNEXION / INSCRIPTION'}
            </Button>
          </div>
        </div>
      )}
      
      {/* Modale d'authentification */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
      
      {/* Modale de profil */}
      <ProfileModal 
        isOpen={isProfileModalOpen} 
        onClose={() => setIsProfileModalOpen(false)} 
      />
      
      {/* Modale des favoris */}
      <FavoritesModal 
        isOpen={isFavoritesModalOpen} 
        onClose={() => setIsFavoritesModalOpen(false)} 
      />
    </header>
  );
};
