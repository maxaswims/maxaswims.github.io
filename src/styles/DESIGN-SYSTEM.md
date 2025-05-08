# MAXA SWIMS DESIGN SYSTEM

Ce document présente le design system utilisé pour le site MaxaSwims.fr, basé sur les modèles UI/UX du dossier `public/assets/PICS/DS`.

## Palette de couleurs

### Couleurs principales - Rose
- `pink-light`: #FFD6E6 - Rose pâle pour les fonds légers
- `pink`: #FF80B0 - Rose principal pour les éléments importants
- `pink-medium`: #FF5C98 - Rose vif pour les accents
- `pink-dark`: #E63F7D - Rose foncé pour le contraste
- `pink-deep`: #C4306A - Rose profond pour les textes importants

### Couleurs secondaires - Sable
- `sand-lightest`: #FFFBF7 - Blanc cassé pour le fond principal
- `sand-light`: #F9F7F4 - Sable clair pour les sections
- `sand`: #F0E9E0 - Sable pour les cartes et éléments
- `sand-gold`: #D9C5A0 - Beige doré pour les accents

### Couleurs d'accent - Corail
- `coral-light`: #FFB0A8 - Corail clair pour les hover
- `coral`: #FF8C84 - Corail pour les accents secondaires
- `coral-dark`: #E57670 - Corail foncé pour les boutons secondaires

### Utilisation des couleurs
```jsx
// Exemples d'utilisation des couleurs
<div className="bg-pink text-white">Élément rose avec texte blanc</div>
<div className="bg-sand-light text-pink-dark">Élément sable avec texte rose foncé</div>
<div className="bg-gradient-pink text-white">Élément avec dégradé rose</div>
```

## Typographie

### Polices
- Titres: `Playfair Display, serif`
- Corps de texte: `Montserrat, sans-serif`

### Tailles de police
- xs: 0.75rem (12px)
- sm: 0.875rem (14px)
- base: 1rem (16px)
- lg: 1.125rem (18px)
- xl: 1.25rem (20px)
- 2xl: 1.5rem (24px)
- 3xl: 1.875rem (30px)
- 4xl: 2.25rem (36px)
- 5xl: 3rem (48px)
- 6xl: 3.75rem (60px)

### Exemples d'utilisation
```jsx
<h1 className="font-display text-4xl font-light">Titre principal</h1>
<p className="font-body text-base">Texte standard</p>
<span className="text-gradient-pink">Texte avec dégradé rose</span>
```

## Composants

### Boutons
Plusieurs variantes sont disponibles:
- `default`: Bouton rose standard
- `gradient`: Bouton avec dégradé rose
- `outline`: Bouton avec bordure rose
- `bubble`: Bouton avec forme organique
- `coral`: Bouton corail
- `ghost`: Bouton fantôme
- `link`: Lien stylisé

Tailles disponibles:
- `sm`: Petit
- `default`: Taille standard
- `lg`: Grand
- `xl`: Très grand
- `icon`: Pour les icônes

```jsx
<Button>Bouton standard</Button>
<Button variant="gradient" size="lg">Grand bouton avec dégradé</Button>
<Button variant="bubble">Bouton organique</Button>
```

### Cartes
Variantes disponibles:
- `default`: Carte standard
- `bubble`: Carte avec forme organique
- `gradient`: Carte avec dégradé rose
- `outline`: Carte avec bordure rose

```jsx
<Card>
  <CardHeader>
    <CardTitle>Titre de la carte</CardTitle>
    <CardDescription>Description de la carte</CardDescription>
  </CardHeader>
  <CardContent>
    Contenu de la carte
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

<Card variant="bubble">
  <CardHeader>
    <CardTitle gradient>Titre avec dégradé</CardTitle>
  </CardHeader>
  <CardContent>
    Contenu de la carte avec forme organique
  </CardContent>
</Card>
```

## Classes utilitaires

### Formes et ombres
- `bubble-shape`: Forme organique (border-radius variable)
- `blob-shape`: Forme de blob
- `pink-glow`: Ombre rose
- `bubble-shadow`: Ombre douce pour les éléments organiques

