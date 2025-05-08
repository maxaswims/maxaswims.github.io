import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Journal = () => {
  // Données factices pour les articles de blog
  const blogPosts = [
    {
      id: "blog1",
      title: "Les tendances maillots de bain pour l'été 2025",
      excerpt: "Découvrez les couleurs, coupes et matières qui feront sensation sur les plages cet été.",
      image: "/assets/PICS/DS/4girls2.png",
      date: "2 mai 2025",
      category: "Tendances",
    },
    {
      id: "blog2",
      title: "Comment choisir le maillot de bain parfait pour votre morphologie",
      excerpt: "Guide complet pour trouver le modèle qui mettra en valeur votre silhouette.",
      image: "/assets/PICS/DS/2girls.png",
      date: "28 avril 2025",
      category: "Conseils",
    },
    {
      id: "blog3",
      title: "L'art du crochet : savoir-faire et techniques",
      excerpt: "Plongez dans l'univers artisanal du crochet et découvrez comment nos maillots sont confectionnés.",
      image: "/assets/PICS/DS/MAXApalms.png",
      date: "15 avril 2025",
      category: "Artisanat",
    },
    {
      id: "blog4",
      title: "Les plus belles plages du monde pour porter votre MAXASWIMS",
      excerpt: "Notre sélection des destinations paradisiaques idéales pour vos vacances d'été.",
      image: "/assets/PICS/DS/MAXAcolors.png",
      date: "5 avril 2025",
      category: "Voyage",
    },
  ];

  return (
    <div className="pt-32 pb-16 animate-fade-up">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-light text-center mb-2">
          <span className="text-gradient-pink font-medium">Journal</span>
        </h1>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
          Actualités, conseils et inspirations autour de l'univers MAXASWIMS.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-none shadow-md hover:shadow-pink-glow transition-shadow duration-300 rounded-3xl">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-pink text-white text-xs font-medium py-1 px-3 rounded-full">
                  {post.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-pink-dark text-sm mb-2">{post.date}</div>
                <h3 className="text-xl font-medium mb-2 hover:text-pink transition-colors">{post.title}</h3>
                <p className="text-text-secondary mb-4">{post.excerpt}</p>
                <Button variant="link" className="text-pink p-0 hover:text-pink-dark">
                  Lire la suite →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-pink text-pink hover:bg-pink/10">
            VOIR TOUS LES ARTICLES
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Journal;
