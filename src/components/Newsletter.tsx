import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  return (
    <section className="py-16 md:py-24 bg-turquoise text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-4">REJOIGNEZ LA COMMUNAUTÉ MAXASWIMS</h2>
          <p className="text-white/80 mb-8">
            Inscrivez-vous et recevez 10% sur votre première commande
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Votre adresse email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white"
            />
            <Button className="bg-white text-turquoise hover:bg-white/90 uppercase tracking-wider">
              S'inscrire
            </Button>
          </form>
          
          <p className="text-xs text-white/60 mt-4">
            En vous inscrivant, vous acceptez de recevoir nos emails et confirmez avoir lu notre politique de confidentialité.
          </p>
        </div>
      </div>
    </section>
  );
};
