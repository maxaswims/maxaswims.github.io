import { Button } from "./ui/button";
import { useEffect, useRef } from "react";

export const SignatureProduct = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      const handleLoad = () => {
        console.log("Image chargée avec succès:", img.currentSrc);
      };

      const handleError = () => {
        console.error("Erreur de chargement de l'image:", img.currentSrc);
      };

      img.addEventListener("load", handleLoad);
      img.addEventListener("error", handleError);

      return () => {
        img.removeEventListener("load", handleLoad);
        img.removeEventListener("error", handleError);
      };
    }
  }, []);
  return (
    <section className="py-16 md:py-24 bg-sand mt-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">Notre modèle signature 2025</h2>
          <h3 className="section-heading">Blue Sky Bikini</h3>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <picture>
              {/* Source WebP pour les navigateurs modernes */}
              <source srcSet="/assets/PICS/Aleesha/IMG_0665.webp" type="image/webp" />
              {/* Source principale - format HEIC */}
              <source srcSet="/assets/PICS/Aleesha/IMG_0665.heic" type="image/heic" />
              {/* Source de secours - format JPG */}
              <source srcSet="/assets/PICS/Aleesha/IMG_0665.jpg" type="image/jpeg" />
              {/* Image par défaut si aucune source n'est compatible */}
              <img
                ref={imgRef}
                src="/assets/PICS/Aleesha/IMG_0665.jpg"
                alt="Modèle signature Blue Sky Bikini - Collection 2025"
                className="w-full max-w-md mx-auto object-cover rounded-sm shadow-md h-[600px]"
                onLoad={() => console.log("Image chargée via onLoad")}
                onError={() => console.error("Erreur de chargement via onError")}
              />
            </picture>
          </div>

          <div className="w-full md:w-1/2 max-w-md mx-auto">
            <p className="text-text-secondary mb-6">
              Notre modèle emblématique, le Blue Sky Bikini, incarne l'essence même de MAXASWIMS. Tricoté à la main avec
              un fil de coton biologique, ce bikini triangle offre un confort incomparable et une élégance intemporelle.
            </p>
            <p className="text-text-secondary mb-6">
              Sa teinte bleu ciel évoque les eaux cristallines des plus belles plages du monde, tandis que sa texture
              unique crée un jeu de lumière subtil qui met en valeur votre silhouette.
            </p>
            <p className="text-text-secondary mb-8">
              Sa coupe flatteuse s'adapte à toutes les morphologies, tandis que sa finition artisanale en fait une pièce
              unique que vous conserverez saison après saison.
            </p>
            <Button className="btn-primary uppercase tracking-wider w-auto">DÉCOUVRIR</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
