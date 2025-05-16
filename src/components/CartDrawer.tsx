import { ShoppingBag, X, Trash2, Plus, Minus } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "../contexts/useCart";
import { useState, useEffect } from "react";

export const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromCart, updateQuantity, getItemCount, getTotalPrice } = useCart();
  
  // Fermer le panier quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const drawer = document.getElementById('cart-drawer');
      const cartButton = document.getElementById('cart-button');
      
      if (drawer && !drawer.contains(event.target as Node) && 
          cartButton && !cartButton.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Désactiver le défilement du body quand le panier est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

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

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 animate-fade-in" />
      )}

      {/* Drawer */}
      <div
        id="cart-drawer"
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-xl transform transition-transform duration-300 rounded-l-3xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* En-tête */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-medium">Votre Panier</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Contenu du panier */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
                <p className="text-gray-500">Votre panier est vide</p>
                <Button 
                  variant="bubble" 
                  className="mt-4"
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
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4 pb-4 border-b">
                    <div className="w-20 h-20 rounded-xl overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-pink">{item.price} €</p>
                      
                      <div className="flex items-center mt-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-7 w-7 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="mx-2 text-sm">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-7 w-7 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="ml-auto text-gray-400 hover:text-pink"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Pied de page avec total et bouton de paiement */}
          {items.length > 0 && (
            <div className="p-4 border-t">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Total</span>
                <span className="font-medium">{totalPrice} €</span>
              </div>
              <Button variant="bubble" className="w-full">
                PASSER LA COMMANDE
              </Button>
              <p className="text-xs text-center mt-2 text-gray-500">
                Paiement sécurisé par Stripe
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
