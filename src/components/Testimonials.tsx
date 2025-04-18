import { Star } from "lucide-react";

// Données des témoignages
const testimonials = [
  {
    id: 1,
    name: "Sophie L.",
    rating: 5,
    text: "J'adore mon bikini MAXASWIMS ! La qualité est exceptionnelle et le confort incomparable. Je reçois des compliments à chaque fois que je le porte à la plage.",
    image: "/assets/PICS/Sandy/iG/202412.jpg",
  },
  {
    id: 2,
    name: "Marie D.",
    rating: 5,
    text: "Après avoir essayé plusieurs marques, j'ai enfin trouvé des maillots qui me vont parfaitement. Le fait qu'ils soient faits à la main avec du coton bio fait toute la différence.",
    image: "/assets/PICS/Sandy/iG/202415.jpg",
  },
  {
    id: 3,
    name: "Camille B.",
    rating: 5,
    text: "Service client exceptionnel et produit de grande qualité. Mon ensemble Coral Reef est devenu mon indispensable de l'été !",
    image: "/assets/PICS/Sandy/iG/202416.jpg",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-sand-gold/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Témoignages</h2>
          <h3 className="section-heading">CE QUE DISENT NOS CLIENTES</h3>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-sm shadow-sm">
              <div className="flex items-center mb-4">
                {testimonial.image && (
                  <div className="mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-medium text-text-primary">{testimonial.name}</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-coral text-coral" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-text-secondary">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
