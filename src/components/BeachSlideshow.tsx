import { useState, useEffect } from 'react';

// Images HD de plages gratuites
const beachImages = [
  "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
  "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
];

export const BeachSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Changer d'image toutes les 5 secondes
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % beachImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {beachImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Belle plage ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {beachImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Voir l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
