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
                src="/lovable-uploads/41fd9019-a93f-4543-8980-a506092462d5.png"
                alt="Maillot de bain MAXASWIMS"
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

          {/* Overlay pour améliorer la lisibilité du texte */}
          <div className="absolute inset-0 z-20 bg-black/30"></div>
        </div>

        {/* Contenu superposé */}
        <div className="container relative z-30 mx-auto px-4 flex flex-col justify-center h-full text-center">
          <h1 className="animate-fade-down text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6">
            MAXASWIMS
            <br />
            <span className="font-normal">L'élégance au fil de l'eau</span>
          </h1>
          <p className="animate-fade-up text-lg md:text-xl text-white/90 max-w-xl mx-auto mb-8">
            Des maillots de bain au crochet faits à la main, alliant savoir-faire artisanal et style contemporain.
          </p>
          <Button className="btn-primary btn-pulse animate-fade-up text-base uppercase tracking-wider px-6 py-3 inline-block mx-auto">
            DÉCOUVRIR LA COLLECTION
          </Button>
        </div>
      </div>
    </section>
  );
};
