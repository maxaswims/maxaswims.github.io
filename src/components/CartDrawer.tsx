import { ShoppingBag, X, Trash2, Plus, Minus, Instagram, AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "../contexts/useCart";
import { useState } from "react";
import { toast } from "./ui/use-toast";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter
} from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';

export const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showOrderNotice, setShowOrderNotice] = useState(false);
  const { items, removeFromCart, updateQuantity, getItemCount, getTotalPrice } = useCart();

  const itemCount = getItemCount();
  const totalPrice = getTotalPrice().toFixed(2);

  return (
    <>
      {/* Bouton du panier */}
      <Button
        id="cart-button"
        variant="ghost"
        size="icon"
        className="relative"
        onClick={() => setIsOpen(true)}
      >
        <ShoppingBag className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-pink text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Button>

      {/* Modale du panier */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md md:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-pink-dark">
              <ShoppingBag className="h-5 w-5 text-pink" />
              Mon Panier ({itemCount})
            </DialogTitle>
          </DialogHeader>

          {/* Contenu du panier */}
            {items.length === 0 ? (
              <div className="py-8 text-center">
                <ShoppingBag className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                <p className="text-gray-500">Votre panier est vide</p>
                <p className="text-sm text-gray-400 mt-2">
                  Ajoutez des articles à votre panier pour les retrouver ici
                </p>
                <Button 
                  variant="gradient" 
                  className="mt-6"
                  onClick={() => {
                    setIsOpen(false);
                    // Rediriger vers la boutique
                    window.location.hash = '/boutique';
                  }}
                >
                  DÉCOUVRIR NOS PRODUITS
                </Button>
              </div>
            ) : (
              <ScrollArea className="max-h-[60vh]">
                <div className="space-y-4 pr-4">
                  {items.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex items-center gap-4 p-3 rounded-lg border border-gray-100 hover:border-pink-100 transition-all"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-16 w-16 object-cover rounded-md"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-text-primary truncate">{item.name}</h4>
                        <div className="flex items-center mt-1">
                          <p className="text-sm font-medium text-pink">{item.price} €</p>
                          <div className="flex items-center ml-4 bg-white rounded-full shadow-sm p-1 w-fit">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-6 w-6 rounded-full hover:bg-pink/10"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="mx-2 text-xs font-medium min-w-[16px] text-center">{item.quantity}</span>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-6 w-6 rounded-full hover:bg-pink/10"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-pink hover:bg-pink/10"
                        onClick={() => removeFromCart(item.id)}
                        title="Retirer du panier"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}  
                </div>
              </ScrollArea>
            )}

            {/* Pied de page avec total et bouton de paiement */}
            {items.length > 0 && (
              <>
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg mt-4">
                  <span className="font-medium text-text-primary">Total</span>
                  <span className="font-medium text-pink">{totalPrice} €</span>
                </div>
                
                {showOrderNotice && (
                  <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-red-50 to-pink-50 border border-pink/20">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-pink-dark flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-pink-dark">Commandes disponibles sur Instagram</p>
                        <p className="text-xs text-pink-dark/80 mt-1">
                          Les commandes sont actuellement disponibles uniquement via message privé sur Instagram. 
                          Les commandes en ligne seront disponibles très bientôt sur notre site.
                        </p>
                        <a 
                          href="https://www.instagram.com/p/C8xVJbPoXIh/?img_index=1" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-pink-dark hover:text-pink transition-colors"
                        >
                          <Instagram className="h-3 w-3" />
                          Contacter sur Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                <DialogFooter className="flex justify-between gap-4 mt-4">
                  <Button 
                    variant="outline" 
                    className="border-pink text-pink hover:bg-pink/10"
                    onClick={() => setIsOpen(false)}
                  >
                    Continuer mes achats
                  </Button>
                  <Button 
                    variant="gradient" 
                    className="text-white"
                    onClick={() => {
                      setShowOrderNotice(true);
                      toast({
                        variant: "destructive",
                        title: "Commandes disponibles sur Instagram",
                        description: "Les commandes sont actuellement disponibles uniquement via message privé sur Instagram. Les commandes en ligne seront disponibles très bientôt sur notre site.",
                        action: (
                          <a 
                            href="https://www.instagram.com/p/C8xVJbPoXIh/?img_index=1" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="rounded-md bg-white px-3 py-2 text-sm font-medium text-pink hover:bg-pink/10 focus:outline-none focus:ring-2 focus:ring-pink-500 flex items-center gap-2"
                          >
                            <Instagram className="h-4 w-4" />
                            Contacter sur Instagram
                          </a>
                        ),
                      });
                    }}
                  >
                    Commander
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
    </>
  );
};
