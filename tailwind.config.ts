import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Nouvelles couleurs MAXA design system rose
        pink: {
          light: "#FFD6E6", // Rose pâle pour les fonds légers
          DEFAULT: "#FF80B0", // Rose principal pour les éléments importants
          medium: "#FF5C98", // Rose vif pour les accents
          dark: "#E63F7D",   // Rose foncé pour le contraste
          deep: "#C4306A",   // Rose profond pour les textes importants
        },
        sand: {
          lightest: "#FFFBF7", // Blanc cassé pour le fond principal
          light: "#F9F7F4",    // Sable clair pour les sections
          DEFAULT: "#F0E9E0",  // Sable pour les cartes et éléments
          gold: "#D9C5A0",     // Beige doré pour les accents
        },
        coral: {
          light: "#FFB0A8",    // Corail clair pour les hover
          DEFAULT: "#FF8C84",  // Corail pour les accents secondaires
          dark: "#E57670",     // Corail foncé pour les boutons secondaires
        },
        text: {
          primary: "#333333",  // Texte principal
          secondary: "#666666", // Texte secondaire
          light: "#999999",    // Texte tertiaire
          inverted: "#FFFFFF", // Texte sur fond foncé
        },
        turquoise: {
          light: "#5ECAD1",    // Turquoise clair
          DEFAULT: "#1A858D",  // Turquoise principal (valeur utilisée dans le gradient)
          dark: "#235D62",     // Turquoise foncé (valeur utilisée dans le gradient)
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "bubble": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-pink": {
          "0%, 100%": { 
            boxShadow: "0 0 0 0 rgba(255, 128, 176, 0.4)" 
          },
          "50%": { 
            boxShadow: "0 0 0 15px rgba(255, 128, 176, 0)" 
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-down": "fade-down 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "bubble": "bubble 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-pink": "pulse-pink 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      // Bordures arrondies personnalisées
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        'bubble': '40% 60% 60% 40% / 60% 30% 70% 40%',
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
      // Ombres personnalisées
      boxShadow: {
        'pink-glow': '0 0 15px rgba(255, 128, 176, 0.5)',
        'pink-inner': 'inset 0 2px 4px 0 rgba(255, 128, 176, 0.2)',
        'bubble': '0 10px 25px -5px rgba(255, 128, 176, 0.1), 0 8px 10px -6px rgba(255, 128, 176, 0.1)',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
