# MAXASWIMS Design System

Ce document détaille l'ensemble du design system utilisé pour le site maxaswims.fr, incluant les couleurs, la typographie, les espacements, les composants et les animations.

## Table des matières

1. [Couleurs](#couleurs)
2. [Typographie](#typographie)
3. [Espacements et Layout](#espacements-et-layout)
4. [Composants](#composants)
5. [Animations et Transitions](#animations-et-transitions)
6. [Responsive Design](#responsive-design)
7. [Iconographie](#iconographie)
8. [Principes d'UI/UX](#principes-duiux)

---

## Couleurs

### Palette principale

La palette de couleurs de MAXASWIMS est inspirée par l'univers marin et balnéaire, avec des tons à la fois apaisants et élégants.

| Couleur             | Hex       | Description            | Utilisation                                               |
| ------------------- | --------- | ---------------------- | --------------------------------------------------------- |
| **Turquoise**       | `#1A858D` | Bleu turquoise profond | Couleur principale, boutons primaires, accents importants |
| **Turquoise Light** | `#A7D1D9` | Bleu ciel clair        | Éléments secondaires, arrière-plans légers                |
| **Turquoise Dark**  | `#235D62` | Vert océan             | Textes importants, hover states                           |
| **Sand**            | `#F9F7F4` | Blanc sable            | Fond principal, arrière-plans neutres                     |
| **Sand Gold**       | `#D9C5A0` | Beige doré             | Accents, bordures, éléments décoratifs                    |
| **Coral**           | `#E8837E` | Corail doux            | Call-to-action secondaires, accents                       |
| **Coral Dark**      | `#D25E5E` | Rouge doux             | Alertes, soldes, notifications                            |
| **Text Primary**    | `#1D2327` | Noir doux              | Textes principaux                                         |
| **Text Secondary**  | `#8A9399` | Gris moyen             | Textes secondaires, légendes                              |

### Variables CSS

Les couleurs sont définies comme variables CSS dans le thème :

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 201 96% 32%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.75rem;
  --navbar-height: 70px;
}
```

### Utilisation des couleurs

- **Fond principal** : Sand (`#F9F7F4`)
- **Texte principal** : Text Primary (`#1D2327`)
- **Texte secondaire** : Text Secondary (`#8A9399`)
- **Boutons primaires** : Turquoise (`#1A858D`) avec dégradé vers Turquoise Dark
- **Boutons secondaires** : Bordure Turquoise avec fond transparent
- **Boutons d'action** : Coral (`#E8837E`) avec dégradé vers Coral Dark
- **Accents** : Sand Gold (`#D9C5A0`) pour les éléments décoratifs

---

## Typographie

### Polices

Le site utilise deux polices principales :

1. **Playfair Display** (serif) : Pour les titres et éléments de marque

   - Variantes : 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

2. **Montserrat** (sans-serif) : Pour le corps de texte et les éléments d'interface
   - Variantes : 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Hiérarchie typographique

| Élément              | Police           | Taille            | Poids   | Espacement      | Classe                                          |
| -------------------- | ---------------- | ----------------- | ------- | --------------- | ----------------------------------------------- |
| H1                   | Playfair Display | 4xl-7xl (36-72px) | Light   | Tracking Wide   | `text-4xl md:text-6xl lg:text-7xl font-light`   |
| H2                   | Playfair Display | 3xl-4xl (30-36px) | Light   | Tracking Wide   | `text-3xl md:text-4xl font-light`               |
| H3                   | Playfair Display | 2xl (24px)        | Light   | Tracking Wide   | `text-2xl font-light`                           |
| H4-H6                | Playfair Display | xl-lg (18-20px)   | Light   | Tracking Wide   | `text-xl font-light`                            |
| Paragraphe           | Montserrat       | base (16px)       | Regular | Normal          | `text-base`                                     |
| Petit texte          | Montserrat       | sm (14px)         | Regular | Normal          | `text-sm`                                       |
| Très petit texte     | Montserrat       | xs (12px)         | Regular | Normal          | `text-xs`                                       |
| Titres en majuscules | Montserrat       | sm (14px)         | Medium  | Tracking Widest | `text-sm font-medium uppercase tracking-widest` |

### Classes typographiques spéciales

- **Titre de section** : `.section-title` - Texte en majuscules, turquoise, espacement large
- **En-tête de section** : `.section-heading` - Titre principal de section, plus grand sur desktop
- **Titre en majuscules** : `.title-uppercase` - Pour les titres stylisés en majuscules

---

## Espacements et Layout

### Système de grille

Le site utilise le système de grille Tailwind CSS avec des configurations personnalisées :

- **Container** : Centré avec un padding de 2rem
- **Breakpoints** :
  - `sm` : 640px
  - `md` : 768px
  - `lg` : 1024px
  - `xl` : 1280px
  - `2xl` : 1400px (personnalisé)

### Espacements

Les espacements suivent l'échelle de Tailwind CSS :

- **Petit** : 0.25rem (1px), 0.5rem (2px), 0.75rem (3px), 1rem (4px)
- **Moyen** : 1.5rem (6px), 2rem (8px), 2.5rem (10px), 3rem (12px)
- **Grand** : 4rem (16px), 5rem (20px), 6rem (24px), 8rem (32px)
- **Très grand** : 10rem (40px), 12rem (48px), 16rem (64px)

### Layout des sections

- **Padding vertical des sections** : `py-16 md:py-24` (4rem sur mobile, 6rem sur desktop)
- **Marge entre les éléments** : Généralement 2rem (8px) pour les petits éléments, 4rem (16px) pour les sections
- **Hauteur de la navbar** : 70px (définie comme variable CSS `--navbar-height`)
- **Hero section** : Hauteur complète de l'écran (`height: 100vh`)

### Grilles pour les listes de produits

- **Mobile** : 1 colonne ou 2 colonnes (`grid-cols-1` ou `grid-cols-2`)
- **Tablette** : 2-3 colonnes (`md:grid-cols-3`)
- **Desktop** : 3-4 colonnes (`lg:grid-cols-4`)
- **Espacement de grille** : `gap-4` (1rem) à `gap-8` (2rem)

---

## Composants

### Boutons

Trois styles principaux de boutons avec des effets de hover et de clic :

#### Bouton Primaire (`.btn-primary`)

```css
.btn-primary {
  @apply bg-turquoise text-white rounded-md px-6 py-3;
  background-image: linear-gradient(to right, #1a858d, #235d62);
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  background-image: linear-gradient(to right, #235d62, #1a858d);
}
```

#### Bouton Secondaire (`.btn-secondary`)

```css
.btn-secondary {
  @apply border border-turquoise bg-transparent text-turquoise rounded-md px-6 py-3;
  background-position: 0 0;
  background-size: 200% 100%;
  background-image: linear-gradient(to right, transparent 50%, rgba(26, 133, 141, 0.1) 50%);
  transition: background-position 0.3s ease-out, transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.btn-secondary:hover {
  background-position: -100% 0;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
```

#### Bouton Coral (`.btn-coral`)

```css
.btn-coral {
  @apply bg-coral text-white rounded-md px-6 py-3;
  background-image: linear-gradient(to right, #e8837e, #d25e5e);
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-coral:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  background-image: linear-gradient(to right, #d25e5e, #e8837e);
}
```

#### Variantes de boutons (shadcn/ui)

Le site utilise également les variantes de boutons de shadcn/ui :

- `default` : Style principal
- `destructive` : Pour les actions de suppression
- `outline` : Avec bordure
- `secondary` : Style secondaire
- `ghost` : Transparent avec hover
- `link` : Style lien

### Cartes produit

```jsx
<div className="product-card group">
  <div className="relative overflow-hidden rounded-sm">
    <img
      src={image}
      alt={name}
      className="product-image transform transition-transform duration-500 group-hover:scale-105"
    />
    <Button
      variant="ghost"
      size="icon"
      className="absolute right-2 top-2 bg-white/80 backdrop-blur-sm hover:bg-white/90"
    >
      <Heart className="h-5 w-5 text-text-primary" />
    </Button>
    {isNew && (
      <span className="absolute left-2 top-2 rounded-sm bg-coral px-3 py-1 text-xs font-medium text-white">
        NOUVEAU
      </span>
    )}
    {/* Bouton Ajouter au panier qui apparaît au survol */}
    {isHovered && (
      <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity duration-300">
        <Button className="btn-primary flex items-center gap-2 py-2 rounded-md">
          <ShoppingBag className="h-4 w-4" />
          AJOUTER AU PANIER
        </Button>
      </div>
    )}
  </div>
  <div className="p-4">
    <h3 className="text-base font-medium text-text-primary">{name}</h3>
    <p className="mt-1 text-sm text-text-secondary line-clamp-1">{description}</p>
    <p className="mt-2 text-base font-medium text-turquoise">{price} €</p>
  </div>
</div>
```

### Formulaires

Les composants de formulaire utilisent les styles de shadcn/ui avec des personnalisations :

#### Input

```jsx
<Input
  type="email"
  placeholder="Votre adresse email"
  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white"
/>
```

#### Label

```jsx
<Label htmlFor="email" className="text-sm font-medium">
  Adresse email
</Label>
```

### Composants UI

Le site utilise de nombreux composants de shadcn/ui, notamment :

- **Dialog/Modal** : Pour les fenêtres modales
- **Dropdown Menu** : Pour les menus déroulants
- **Accordion** : Pour les contenus pliables
- **Carousel** : Pour les diaporamas
- **Tabs** : Pour les contenus à onglets
- **Toast** : Pour les notifications
- **Tooltip** : Pour les infobulles
- **Card** : Pour les contenus encadrés

---

## Animations et Transitions

### Animations prédéfinies

#### Animations de fondu

```css
@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-down {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

Classes associées : `animate-fade-up`, `animate-fade-down`

#### Animation de flottement

```css
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
```

Classe associée : `floating-image`

#### Animation de pulsation

```css
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(26, 133, 141, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(26, 133, 141, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(26, 133, 141, 0);
  }
}
```

Classe associée : `btn-pulse`

#### Animation d'effet d'onde (Ripple)

```css
@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 0.5;
  }
  20% {
    transform: scale(25, 25);
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: scale(40, 40);
  }
}
```

Appliqué aux boutons via pseudo-éléments.

### Transitions

#### Transitions sur les boutons

- **Durée** : 300ms
- **Timing** : ease-out
- **Propriétés** : transform, box-shadow, background-position

#### Transitions sur les images

- **Durée** : 500ms
- **Propriétés** : transform (scale)
- **Classe** : `transition-transform duration-500 group-hover:scale-105`

#### Transitions sur les cartes

- **Durée** : 300ms
- **Propriétés** : transform, box-shadow
- **Classe** : `transition-all duration-300 hover:shadow-md`

### Animations interactives

- **Hover sur les cartes produit** : Agrandissement de l'image et apparition du bouton d'ajout au panier
- **Hover sur les boutons** : Léger déplacement vers le haut et augmentation de l'ombre
- **Clic sur les boutons** : Effet d'onde (ripple) et léger déplacement vers le bas

---

## Responsive Design

### Breakpoints

Le site utilise les breakpoints standard de Tailwind CSS :

- **sm** : 640px (Petits appareils mobiles en mode paysage)
- **md** : 768px (Tablettes)
- **lg** : 1024px (Ordinateurs portables)
- **xl** : 1280px (Ordinateurs de bureau)
- **2xl** : 1400px (Grands écrans)

### Adaptations responsive

#### Navigation

- **Mobile** : Menu hamburger avec drawer latéral
- **Desktop** : Barre de navigation horizontale complète

#### Grilles

- **Mobile** : 1-2 colonnes
- **Tablette** : 2-3 colonnes
- **Desktop** : 3-4 colonnes

#### Typographie

- **Mobile** : Tailles réduites (ex: `text-4xl` pour H1)
- **Desktop** : Tailles plus grandes (ex: `md:text-6xl lg:text-7xl` pour H1)

#### Espacements

- **Mobile** : Espacements réduits (ex: `py-16`)
- **Desktop** : Espacements plus grands (ex: `md:py-24`)

#### Composants spécifiques

- **Hero Section** : Pleine hauteur sur tous les appareils, mais contenu adapté
- **Carousel** : Contrôles adaptés selon la taille d'écran

---

## Iconographie

### Bibliothèque d'icônes

Le site utilise principalement la bibliothèque **Lucide React** pour les icônes.

### Icônes courantes

- **Shopping Bag** : Panier d'achat
- **Heart** : Favoris
- **Instagram, Facebook** : Réseaux sociaux
- **ChevronDown, ChevronRight** : Navigation
- **Search** : Recherche
- **Menu** : Menu mobile
- **X** : Fermeture

### Style des icônes

- **Taille standard** : `h-5 w-5` (20px)
- **Petite taille** : `h-4 w-4` (16px)
- **Grande taille** : `h-6 w-6` (24px)
- **Couleur** : Généralement héritée du texte parent ou spécifiée explicitement

---

## Principes d'UI/UX

### Principes de design

1. **Élégance et simplicité** : Interface épurée mettant en valeur les produits
2. **Cohérence visuelle** : Utilisation cohérente des couleurs, typographies et espacements
3. **Feedback interactif** : Animations et transitions pour indiquer les interactions
4. **Hiérarchie visuelle claire** : Distinction nette entre les éléments principaux et secondaires
5. **Accessibilité** : Contraste suffisant et tailles de texte lisibles

### Patterns d'interaction

1. **Hover states** : Effets visuels au survol des éléments interactifs
2. **Animations d'entrée** : Fondu et déplacement pour les éléments importants
3. **Micro-interactions** : Petites animations pour améliorer l'expérience utilisateur
4. **Transitions fluides** : Entre les états et les pages
5. **Feedback visuel** : Pour les actions utilisateur (clics, formulaires, etc.)

### Accessibilité

- **Contraste** : Respect des ratios de contraste WCAG
- **Focus visible** : Styles de focus pour la navigation au clavier
- **Textes alternatifs** : Pour toutes les images
- **Structure sémantique** : Utilisation appropriée des balises HTML
- **Responsive** : Adaptation à tous les appareils et tailles d'écran

---

Ce design system est conçu pour être évolutif et cohérent, permettant de maintenir une identité visuelle forte tout en facilitant le développement de nouvelles fonctionnalités.
