import { ShoppingBag, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md h-[45px]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 h-full">
        <div className="flex items-center gap-8">
          <a href="/" className="text-lg font-semibold text-ocean-900">
            MAXA.Swims
          </a>
          <div className="hidden md:flex md:gap-6">
            <a href="#" className="text-gray-600 hover:text-ocean-600">
              Nouveautés
            </a>
            <a href="#" className="text-gray-600 hover:text-ocean-600">
              Collection
            </a>
            <a href="#" className="text-gray-600 hover:text-ocean-600">
              À propos
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-ocean-500 text-xs text-white">
              0
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full w-full bg-white/80 backdrop-blur-md md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <a href="#" className="text-gray-600 hover:text-ocean-600">
              Nouveautés
            </a>
            <a href="#" className="text-gray-600 hover:text-ocean-600">
              Collection
            </a>
            <a href="#" className="text-gray-600 hover:text-ocean-600">
              À propos
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
