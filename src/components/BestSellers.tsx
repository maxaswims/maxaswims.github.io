import { ProductCard } from "./ProductCard";

// Données des produits best-sellers
const bestSellers = [
  {
    id: 1,
    name: "Bikini Triangle Marine",
    price: 89,
    image: "/lovable-uploads/ef02853e-5145-4c59-8166-3cea60502a2a.png",
    isNew: false,
    description: "Bikini triangle en coton bio tricoté à la main, coloris bleu marine",
  },
  {
    id: 2,
    name: "Ensemble Soleil",
    price: 129,
    image: "/lovable-uploads/ce7fcd5c-2235-45db-87b7-1c609481a086.png",
    description: "Ensemble bikini et jupe en crochet, coloris jaune soleil",
  },
  {
    id: 3,
    name: "Bikini Pink Summer",
    price: 99,
    image: "/lovable-uploads/e5918497-b4d8-4797-8add-05b82867072e.png",
    isNew: false,
    description: "Bikini triangle en coton bio avec jupe assortie, coloris rose fuchsia",
  },
  {
    id: 4,
    name: "Ensemble Sable",
    price: 149,
    image: "/lovable-uploads/4cbbd094-e709-4da7-85a8-473002e77a23.png",
    description: "Ensemble bikini triangle avec jupe macramé, coloris beige sable",
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
