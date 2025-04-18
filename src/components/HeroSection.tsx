import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="hero-section flex items-center justify-center pt-24 md:pt-28">
      <div className="relative w-full h-full">
        {/* Image héroïque plein écran */}
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/woman-walking-on-beach-with-white-bikini.jpg"
            alt="Femme marchant sur la plage"
            className="w-full h-full object-cover"
          />
          {/* Overlay pour améliorer la lisibilité du texte */}
          <div className="absolute inset-0 bg-black/20"></div>
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
