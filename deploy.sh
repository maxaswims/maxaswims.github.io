#!/bin/bash

# Script de déploiement manuel pour GitHub Pages

echo "🚀 Début du déploiement..."

# Construction du projet
echo "📦 Construction du projet..."
npm run build

# Création du fichier .nojekyll
echo "📄 Création du fichier .nojekyll..."
touch dist/.nojekyll

# Copie des fichiers nécessaires
echo "📋 Copie des fichiers nécessaires..."
cp CNAME dist/
cp public/_headers dist/
cp public/404.html dist/
cp public/manifest.webmanifest dist/
cp public/.htaccess dist/ 2>/dev/null || echo "Aucun fichier .htaccess à copier"
cp -r public/assets dist/ 2>/dev/null || echo "Aucun dossier assets à copier"
cp .gitattributes dist/

# Déploiement avec gh-pages
echo "🌐 Déploiement sur GitHub Pages..."
npx gh-pages -d dist

echo "✅ Déploiement terminé!"
