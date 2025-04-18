import { Button } from "./ui/button";
import { useState, useRef, useEffect } from "react";

export const HeroSection = () => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleError = () => {
        console.error("Erreur de chargement de la vidéo");
        setVideoError(true);
      };

      const handleCanPlay = () => {
        console.log("La vidéo peut être lue");
        setVideoError(false);
      };

      video.addEventListener("error", handleError);
      video.addEventListener("canplay", handleCanPlay);

      // Vérifier si la vidéo peut être lue après un court délai
      const timeoutId = setTimeout(() => {
        if (video.readyState === 0) {
          console.warn("La vidéo n'a pas pu être chargée après le délai");
          setVideoError(true);
        }
      }, 3000);

      return () => {
        video.removeEventListener("error", handleError);
        video.removeEventListener("canplay", handleCanPlay);
        clearTimeout(timeoutId);
      };
    }
  }, []);
  return (
    <section className="hero-section flex items-center justify-center pt-24 md:pt-28">
      <div className="relative w-full h-full">
        {/* Vidéo héroïque plein écran */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Image de fond statique comme fallback */}
          <div className="absolute inset-0">
            <img
              src="/lovable-uploads/41fd9019-a93f-4543-8980-a506092462d5.png"
              alt="Maillot de bain MAXASWIMS"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Vidéo avec attributs pour meilleure compatibilité */}
          {!videoError && (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover absolute inset-0 z-10"
              onError={() => setVideoError(true)}
            >
              <source src="/assets/VDO/V1.mp4" type="video/mp4" />
              <source src="/assets/VDO/V1.mov" type="video/quicktime" />
            </video>
          )}

          {/* Overlay pour améliorer la lisibilité du texte */}
          <div className="absolute inset-0 z-20 bg-black/30"></div>
        </div>

        {/* Contenu superposé */}
        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 lg:py-40 text-center">
          <h1 className="animate-fade-down text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6">
            MAXASWIMS
            <br />
            <span className="font-normal">L'élégance au fil de l'eau</span>
          </h1>
          <p className="animate-fade-up text-lg md:text-xl text-white/90 max-w-xl mx-auto mb-8">
            Des maillots de bain au crochet faits à la main, alliant savoir-faire artisanal et style contemporain.
          </p>
          <Button className="btn-primary animate-fade-up text-base uppercase tracking-wider px-8 py-3">
            DÉCOUVRIR LA COLLECTION
          </Button>
        </div>
      </div>
    </section>
  );
};
