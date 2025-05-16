import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../contexts/useCart';

const BestSellers = () => {
  const { getItemCount } = useCart();
  
  // Produits best-sellers mis à jour avec les maillots demandés
  const bestSellerProducts = [
    {
      id: 'bs1',
      name: 'Bikini Green Jungle',
      price: 89.90,
      image: '/assets/PICS/Aleesha2024/Green/P1soloGreen24.JPG',
      category: 'Bikini',
      isNew: true,
      isBestSeller: true,
      colors: ['green', 'green-dark', 'green-light'],
    },
    {
      id: 'bs2',
      name: 'Maillot White & Coral',
      price: 89.90,
      image: '/assets/PICS/Sandy2024/Sandy1.jpg',
      category: 'Bikini',
      isNew: true,
      isBestSeller: true,
      colors: ['white', 'coral', 'pink'],
    },
    {
      id: 'bs3',
      name: 'Bikini White & Coral',
      price: 89.90,
      image: '/assets/PICS/Sandy2024/Sandy2.jpg',
      category: 'Bikini',
      isNew: true,
      isBestSeller: true,
      colors: ['white', 'coral', 'pink'],
    },
    {
      id: 'bs4',
      name: 'Bikini White & Coral',
      price: 89.90,
      image: '/assets/PICS/Sandy2024/Sandy8.jpg',
      category: 'Bikini',
      isNew: true,
      isBestSeller: true,
      colors: ['white', 'coral', 'pink'],
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
              id={product.id}
              image={product.image} 
              name={product.name} 
              price={product.price} 
              isNew={product.isNew} 
              description={product.category}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="gradient" size="lg" className="animate-pulse-pink" asChild>
            <a href="/#/boutique">
              EXPLORER TOUS LES BEST-SELLERS
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
