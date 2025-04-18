import { Instagram } from "lucide-react";
import { Button } from "./ui/button";

// Images Instagram simulées
const instagramImages = [
  "/lovable-uploads/beach-accessories-flatlay.jpg",
  "/lovable-uploads/coconut-drink-on-beach.jpg",
  "/lovable-uploads/woman-posing-in-bikini-sunset.jpg",
  "/lovable-uploads/beach-volleyball-fun.jpg",
  "/lovable-uploads/tropical-flowers-and-bikini.jpg",
  "/lovable-uploads/beach-picnic-setup.jpg",
];

export const InstagramFeed = () => {
  return (
    <section className="py-16 md:py-24 bg-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Instagram</h2>
          <h3 className="section-heading">NOUS SUIVRE SUR INSTAGRAM</h3>
          <a
            href="https://www.instagram.com/maxa.swims/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-turquoise hover:text-turquoise-dark transition-colors"
          >
            <Instagram className="h-5 w-5" />
            @maxa.swims
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramImages.map((image, index) => (
            <a
              key={index}
              href="https://www.instagram.com/maxa.swims/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-turquoise/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="btn-secondary uppercase tracking-wider px-6 py-3 inline-block">VOIR PLUS</Button>
        </div>
      </div>
    </section>
  );
};
