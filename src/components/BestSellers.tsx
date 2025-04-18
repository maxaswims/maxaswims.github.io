import { ProductCard } from "./ProductCard";

// Données des produits best-sellers
const bestSellers = [
  {
    id: 1,
    name: "Bikini Coral Reef",
    price: 89,
    image: "/assets/PICS/Sandy/iG/202405.jpg",
    isNew: false,
    description: "Bikini triangle en coton bio tricoté à la main, modèle signature",
  },
  {
    id: 2,
    name: "Ensemble Sunset Dream",
    price: 129,
    image: "/assets/PICS/Sandy/iG/202413.jpg",
    description: "Ensemble bikini et paréo en crochet, parfait pour les soirées d'été",
  },
  {
    id: 3,
    name: "Bikini Ocean Blue",
    price: 99,
    image: "/assets/PICS/Sandy/iG/202417.jpg",
    isNew: true,
    description: "Bikini triangle en coton bio, inspiration océanique pour un style unique",
  },
  {
    id: 4,
    name: "Ensemble Beach Day",
    price: 149,
    image: "/assets/PICS/Sandy/iG/202418.jpg",
    description: "Ensemble complet pour une journée parfaite à la plage, confort et élégance",
  },
];

export const BestSellers = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Collection</h2>
          <h3 className="section-heading">NOS BEST-SELLERS</h3>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
