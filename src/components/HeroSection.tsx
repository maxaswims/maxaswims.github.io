import { Button } from "./ui/button";
import { useState, useRef, useEffect } from "react";

export const HeroSection = () => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    // Fonction pour forcer la lecture de la vidéo (utile pour iOS)
    const forcePlay = () => {
      if (video.paused) {
        video.play().catch((err) => {
          console.warn("Impossible de lire la vidéo automatiquement", err);
        });
      }
    };

    // Ajouter un écouteur d'événement pour forcer la lecture lors de l'interaction utilisateur
    document.addEventListener("click", forcePlay);
    document.addEventListener("touchstart", forcePlay);

    // Fonction pour centrer la vidéo sur son milieu
    const centerVideo = () => {
      try {
        // Forcer la lecture de la vidéo si elle est en pause
        if (video.paused) {
          video.play().catch((err) => {
            console.warn("Impossible de lire la vidéo automatiquement", err);
          });
        }

        // Obtenir les dimensions de la vidéo et du conteneur
        const videoRatio = video.videoWidth / video.videoHeight;
        const containerRatio = container.clientWidth / container.clientHeight;

        if (videoRatio > containerRatio) {
          // La vidéo est plus large que le conteneur (relativement)
          // On ajuste la hauteur à 100% et on centre horizontalement
          video.style.height = "100%";
          video.style.width = "auto";
          video.style.left = "50%";
          video.style.top = "0";
          video.style.transform = "translateX(-50%)";
        } else {
          // La vidéo est plus haute que le conteneur (relativement)
          // On ajuste la largeur à 100% et on centre verticalement
          video.style.width = "100%";
          video.style.height = "auto";
          video.style.top = "50%";
          video.style.left = "0";
          video.style.transform = "translateY(-50%)";
        }
      } catch (error) {
        console.error("Erreur lors du centrage de la vidéo", error);
        setVideoError(true);
      }
    };

    // Gestionnaires d'événements
    const handleError = () => {
      console.error("Erreur de chargement de la vidéo");
      setVideoError(true);
    };

    const handleCanPlay = () => {
      console.log("La vidéo peut être lue");
      setVideoError(false);
      centerVideo();
    };

    const handleResize = () => {
      centerVideo();
    };

    // Ajouter les écouteurs d'événements
    video.addEventListener("error", handleError);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadedmetadata", handleCanPlay);
    video.addEventListener("loadeddata", handleCanPlay);
    window.addEventListener("resize", handleResize);

    // Appliquer le centrage initial après un court délai
    const timeoutId = setTimeout(centerVideo, 500);

    // Nettoyage lors du démontage
    return () => {
      video.removeEventListener("error", handleError);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("loadedmetadata", handleCanPlay);
      video.removeEventListener("loadeddata", handleCanPlay);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", forcePlay);
      document.removeEventListener("touchstart", forcePlay);
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <section className="hero-section flex items-center justify-center">
      <div className="relative w-full h-full">
        {/* Vidéo héroïque plein écran */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Image de fond statique comme fallback */}
          {videoError && (
            <div className="absolute inset-0">
              <img
                src="/assets/PICS/Sandy/iG/202419.jpg"
                alt="Maillot de bain MAXASWIMS - Collection été"
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}

          {/* Vidéo avec attributs pour meilleure compatibilité */}
          <div ref={containerRef} className="absolute inset-0 z-10 overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="hero-video"
              onError={() => setVideoError(true)}
            >
              <source src="/assets/VDO/V1.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Overlay avec dégradé rose pour améliorer la lisibilité du texte */}
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-pink-dark/40 via-pink/20 to-pink-dark/40"></div>
          
          {/* Éléments décoratifs */}
          <div className="absolute inset-0 z-20 overflow-hidden">
            {/* Bulles décoratives */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-pink/20 blur-xl animate-float"></div>
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-pink/10 blur-xl animate-bubble"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-pink/15 blur-lg animate-pulse-pink"></div>
          </div>
        </div>

        {/* Contenu superposé */}
        <div className="container relative z-30 mx-auto px-4 flex flex-col justify-center h-full text-center">
          <div className="animate-fade-down">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-2">
              <span className="text-gradient-pink font-medium">MAXA</span><span className="font-light">SWIMS</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-6 tracking-wide">
              L'élégance au fil de l'eau
            </h2>
          </div>
          
          <p className="animate-fade-up text-lg md:text-xl text-white/90 max-w-xl mx-auto mb-8 backdrop-blur-sm bg-pink/10 p-4 rounded-full">
            Des maillots de bain au crochet faits à la main, alliant savoir-faire artisanal et style contemporain.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up delay-100">
            <Button variant="bubble" size="lg" className="animate-pulse-pink-slow">
              DÉCOUVRIR LA COLLECTION
            </Button>
            
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              NOTRE HISTOIRE
            </Button>
          </div>
          
          {/* Indicateur de défilement - Desktop */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <div className="w-8 h-14 rounded-full border-2 border-white flex items-start justify-center p-1">
              <div className="w-1 h-3 bg-white rounded-full animate-float"></div>
            </div>
          </div>
          
          {/* Indicateur de swipe - Mobile */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce md:hidden">
            <div className="flex flex-col items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse-pink">
                <path d="M21 8V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"></path>
                <path d="M16 8h5v4h-5"></path>
                <path d="m17 11-2-2 2-2"></path>
                <path d="M6 12h5"></path>
                <path d="m9 9 3 3-3 3"></path>
              </svg>
              <span className="text-white text-xs font-medium">Swipez vers le bas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
