import { Button } from "./ui/button";

export const SignatureProduct = () => {
  return (
    <section className="py-16 md:py-24 bg-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">Notre modèle signature</h2>
          <h3 className="section-heading">Le Coral Reef noir</h3>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <img 
              src="/lovable-uploads/ef02853e-5145-4c59-8166-3cea60502a2a.png" 
              alt="Modèle signature Coral Reef noir" 
              className="w-full max-w-md mx-auto object-cover rounded-sm shadow-md"
            />
          </div>
          
          <div className="w-full md:w-1/2 max-w-md mx-auto">
            <p className="text-text-secondary mb-6">
              Notre modèle emblématique, le Coral Reef noir, incarne l'essence même de MAXASWIMS. 
              Tricoté à la main avec un fil de coton biologique, ce bikini triangle offre un confort 
              incomparable et une élégance intemporelle.
            </p>
            <p className="text-text-secondary mb-8">
              Sa coupe flatteuse s'adapte à toutes les morphologies, tandis que sa finition artisanale 
              en fait une pièce unique que vous conserverez saison après saison.
            </p>
            <Button className="btn-primary uppercase tracking-wider">
              DÉCOUVRIR
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
