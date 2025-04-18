import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { Instagram } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Bikini Triangle Marine",
    price: 89,
    image: "/lovable-uploads/ef02853e-5145-4c59-8166-3cea60502a2a.png",
    isNew: true,
    description: "Bikini triangle en coton bio tricoté à la main, coloris bleu marine",
  },
  {
    id: 2,
    name: "Ensemble Soleil",
    price: 129,
    image: "/lovable-uploads/ce7fcd5c-2235-45db-87b7-1c609481a086.png",
    description: "Ensemble bikini et jupe en crochet, coloris jaune soleil",
  },
  {
    id: 3,
    name: "Bikini Pink Summer",
    price: 99,
    image: "/lovable-uploads/e5918497-b4d8-4797-8add-05b82867072e.png",
    isNew: true,
    description: "Bikini triangle en coton bio avec jupe assortie, coloris rose fuchsia",
  },
  {
    id: 4,
    name: "Ensemble Sable",
    price: 149,
    image: "/lovable-uploads/4cbbd094-e709-4da7-85a8-473002e77a23.png",
    description: "Ensemble bikini triangle avec jupe macramé, coloris beige sable",
  },
  {
    id: 5,
    name: "Bikini Ocean Blue",
    price: 89,
    image: "/lovable-uploads/b9856178-a788-46fe-b048-3b1ee4d5206b.png",
    description: "Bikini triangle en coton bio, coloris bleu océan",
  },
  {
    id: 6,
    name: "Ensemble Sunset",
    price: 129,
    image: "/lovable-uploads/c1f24d5c-c933-42c6-bd8f-fdcdc017b082.png",
    isNew: true,
    description: "Ensemble bikini et jupe en crochet, coloris orange coucher de soleil",
  },
  {
    id: 7,
    name: "Bikini Coquillage",
    price: 99,
    image: "/lovable-uploads/ead1a078-5868-4934-80c3-0ebc3826b5b0.png",
    description: "Bikini triangle avec franges décoratives, coloris beige nacré",
  },
  {
    id: 8,
    name: "Ensemble Corail",
    price: 149,
    image: "/lovable-uploads/b1d6cc70-c25b-4289-9385-075652d9e1cb.png",
    isNew: true,
    description: "Ensemble bikini et jupe macramé, coloris rouge corail",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Instagram Banner */}
      {/* <div className="fixed left-0 right-0 top-20 z-40 bg-ocean-50/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/maxa.swims/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-ocean-100 px-4 py-2 text-sm font-medium text-ocean-700 transition-colors hover:bg-ocean-200"
            >
              <Instagram className="h-4 w-4" />
              @maxa.swims
            </a>
            <div className="hidden space-x-8 text-sm text-ocean-700 md:flex">
              <span>{18} publications</span>
              <span>{124} followers</span>
              <span>{766} suivis</span>
            </div>
          </div>
          <a
            href="https://msha.ke/maxa.swims"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ocean-600 hover:text-ocean-700"
          >
            Commander →
          </a>
        </div>
      </div> */}

      <HeroSection />

      <main className="container mx-auto px-4 py-16">
        <section>
          <div className="mb-12 text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-ocean-600">Collection</span>
            <h2 className="mt-2 text-3xl font-light text-gray-900 md:text-4xl">Nos créations</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        <section className="mt-24 text-center">
          <div className="mx-auto max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-wider text-ocean-600">Artisanat</span>
            <h2 className="mt-2 text-3xl font-light text-gray-900 md:text-4xl">Fait main avec amour</h2>
            <p className="mt-4 text-gray-600">
              Chaque pièce est méticuleusement créée à la main, alliant savoir-faire traditionnel et design contemporain
              pour une collection unique et élégante.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-ocean-50 p-8">
            <div className="flex flex-col items-center gap-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-ocean-100 px-4 py-1 text-sm text-ocean-700">
                <Instagram className="h-4 w-4" />
                @maxa.swims
              </span>
              <div className="grid grid-cols-3 gap-8 text-center md:gap-16">
                <div>
                  <p className="text-2xl font-semibold text-ocean-900">18</p>
                  <p className="text-sm text-gray-600">Publications</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-ocean-900">124</p>
                  <p className="text-sm text-gray-600">Followers</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-ocean-900">766</p>
                  <p className="text-sm text-gray-600">Suivis</p>
                </div>
              </div>
              <div className="max-w-xl space-y-4 text-center">
                <p className="font-medium text-ocean-800">
                  👙 Maillots de bain personnalisés
                  <br />
                  🧶 Tricotés sur mesure à la main
                  <br />
                  🌿 100% Coton BIO
                  <br />
                  🚚 Livraison gratuite Biarritz Anglet Bayonne
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://msha.ke/maxa.swims"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ocean-600 hover:text-ocean-700"
                  >
                    msha.ke/maxa.swims
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
