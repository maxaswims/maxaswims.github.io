import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';

const Nouveautes = () => {
  // Données factices pour les nouveaux produits
  const newProducts = [
    {
      id: 'np1',
      name: 'Bikini Coral Reef',
      price: 89.90,
      image: '/assets/PICS/DS/4girls2.png',
      category: 'Bikini',
      isNew: true,
      colors: ['pink', 'coral', 'sand-gold'],
    },
    {
      id: 'np2',
      name: 'Maillot Une-Pièce Rose',
      price: 119.90,
      image: '/assets/PICS/DS/2girls.png',
      category: 'Une-Pièce',
      isNew: true,
      colors: ['pink-dark', 'coral-light', 'sand'],
    },
    {
      id: 'np3',
      name: 'Bikini Sable Doré',
      price: 94.90,
      image: '/assets/PICS/DS/4models.png',
      category: 'Bikini',
      isNew: true,
      colors: ['sand-gold', 'pink-light', 'coral'],
    },
    {
      id: 'np4',
      name: 'Ensemble Plage Coral',
      price: 149.90,
      image: '/assets/PICS/DS/maxaSquare.png',
      category: 'Ensemble',
      isNew: true,
      colors: ['coral-dark', 'pink', 'sand-lightest'],
    },
  ];

  return (
    <div className="pt-32 pb-16 animate-fade-up">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-light text-center mb-2">
          <span className="text-gradient-pink font-medium">Nouveautés</span>
        </h1>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
          Découvrez nos dernières créations, alliant savoir-faire artisanal et design contemporain.
          Chaque pièce est confectionnée à la main avec amour et attention aux détails.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newProducts.map((product) => (
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
            VOIR TOUTE LA COLLECTION
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Nouveautes;
