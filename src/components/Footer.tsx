import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-text-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-light tracking-wider mb-4">MAXASWIMS</h2>
            <p className="text-white/70 text-sm mb-6">
              Des maillots de bain au crochet faits à la main, alliant savoir-faire artisanal et style contemporain.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Nouveautés</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best-Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Boutique</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
            </ul>
          </div>
          
          {/* Informations */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Informations</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Livraison</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Retours</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70">
              <li>contact@maxaswims.fr</li>
              <li>+33 6 12 34 56 78</li>
              <li>Biarritz, France</li>
            </ul>
          </div>
        </div>
        
        {/* Paiement et copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white/50 text-sm">
              © 2024 MAXASWIMS. Tous droits réservés.
            </p>
          </div>
          <div>
            <p className="text-white/50 text-sm">
              Paiement sécurisé par Stripe
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
