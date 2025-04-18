import { Button } from "./ui/button";

export const LifestyleSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <img
              src="/lovable-uploads/friends-enjoying-beach-day-together.jpg"
              alt="L'univers MAXASWIMS"
              className="w-full h-[500px] object-cover rounded-sm shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 max-w-md">
            <h2 className="section-title">Notre philosophie</h2>
            <h3 className="section-heading">L'UNIVERS MAXASWIMS</h3>
            <p className="text-text-secondary mb-8">
              Chez MAXASWIMS, nous croyons que chaque femme mérite de se sentir belle et confiante à la plage. Nos
              maillots de bain sont conçus avec passion, en utilisant des matériaux durables et des techniques
              artisanales transmises de génération en génération. Chaque pièce raconte une histoire d'élégance, de
              savoir-faire et de respect pour l'environnement.
            </p>
            <Button className="btn-secondary uppercase tracking-wider px-6 py-3 inline-block">EN SAVOIR PLUS</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
