import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';

const BestSellers = () => {
  // Données factices pour les produits best-sellers
  const bestSellerProducts = [
    {
      id: 'bs1',
      name: 'Bikini Triangle Rose',
      price: 89.90,
      image: '/assets/PICS/DS/BubbleFusionMaxa.png',
      category: 'Bikini',
      isNew: false,
      isBestSeller: true,
      colors: ['pink', 'pink-dark', 'pink-light'],
    },
    {
      id: 'bs2',
      name: 'Maillot Bandeau Corail',
      price: 79.90,
      image: '/assets/PICS/DS/maxaDSpink.png',
      category: 'Bikini',
      isNew: false,
      isBestSeller: true,
      colors: ['coral', 'coral-light', 'coral-dark'],
    },
    {
      id: 'bs3',
      name: 'Une-Pièce Sable',
      price: 109.90,
      image: '/assets/PICS/DS/MAXApalms.png',
      category: 'Une-Pièce',
      isNew: false,
      isBestSeller: true,
      colors: ['sand', 'sand-gold', 'sand-lightest'],
    },
    {
      id: 'bs4',
      name: 'Ensemble Plage Complet',
      price: 159.90,
      image: '/assets/PICS/DS/MAXAcolors.png',
      category: 'Ensemble',
      isNew: false,
      isBestSeller: true,
      colors: ['pink', 'coral', 'sand-gold'],
    },
  ];

  return (
    <div className="pt-32 pb-16 animate-fade-up">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-light text-center mb-2">
          <span className="text-gradient-pink font-medium">Best-Sellers</span>
        </h1>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
          Nos modèles les plus populaires, plébiscités par notre communauté pour leur confort, leur style et leur qualité exceptionnelle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {bestSellerProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              image={product.image} 
              name={product.name} 
              price={product.price} 
              isNew={product.isNew} 
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="gradient" size="lg" className="animate-pulse-pink">
            EXPLORER TOUS LES BEST-SELLERS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
