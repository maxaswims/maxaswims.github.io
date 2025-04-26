#!/bin/bash

echo "🚀 Début du déploiement..."

# Nettoyage du dossier dist
rm -rf dist

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
cp public/manifest.webmanifest dist/manifest.webmanifest
cp public/.htaccess dist/
cp -r public/assets dist/ 2>/dev/null || echo "Aucun dossier assets à copier"
cp .gitattributes dist/

# Déploiement avec gh-pages
echo "🌐 Déploiement sur GitHub Pages..."
npx gh-pages -d dist -b main

echo "✅ Déploiement terminé!"
