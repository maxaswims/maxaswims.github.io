/**
 * MAXA SWIMS DESIGN SYSTEM
 * Basé sur les modèles UI/UX du dossier DS
 */

export const MAXA_DESIGN_SYSTEM = {
  // PALETTE DE COULEURS
  colors: {
    // Couleurs principales
    pink: {
      light: "#FFD6E6", // Rose pâle pour les fonds légers
      DEFAULT: "#FF80B0", // Rose principal pour les éléments importants
      medium: "#FF5C98", // Rose vif pour les accents
      dark: "#E63F7D",   // Rose foncé pour le contraste
      deep: "#C4306A",   // Rose profond pour les textes importants
    },
    // Couleurs secondaires
    sand: {
      lightest: "#FFFBF7", // Blanc cassé pour le fond principal
      light: "#F9F7F4",    // Sable clair pour les sections
      DEFAULT: "#F0E9E0",  // Sable pour les cartes et éléments
      gold: "#D9C5A0",     // Beige doré pour les accents
    },
    // Couleurs d'accent
    coral: {
      light: "#FFB0A8",    // Corail clair pour les hover
      DEFAULT: "#FF8C84",  // Corail pour les accents secondaires
      dark: "#E57670",     // Corail foncé pour les boutons secondaires
    },
    // Couleurs neutres
    neutral: {
      50: "#FFFFFF",       // Blanc pur
      100: "#F9F7F4",      // Blanc cassé
      200: "#EAEAEA",      // Gris très clair
      300: "#CCCCCC",      // Gris clair
      400: "#999999",      // Gris moyen
      500: "#666666",      // Gris
      600: "#444444",      // Gris foncé
      700: "#333333",      // Gris très foncé
      800: "#222222",      // Presque noir
      900: "#111111",      // Noir
    },
    text: {
      primary: "#333333",  // Texte principal
      secondary: "#666666", // Texte secondaire
      light: "#999999",    // Texte tertiaire
      inverted: "#FFFFFF", // Texte sur fond foncé
    },
  },

  // TYPOGRAPHIE
  typography: {
    fontFamily: {
      display: "'Playfair Display', serif",     // Pour les titres et éléments décoratifs
      body: "'Montserrat', sans-serif",         // Pour le texte courant
    },
    fontSize: {
      xs: "0.75rem",      // 12px
      sm: "0.875rem",     // 14px
      base: "1rem",       // 16px
      lg: "1.125rem",     // 18px
      xl: "1.25rem",      // 20px
      "2xl": "1.5rem",    // 24px
      "3xl": "1.875rem",  // 30px
      "4xl": "2.25rem",   // 36px
      "5xl": "3rem",      // 48px
      "6xl": "3.75rem",   // 60px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      none: 1,
      tight: 1.2,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
  },

  // ESPACEMENTS
  spacing: {
    0: "0",
    1: "0.25rem",      // 4px
    2: "0.5rem",       // 8px
    3: "0.75rem",      // 12px
    4: "1rem",         // 16px
    5: "1.25rem",      // 20px
    6: "1.5rem",       // 24px
    8: "2rem",         // 32px
    10: "2.5rem",      // 40px
    12: "3rem",        // 48px
    16: "4rem",        // 64px
    20: "5rem",        // 80px
    24: "6rem",        // 96px
    32: "8rem",        // 128px
  },

  // BORDURES ET ARRONDIS
  borders: {
    radius: {
      none: "0",
      sm: "0.125rem",   // 2px
      DEFAULT: "0.25rem", // 4px
      md: "0.375rem",   // 6px
      lg: "0.5rem",     // 8px
      xl: "0.75rem",    // 12px
      "2xl": "1rem",    // 16px
      "3xl": "1.5rem",  // 24px
      full: "9999px",   // Complètement arrondi (cercle pour les carrés)
    },
    width: {
      none: "0",
      thin: "1px",
      medium: "2px",
      thick: "4px",
    },
  },

  // OMBRES
  shadows: {
    none: "none",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  },

  // ANIMATIONS
  animations: {
    durations: {
      fast: "150ms",
      DEFAULT: "300ms",
      slow: "500ms",
      slower: "700ms",
      slowest: "1000ms",
    },
    easings: {
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      fadeUp: {
        from: { opacity: 0, transform: "translateY(10px)" },
        to: { opacity: 1, transform: "translateY(0)" },
      },
      fadeDown: {
        from: { opacity: 0, transform: "translateY(-10px)" },
        to: { opacity: 1, transform: "translateY(0)" },
      },
      scaleIn: {
        from: { opacity: 0, transform: "scale(0.95)" },
        to: { opacity: 1, transform: "scale(1)" },
      },
      bubble: {
        "0%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.05)" },
        "100%": { transform: "scale(1)" },
      },
    },
  },

  // EFFETS DE TRANSITION
  transitions: {
    property: {
      none: "none",
      all: "all",
      DEFAULT: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      colors: "background-color, border-color, color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform",
    },
    timingFunction: {
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    duration: {
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
    },
  },
};

export default MAXA_DESIGN_SYSTEM;