### Dégradés et effets de texte
- `bg-gradient-pink`: Fond avec dégradé rose
- `text-gradient-pink`: Texte avec dégradé rose

### Animations
- `animate-float`: Animation de flottement
- `animate-bubble`: Animation de bulle
- `animate-pulse-pink`: Animation de pulsation rose
- `animate-scale-in`: Animation d'agrandissement
- `animate-fade-up`: Animation de fondu vers le haut
- `animate-fade-down`: Animation de fondu vers le bas

```jsx
<div className="bubble-shape bg-pink animate-float pink-glow">
  Élément flottant avec forme organique
</div>

<h2 className="text-gradient-pink animate-pulse-pink">
  Titre avec dégradé et pulsation
</h2>
```

## Variables CSS

Le design system utilise des variables CSS pour faciliter la cohérence:

```css
:root {
  /* Couleurs principales - Rose */
  --pink-light: 336 100% 92%;
  --pink: 336 100% 75%;
  --pink-medium: 336 100% 68%;
  --pink-dark: 336 80% 57%;
  --pink-deep: 336 60% 48%;
  
  /* Couleurs secondaires - Sable */
  --sand-lightest: 35 100% 98%;
  --sand-light: 40 30% 97%;
  --sand: 39 33% 91%;
  --sand-gold: 39 38% 74%;
  
  /* Couleurs d'accent - Corail */
  --coral-light: 5 100% 83%;
  --coral: 5 100% 76%;
  --coral-dark: 5 65% 67%;
  
  /* Arrondis et formes */
  --radius: 0.75rem;
  --radius-bubble: 40% 60% 60% 40% / 60% 30% 70% 40%;
  --radius-blob: 60% 40% 30% 70% / 60% 30% 70% 40%;
  
  /* Ombres */
  --shadow-pink: 0 0 15px rgba(255, 128, 176, 0.5);
  --shadow-bubble: 0 10px 25px -5px rgba(255, 128, 176, 0.1), 0 8px 10px -6px rgba(255, 128, 176, 0.1);
}
```

## Bonnes pratiques

1. Privilégier les composants prédéfinis pour assurer la cohérence
2. Utiliser les classes utilitaires pour les cas spécifiques
3. Respecter la palette de couleurs pour maintenir l'identité visuelle
4. Ajouter des animations avec parcimonie pour une expérience fluide
5. Adapter les composants aux différentes tailles d'écran

## Exemples d'utilisation

### Carte produit
```jsx
<div className="product-card group transform transition-all duration-300 hover:translate-y-[-5px]">
  <div className="relative overflow-hidden rounded-xl bubble-shadow hover:pink-glow">
    <img
      src="/path/to/image.jpg"
      alt="Nom du produit"
      className="product-image transform transition-transform duration-500 group-hover:scale-105"
    />
    {isNew && (
      <span className="absolute left-3 top-3 bubble-shape bg-gradient-pink px-4 py-1 text-xs font-medium text-white animate-pulse-pink">
        NOUVEAU
      </span>
    )}
  </div>
  <div className="p-4">
    <h3 className="text-base font-medium text-text-primary group-hover:text-pink-dark transition-colors duration-300">
      Nom du produit
    </h3>
    <p className="mt-1 text-sm text-text-secondary line-clamp-1">Description</p>
    <p className="mt-2 text-base font-medium text-pink">99 €</p>
  </div>
</div>
```

### Section Hero
```jsx
<section className="hero-section">
  <div className="relative">
    {/* Fond avec overlay dégradé */}
    <div className="absolute inset-0 bg-gradient-to-b from-pink-dark/40 via-pink/20 to-pink-dark/40"></div>
    
    {/* Contenu */}
    <div className="container relative z-10 mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-2">
        <span className="text-gradient-pink font-medium">MAXA</span>
        <span className="font-light">SWIMS</span>
      </h1>
      <p className="text-lg text-white/90 max-w-xl mx-auto mb-8 backdrop-blur-sm bg-pink/10 p-4 rounded-full">
        Description captivante
      </p>
      <Button variant="bubble" size="lg" className="animate-pulse-pink">
        APPEL À L'ACTION
      </Button>
    </div>
  </div>
</section>
```
