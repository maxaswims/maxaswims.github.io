import { Button } from '../components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Nouveautes = () => {
  // Images pour la collection Blue
  const blueImages = [
    '/assets/PICS/Aleesha2024/Blue/P3Blue5.jpeg',
    '/assets/PICS/Aleesha2024/Blue/P3Blue22.jpeg',
    '/assets/PICS/Aleesha2024/Blue/P3Blue9.heic',
    '/assets/PICS/Aleesha2024/Blue/P3Blue11.heic',
    '/assets/PICS/Aleesha2024/Blue/P3Blue12.heic',
    '/assets/PICS/Aleesha2024/Blue/P3Blue13.heic',
    '/assets/PICS/Aleesha2024/Blue/P3Blue14.heic',
    '/assets/PICS/Aleesha2024/Blue/P3Blue15.HEIC',
    '/assets/PICS/Aleesha2024/Blue/P3Blue17.HEIC',
    '/assets/PICS/Aleesha2024/Blue/P3Blue24.HEIC',
    '/assets/PICS/Aleesha2024/Blue/P3Blue7.heic',
    '/assets/PICS/Aleesha2024/Blue/P3Blue8.heic',
  ];

  // Images pour la collection Green
  const greenImages = [
    '/assets/PICS/Aleesha2024/Green/P1soloGreen24.JPG',
    '/assets/PICS/Aleesha2024/Green/P1soloGreen28.JPG',
    '/assets/PICS/Aleesha2024/Green/P1soloGreen49.JPG',
    '/assets/PICS/Aleesha2024/Green/P1soloGreen57.JPG',
    '/assets/PICS/Aleesha2024/Green/P2simoGreen1.HEIC',
    '/assets/PICS/Aleesha2024/Green/P2simoGreen14.heic',
    '/assets/PICS/Aleesha2024/Green/P2simoGreen15.heic',
    '/assets/PICS/Aleesha2024/Green/P2simoGreen16.HEIC',
    '/assets/PICS/Aleesha2024/Green/P2simoGreen20.jpg',
    '/assets/PICS/Aleesha2024/Green/P2simoGreen8.heic',
  ];

  // État pour suivre l'image active dans chaque carrousel
  const [activeBlueIndex, setActiveBlueIndex] = useState(0);
  const [activeGreenIndex, setActiveGreenIndex] = useState(0);

  // Fonction pour faire défiler automatiquement les images
  useEffect(() => {
    const blueInterval = setInterval(() => {
      setActiveBlueIndex((prev) => (prev + 1) % blueImages.length);
    }, 3000);

    const greenInterval = setInterval(() => {
      setActiveGreenIndex((prev) => (prev + 1) % greenImages.length);
    }, 3500); // Légèrement décalé pour éviter que les deux carrousels changent en même temps

    return () => {
      clearInterval(blueInterval);
      clearInterval(greenInterval);
    };
  }, [blueImages.length, greenImages.length]);

  // Références pour les conteneurs de cartes
  const blueCardRef = useRef<HTMLDivElement>(null);
  const greenCardRef = useRef<HTMLDivElement>(null);

  // Fonction pour naviguer manuellement dans les carousels
  const navigateBlueCarousel = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setActiveBlueIndex((prev) => (prev === 0 ? blueImages.length - 1 : prev - 1));
    } else {
      setActiveBlueIndex((prev) => (prev + 1) % blueImages.length);
    }
  };

  const navigateGreenCarousel = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setActiveGreenIndex((prev) => (prev === 0 ? greenImages.length - 1 : prev - 1));
    } else {
      setActiveGreenIndex((prev) => (prev + 1) % greenImages.length);
    }
  };

  return (
    <div className="pt-32 pb-16 animate-fade-up bg-sand-lightest">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-light text-center mb-2">
          <span className="text-gradient-pink font-medium">Nouveautés</span>
        </h1>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
          Découvrez nos deux nouvelles collections exclusives de bikinis.
          Des designs uniques pour sublimer votre silhouette cet été.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Collection Blue */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-medium text-gradient-blue mb-6">Collection Blue Sky</h3>
            
            <div className="relative w-full max-w-sm mx-auto" ref={blueCardRef}>
              {/* Indicateurs de navigation */}
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full bg-white/80 shadow-md hover:bg-pink/10"
                  onClick={() => navigateBlueCarousel('prev')}
                >
                  <ChevronLeft className="h-5 w-5 text-pink" />
                </Button>
              </div>
              
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full bg-white/80 shadow-md hover:bg-pink/10"
                  onClick={() => navigateBlueCarousel('next')}
                >
                  <ChevronRight className="h-5 w-5 text-pink" />
                </Button>
              </div>
              
              {/* Carte principale */}
              <Card className="w-full overflow-visible transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:pink-glow">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl">
                    {blueImages.map((image, index) => (
                      <div 
                        key={index} 
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === activeBlueIndex ? 'opacity-100' : 'opacity-0'}`}
                      >
                        <img 
                          src={image} 
                          alt={`Blue collection ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    
                    {/* Indicateurs de pagination */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {blueImages.map((_, index) => (
                        <button 
                          key={index} 
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeBlueIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                          onClick={() => setActiveBlueIndex(index)}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white">
                    <h4 className="text-xl font-medium mb-2">Ensemble Bikini Blue</h4>
                    <p className="text-gray-600 text-sm mb-4">Notre nouvelle collection inspirée des profondeurs de l'océan. Un bleu intense et rafraîchissant pour un été inoubliable.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-pink">€95.90</span>
                      <Button variant="outline" className="border-pink text-pink hover:bg-pink/10 rounded-full">Voir détails</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Collection Green */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-medium text-gradient-green mb-6">Collection Green Nature</h3>
            
            <div className="relative w-full max-w-sm mx-auto" ref={greenCardRef}>
              {/* Indicateurs de navigation */}
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full bg-white/80 shadow-md hover:bg-pink/10"
                  onClick={() => navigateGreenCarousel('prev')}
                >
                  <ChevronLeft className="h-5 w-5 text-pink" />
                </Button>
              </div>
              
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full bg-white/80 shadow-md hover:bg-pink/10"
                  onClick={() => navigateGreenCarousel('next')}
                >
                  <ChevronRight className="h-5 w-5 text-pink" />
                </Button>
              </div>
              
              {/* Carte principale */}
              <Card className="w-full overflow-visible transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:pink-glow">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl">
                    {greenImages.map((image, index) => (
                      <div 
                        key={index} 
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === activeGreenIndex ? 'opacity-100' : 'opacity-0'}`}
                      >
                        <img 
                          src={image} 
                          alt={`Green collection ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    
                    {/* Indicateurs de pagination */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {greenImages.map((_, index) => (
                        <button 
                          key={index} 
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeGreenIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                          onClick={() => setActiveGreenIndex(index)}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white">
                    <h4 className="text-xl font-medium mb-2">Ensemble Bikini Green</h4>
                    <p className="text-gray-600 text-sm mb-4">Notre collection Green inspirée par la nature luxuriante. Des tons verts vibrants pour une allure fraîche et élégante sous le soleil.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-pink">€99.90</span>
                      <Button variant="outline" className="border-pink text-pink hover:bg-pink/10 rounded-full">Voir détails</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="gradient" size="lg" className="animate-pulse-pink rounded-full" asChild>
            <Link to="/boutique">
              VOIR TOUTE LA COLLECTION
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Nouveautes;
