import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="hero-section flex items-center justify-center px-4 pt-8">
      <div className="container mx-auto flex flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="animate-fade-down text-4xl font-light tracking-tight text-ocean-900 md:text-6xl">
            Maillots de bain au crochet
            <br />
            <span className="font-medium">faits à la main</span>
          </h1>
          <p className="mt-6 animate-fade-up text-lg text-gray-600">
            Découvrez notre collection de maillots de bain au crochet, alliant élégance artisanale et style
            contemporain.
          </p>
          <Button className="mt-8 animate-fade-up bg-ocean-600 px-8 py-6 text-lg hover:bg-ocean-700">
            Découvrir la collection
          </Button>
        </div>
        <div className="floating-image w-full max-w-md mt-3 mb-5">
          <img
            src="/lovable-uploads/41fd9019-a93f-4543-8980-a506092462d5.png"
            alt="Maillot de bain au crochet"
            className="h-[500px] w-[300px] rounded-2xl object-cover shadow-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
