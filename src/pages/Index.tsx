import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SignatureProduct } from "@/components/SignatureProduct";
import { BestSellers } from "@/components/BestSellers";
import { Testimonials } from "@/components/Testimonials";
import { LifestyleSection } from "@/components/LifestyleSection";
import { InstagramFeed } from "@/components/InstagramFeed";
// import { Newsletter } from "@/components/Newsletter";
// import { useEffect, useState } from "react";

const Index = () => {
  // Commenté car la newsletter n'est pas encore implémentée
  // const [showNewsletter, setShowNewsletter] = useState(false);

  // // Afficher la popup newsletter après 30 secondes
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowNewsletter(true);
  //   }, 30000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="min-h-screen bg-sand">
      <Navbar />

      <HeroSection />

      <SignatureProduct />

      <BestSellers />

      <Testimonials />

      <LifestyleSection />

      <InstagramFeed />

      {/* Newsletter temporairement désactivée */}
      {/* <Newsletter /> */}

      {/* Popup Newsletter - temporairement désactivée
      {showNewsletter && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-md w-full p-8 rounded-sm relative">
            <button
              type="button"
              onClick={() => setShowNewsletter(false)}
              className="absolute right-4 top-4 text-text-secondary hover:text-text-primary"
              aria-label="Fermer"
            >
              ×
            </button>

            <div className="text-center">
              <h3 className="text-2xl font-light mb-2">Rejoignez-nous</h3>
              <p className="text-text-secondary mb-6">
                Inscrivez-vous à notre newsletter et bénéficiez de 10% de réduction sur votre première commande.
              </p>

              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full border border-sand-gold/50 rounded-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-turquoise"
                />
                <button type="submit" className="w-full btn-coral uppercase tracking-wider">
                  S'inscrire
                </button>
              </form>

              <button
                type="button"
                onClick={() => setShowNewsletter(false)}
                className="mt-4 text-sm text-text-secondary hover:text-text-primary"
              >
                Non merci
              </button>
            </div>
          </div>
        </div>
      )}
      */}
    </div>
  );
};

export default Index;
