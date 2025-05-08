import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';

export const Boutique = () => {
  // Catégories de produits
  const categories = ["Tous", "Bikini", "Une-Pièce", "Ensemble", "Accessoires"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  // Données factices pour tous les produits
  const allProducts = [
    {
      id: "p1",
      name: "Bikini Triangle Rose",
      price: 89.90,
      image: "/assets/PICS/DS/BubbleFusionMaxa.png",
      category: "Bikini",
      isNew: false,
      isBestSeller: true,
      colors: ["pink", "pink-dark", "pink-light"],
    },
    {
      id: "p2",
      name: "Maillot Bandeau Corail",
      price: 79.90,
      image: "/assets/PICS/DS/maxaDSpink.png",
      category: "Bikini",
      isNew: false,
      isBestSeller: true,
      colors: ["coral", "coral-light", "coral-dark"],
    },
    {
      id: "p3",
      name: "Une-Pièce Sable",
      price: 109.90,
      image: "/assets/PICS/DS/MAXApalms.png",
      category: "Une-Pièce",
      isNew: false,
      isBestSeller: true,
      colors: ["sand", "sand-gold", "sand-lightest"],
    },
    {
      id: "p4",
      name: "Ensemble Plage Complet",
      price: 159.90,
      image: "/assets/PICS/DS/MAXAcolors.png",
      category: "Ensemble",
      isNew: false,
      isBestSeller: true,
      colors: ["pink", "coral", "sand-gold"],
    },
    {
      id: "p5",
      name: "Bikini Coral Reef",
      price: 89.90,
      image: "/assets/PICS/DS/4girls2.png",
      category: "Bikini",
      isNew: true,
      colors: ["pink", "coral", "sand-gold"],
    },
    {
      id: "p6",
      name: "Maillot Une-Pièce Rose",
      price: 119.90,
      image: "/assets/PICS/DS/2girls.png",
      category: "Une-Pièce",
      isNew: true,
      colors: ["pink-dark", "coral-light", "sand"],
    },
    {
      id: "p7",
      name: "Sac de Plage Tressé",
      price: 49.90,
      image: "/assets/PICS/DS/MODELE3DCARD.png",
      category: "Accessoires",
      isNew: true,
      colors: ["sand-gold", "coral"],
    },
    {
      id: "p8",
      name: "Paréo Motif Palmier",
      price: 39.90,
      image: "/assets/PICS/DS/DS1.png",
      category: "Accessoires",
      isNew: false,
      colors: ["pink-light", "sand-lightest"],
    },
  ];

  // Filtrer les produits en fonction de la catégorie active
  const filteredProducts = activeCategory === "Tous"
    ? allProducts
    : allProducts.filter(product => product.category === activeCategory);

  return (
    <div className="pt-32 pb-16 animate-fade-up">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-light text-center mb-2">
          <span className="text-gradient-pink font-medium">Boutique</span>
        </h1>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-8">
          Explorez notre collection complète de maillots de bain et accessoires de plage faits à la main.
        </p>

        {/* Filtres de catégories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "gradient" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full transition-all ${activeCategory === category ? 'shadow-pink-glow' : 'border-pink text-pink'}`}
            >
              {category.toUpperCase()}
            </Button>
          ))}
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              id={product.id}
              image={product.image} 
              name={product.name} 
              price={product.price} 
              isNew={product.isNew} 
              description={product.category}
            />
          ))}
        </div>

        {/* Pagination simplifiée */}
        <div className="flex justify-center gap-2 mt-8">
          <Button variant="ghost" size="icon" className="rounded-full border border-pink text-pink">
            1
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full border border-pink/50 text-pink/50 hover:border-pink hover:text-pink">
            2
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full border border-pink/50 text-pink/50 hover:border-pink hover:text-pink">
            3
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Boutique;
