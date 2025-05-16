import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../contexts/useCart';

export const Boutique = () => {
  // Catégories de produits
  const categories = ["Tous", "Bikini", "Une-Pièce", "Ensemble", "Accessoires"];
  const [activeCategory, setActiveCategory] = useState("Tous");
  const { getItemCount } = useCart();

  // Produits avec images des dossiers Sandy2024 et Aleesha2024
  const allProducts = [
    {
      id: "p1",
      name: "Bikini Blue Waves",
      price: 89.90,
      image: "/assets/PICS/Aleesha2024/Blue/P3Blue22.jpeg",
      category: "Bikini",
      isNew: true,
      isBestSeller: true,
      colors: ["blue", "blue-dark", "blue-light"],
    },
    {
      id: "p2",
      name: "Bikini Blue Ocean",
      price: 79.90,
      image: "/assets/PICS/Aleesha2024/Blue/P3Blue5.jpeg",
      category: "Bikini",
      isNew: true,
      isBestSeller: true,
      colors: ["blue", "blue-light", "blue-dark"],
    },
    {
      id: "p3",
      name: "Bikini Green Jungle",
      price: 89.90,
      image: "/assets/PICS/Aleesha2024/Green/P1soloGreen24.JPG",
      category: "Bikini",
      isNew: true,
      isBestSeller: false,
      colors: ["green", "green-dark", "green-light"],
    },
    {
      id: "p4",
      name: "Bikini Green Paradise",
      price: 89.90,
      image: "/assets/PICS/Aleesha2024/Green/P1soloGreen28.JPG",
      category: "Bikini",
      isNew: true,
      isBestSeller: false,
      colors: ["green", "green-light", "green-dark"],
    },
    {
      id: "p5",
      name: "Bikini Green Tropical",
      price: 89.90,
      image: "/assets/PICS/Aleesha2024/Green/P1soloGreen49.JPG",
      category: "Bikini",
      isNew: true,
      colors: ["green", "green-dark", "green-light"],
    },
    {
      id: "p6",
      name: "Bikini Green Leaf",
      price: 89.90,
      image: "/assets/PICS/Aleesha2024/Green/P1soloGreen57.JPG",
      category: "Bikini",
      isNew: true,
      colors: ["green", "green-light", "green-dark"],
    },
    {
      id: "p7",
      name: "Bikini Green Emerald",
      price: 89.90,
      image: "/assets/PICS/Aleesha2024/Green/P2simoGreen20.jpg",
      category: "Bikini",
      isNew: true,
      colors: ["green", "green-dark", "green-light"],
    },
    {
      id: "p8",
      name: "Maillot Sandy Sunset",
      price: 89.90,
      image: "/assets/PICS/Sandy2024/Sandy1.jpg",
      category: "Bikini",
      isNew: true,
      isBestSeller: true,
      colors: ["pink", "coral", "sand-gold"],
    },
    {
      id: "p9",
      name: "Bikini Sandy Beach",
      price: 89.90,
      image: "/assets/PICS/Sandy2024/Sandy2.jpg",
      category: "Bikini",
      isNew: true,
      colors: ["pink", "coral", "sand-gold"],
    },
    {
      id: "p10",
      name: "Maillot Une-Pièce Sandy",
      price: 119.90,
      image: "/assets/PICS/Sandy2024/Sandy3.jpg",
      category: "Une-Pièce",
      isNew: true,
      colors: ["pink-dark", "coral-light", "sand"],
    },
    {
      id: "p11",
      name: "Bikini Sandy Coral",
      price: 89.90,
      image: "/assets/PICS/Sandy2024/Sandy4.jpg",
      category: "Bikini",
      isNew: true,
      colors: ["coral", "pink", "sand"],
    },
    {
      id: "p12",
      name: "Ensemble Plage Pink & Sand",
      price: 159.90,
      image: "/assets/PICS/Sandy2024/Sandy5.jpg",
      category: "Ensemble",
      isNew: true,
      colors: ["pink", "coral", "sand-gold"],
    },
    {
      id: "p13",
      name: "Bikini Sandy Gold",
      price: 89.90,
      image: "/assets/PICS/Sandy2024/Sandy6.jpg",
      category: "Bikini",
      isNew: true,
      colors: ["gold", "sand", "coral"],
    },
    {
      id: "p14",
      name: "Maillot Sandy Waves",
      price: 89.90,
      image: "/assets/PICS/Sandy2024/Sandy7.jpg",
      category: "Bikini",
      isNew: true,
      colors: ["pink", "coral", "sand"],
    },
    {
      id: "p15",
      name: "Bikini Sandy Paradise",
      price: 89.90,
      image: "/assets/PICS/Sandy2024/Sandy8.jpg",
      category: "Bikini",
      isNew: true,
      colors: ["pink", "coral", "sand"],
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
