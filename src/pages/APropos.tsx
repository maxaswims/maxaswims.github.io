import { Button } from '../components/ui/button';

const APropos = () => {
  return (
    <div className="pt-32 pb-16 animate-fade-up">
      <div className="container mx-auto px-4">
        {/* Section d'introduction */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light mb-2">
            <span className="text-gradient-pink font-medium">Notre Histoire</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto mb-8">
            MAXA SWIMS est une marque de maillots de bain née au cœur du Pays basque, à Biarritz, inspirée par l'élégance, la créativité et l'esprit libre de la côte Atlantique.
          </p>
        </div>

        {/* Section histoire avec image */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <img 
              src="/assets/PICS/DS/maxaSquare.png" 
              alt="Fondatrice de MAXASWIMS" 
              className="w-full h-auto rounded-3xl shadow-pink-glow animate-float"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-medium text-pink mb-4">Notre Histoire</h2>
            <p className="text-text-secondary mb-4">
              L'aventure MAXA SWIMS a commencé avec un souvenir : un maillot de bain confectionné à la main il y a quelques années, qui a marqué les esprits par son style tropical et ses détails dorés. Ce souvenir, associé à l'inspiration puisée auprès de créatrices locales et internationales, a donné naissance à notre projet : créer des maillots de bain uniques pour les filles de Biarritz, les amatrices de mode et les voyageuses en quête d'authenticité.
            </p>
            <p className="text-text-secondary mb-4">
              Notre collection met à l'honneur le crochet, une tendance intemporelle remise au goût du jour par les plus grandes influenceuses et stars du moment. Chaque pièce est pensée pour sublimer toutes les silhouettes, avec une attention particulière portée à la qualité des matières et aux finitions artisanales.
            </p>
            <p className="text-text-secondary mb-4">
              MAXA SWIMS, c'est aussi une aventure humaine, ponctuée de shootings photos sur la plage, de rencontres et de moments de partage. Nous avons à cœur de faire vivre la marque au rythme des saisons et des tendances, en proposant régulièrement de nouvelles créations.
            </p>
            <p className="text-text-secondary mb-6">
              Et pour la petite anecdote, MAXA SWIMS ne sait pas encore nager… mais il n'est jamais trop tard pour apprendre ! 🩷🩵
            </p>
            <Button variant="gradient" size="lg">
              NOTRE PHILOSOPHIE
            </Button>
          </div>
        </div>

        {/* Section valeurs */}
        <div className="bg-pink/5 rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-2xl font-medium text-pink text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-pink flex items-center justify-center mx-auto mb-4 animate-pulse-pink">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Artisanat</h3>
              <p className="text-text-secondary">
                Chaque pièce est confectionnée à la main, avec soin et passion, pour garantir une qualité exceptionnelle.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-pink flex items-center justify-center mx-auto mb-4 animate-pulse-pink">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Durabilité</h3>
              <p className="text-text-secondary">
                Nous utilisons des matériaux de qualité et des techniques durables pour créer des pièces qui traversent le temps.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-pink flex items-center justify-center mx-auto mb-4 animate-pulse-pink">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Authenticité</h3>
              <p className="text-text-secondary">
                Nous créons des pièces uniques qui reflètent votre personnalité et vous permettent d'exprimer votre style.
              </p>
            </div>
          </div>
        </div>

        {/* Section équipe */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-pink mb-8">L'Équipe MAXASWIMS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img 
                src="/assets/PICS/DS/4models.png" 
                alt="Fondatrice" 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4 border-4 border-pink shadow-pink-glow"
              />
              <h3 className="text-xl font-medium mb-1">Marie Dupont</h3>
              <p className="text-pink mb-2">Fondatrice & Designer</p>
              <p className="text-text-secondary">
                Passionnée de crochet depuis son enfance, Marie a créé MAXASWIMS pour partager son art avec le monde.
              </p>
            </div>
            <div>
              <img 
                src="/assets/PICS/DS/2girls.png" 
                alt="Directrice Créative" 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4 border-4 border-pink shadow-pink-glow"
              />
              <h3 className="text-xl font-medium mb-1">Sophie Martin</h3>
              <p className="text-pink mb-2">Directrice Créative</p>
              <p className="text-text-secondary">
                Sophie apporte sa vision artistique unique pour créer des designs innovants et intemporels.
              </p>
            </div>
            <div>
              <img 
                src="/assets/PICS/DS/maxaDSpink.png" 
                alt="Responsable Production" 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4 border-4 border-pink shadow-pink-glow"
              />
              <h3 className="text-xl font-medium mb-1">Lucie Bernard</h3>
              <p className="text-pink mb-2">Responsable Production</p>
              <p className="text-text-secondary">
                Lucie supervise la production artisanale et veille à la qualité irréprochable de chaque pièce.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Button variant="bubble" size="lg" className="animate-pulse-pink">
            NOUS CONTACTER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default APropos;
