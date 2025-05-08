import { Button } from '../components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';
import { useState, useEffect } from 'react';

const Nouveautes = () => {
  // Images pour la collection Blue
  const blueImages = [
    '/assets/PICS/Aleesha/Blue/P3Blue5.jpeg',
    '/assets/PICS/Aleesha/Blue/P3Blue22.jpeg',
    '/assets/PICS/Aleesha/Blue/P3Blue9.heic',
    '/assets/PICS/Aleesha/Blue/P3Blue11.heic',
    '/assets/PICS/Aleesha/Blue/P3Blue12.heic',
    '/assets/PICS/Aleesha/Blue/P3Blue13.heic',
    '/assets/PICS/Aleesha/Blue/P3Blue14.heic',
    '/assets/PICS/Aleesha/Blue/P3Blue15.HEIC',
    '/assets/PICS/Aleesha/Blue/P3Blue17.HEIC',
    '/assets/PICS/Aleesha/Blue/P3Blue24.HEIC',
    '/assets/PICS/Aleesha/Blue/P3Blue7.heic',
    '/assets/PICS/Aleesha/Blue/P3Blue8.heic',
  ];

  // Images pour la collection Green
  const greenImages = [
    '/assets/PICS/Aleesha/Green/P1soloGreen24.JPG',
    '/assets/PICS/Aleesha/Green/P1soloGreen28.JPG',
    '/assets/PICS/Aleesha/Green/P1soloGreen49.JPG',
    '/assets/PICS/Aleesha/Green/P1soloGreen57.JPG',
    '/assets/PICS/Aleesha/Green/P2simoGreen1.HEIC',
    '/assets/PICS/Aleesha/Green/P2simoGreen14.heic',
    '/assets/PICS/Aleesha/Green/P2simoGreen15.heic',
    '/assets/PICS/Aleesha/Green/P2simoGreen16.HEIC',
    '/assets/PICS/Aleesha/Green/P2simoGreen20.jpg',
    '/assets/PICS/Aleesha/Green/P2simoGreen8.heic',
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

  return (
    <div className="pt-32 pb-16 animate-fade-up">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-light text-center mb-2">
          <span className="text-gradient-pink font-medium">Nouveautés</span>
        </h1>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
          Découvrez nos deux nouvelles collections exclusives de bikinis.
          Des designs uniques pour sublimer votre silhouette cet été.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Ensemble Bikini Blue */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-96">
              <Carousel className="w-full h-full">
                <CarouselContent>
                  {blueImages.map((image, index) => (
                    <CarouselItem key={index} className="h-full">
                      <div className="h-full w-full flex items-center justify-center">
                        <img 
                          src={image} 
                          alt={`Blue collection ${index + 1}`} 
                          className="object-cover h-full w-full"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 rounded-full bg-pink-500 text-white hover:bg-pink-600" />
                <CarouselNext className="right-2 rounded-full bg-pink-500 text-white hover:bg-pink-600" />
              </Carousel>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-medium text-gradient-blue mb-2">Ensemble Bikini Blue</h3>
              <p className="text-gray-600 mb-4">Notre nouvelle collection inspirée des profondeurs de l'océan. Un bleu intense et rafraîchissant pour un été inoubliable.</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">€95.90</span>
                <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50 rounded-full">Voir détails</Button>
              </div>
            </div>
          </div>

          {/* Ensemble Bikini Green */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-96">
              <Carousel className="w-full h-full">
                <CarouselContent>
                  {greenImages.map((image, index) => (
                    <CarouselItem key={index} className="h-full">
                      <div className="h-full w-full flex items-center justify-center">
                        <img 
                          src={image} 
                          alt={`Green collection ${index + 1}`} 
                          className="object-cover h-full w-full"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 rounded-full bg-pink-500 text-white hover:bg-pink-600" />
                <CarouselNext className="right-2 rounded-full bg-pink-500 text-white hover:bg-pink-600" />
              </Carousel>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-medium text-gradient-green mb-2">Ensemble Bikini Green</h3>
              <p className="text-gray-600 mb-4">Notre collection Green inspirée par la nature luxuriante. Des tons verts vibrants pour une allure fraîche et élégante sous le soleil.</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">€99.90</span>
                <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50 rounded-full">Voir détails</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="gradient" size="lg" className="animate-pulse-pink rounded-full">
            VOIR TOUTE LA COLLECTION
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Nouveautes;
