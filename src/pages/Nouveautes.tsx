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
    '/assets/PICS/Aleesha/Blue/P3Blue14.heic',
    '/assets/PICS/Aleesha/Blue/P3Blue17.HEIC',
  ];

  // Images pour la collection Green (utilisant d'autres images disponibles)
  const greenImages = [
    '/assets/PICS/Aleesha/202406.jpeg',
    '/assets/PICS/Aleesha/521506A9-5820-4E99-99E4-EB65BCC3E73D.jpg',
    '/assets/PICS/Aleesha/8209480E-683D-439E-8D64-D7D7B720CB9B.jpg',
    '/assets/PICS/Aleesha/CB1E4E15-05EA-457A-BFB3-BA46936789D5.jpg',
    '/assets/PICS/Aleesha/FED010A2-C95B-4D91-95E2-55F072A957E4.jpg',
    '/assets/PICS/Aleesha/IMG_0665.jpg',
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
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-medium text-gradient-blue mb-2">Ensemble Bikini Blue</h3>
              <p className="text-gray-600 mb-4">Notre nouvelle collection inspirée des profondeurs de l'océan. Un bleu intense et rafraîchissant pour un été inoubliable.</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">€95.90</span>
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">Voir détails</Button>
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
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-medium text-gradient-green mb-2">Ensemble Bikini Green</h3>
              <p className="text-gray-600 mb-4">Une collection fraîche et naturelle inspirée par la beauté de la nature. Des tons verts apaisants pour une élégance estivale.</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">€99.90</span>
                <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50">Voir détails</Button>
              </div>
            </div>
          </div>
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
