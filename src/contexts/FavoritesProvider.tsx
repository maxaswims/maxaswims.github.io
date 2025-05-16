import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { useAuth } from './useAuth';
import { db, doc, getDoc, setDoc } from '../firebase/config';
import { FavoritesContext, FavoriteProduct } from './FavoritesContext';

// Props pour le provider
interface FavoritesProviderProps {
  children: ReactNode;
}

// Provider du contexte des favoris
export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<FavoriteProduct[]>([]);
  const { currentUser } = useAuth();
  // Référence pour suivre si l'utilisateur était déjà connecté
  const previousUserRef = useRef<{ uid: string } | null>(null);

  // Charger les favoris depuis le localStorage ou Firebase lors du montage du composant
  useEffect(() => {
    const loadFavorites = async () => {
      // D'abord, charger les favoris depuis le localStorage pour une expérience utilisateur rapide
      const localFavorites = localStorage.getItem('favorites');
      if (localFavorites) {
        try {
          const parsedFavorites = JSON.parse(localFavorites);
          setFavorites(parsedFavorites);
        } catch (parseError) {
          console.error("Erreur lors de l'analyse des favoris locaux:", parseError);
          localStorage.removeItem('favorites'); // Supprimer les données corrompues
          setFavorites([]);
        }
      }
      
      // Si l'utilisateur est connecté, essayer de charger depuis Firestore
      if (currentUser) {
        // Utiliser un délai pour éviter les problèmes de connexion immédiate à Firestore après l'authentification
        setTimeout(async () => {
          try {
            const userDocRef = doc(db, 'users', currentUser.uid);
            let userDocSnap;
            
            try {
              userDocSnap = await getDoc(userDocRef);
            } catch (getError) {
              console.warn("Erreur lors de la récupération du document utilisateur:", getError);
              return; // Sortir de la fonction en cas d'erreur de récupération
            }
            
            if (userDocSnap && userDocSnap.exists()) {
              const userData = userDocSnap.data();
              if (userData && Array.isArray(userData.favorites)) {
                setFavorites(userData.favorites);
                // Synchroniser avec localStorage
                try {
                  localStorage.setItem('favorites', JSON.stringify(userData.favorites));
                } catch (storageError) {
                  console.warn("Erreur lors de la sauvegarde dans localStorage:", storageError);
                }
              } else if (localFavorites) {
                // Si Firestore n'a pas de favoris mais localStorage en a, synchroniser vers Firestore plus tard
                // On ne fait rien ici pour éviter les erreurs de connexion immédiate
              }
            } else if (localFavorites) {
              // On ne crée pas le document utilisateur immédiatement pour éviter les erreurs
              // Cela sera fait lors de la prochaine mise à jour des favoris
            }
          } catch (firestoreError) {
            console.error("Erreur lors de l'accès à Firestore:", firestoreError);
            // Continuer avec les favoris locaux déjà chargés
          }
        }, 2000); // Délai de 2 secondes pour laisser le temps à Firebase de s'initialiser complètement
      }
    };

    loadFavorites();
  }, [currentUser]);

  // Sauvegarder les favoris dans le localStorage et Firebase lorsqu'ils changent
  useEffect(() => {
    // Ne rien faire si les favoris sont vides (initialisation)
    if (favorites.length === 0 && !localStorage.getItem('favorites')) {
      return;
    }
    
    // Toujours sauvegarder dans le localStorage
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (localStorageError) {
      console.error("Erreur lors de la sauvegarde dans localStorage:", localStorageError);
    }
    
    // Variable pour suivre si l'utilisateur vient de se connecter
    const isNewLogin = currentUser && !previousUserRef.current;
    previousUserRef.current = currentUser;
    
    // Si l'utilisateur est connecté, sauvegarder aussi dans Firebase
    if (currentUser) {
      const saveFavorites = async () => {
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          
          // Vérifier d'abord si le document existe
          try {
            const docSnap = await getDoc(userDocRef);
            
            if (!docSnap.exists()) {
              // Créer le document utilisateur avec les informations de base
              await setDoc(userDocRef, {
                email: currentUser.email || '',
                displayName: currentUser.displayName || '',
                createdAt: new Date(),
                lastLogin: new Date(),
                favorites: favorites
              });
              return;
            }
          } catch (checkError) {
            console.warn("Erreur lors de la vérification du document utilisateur:", checkError);
            // Continuer malgré l'erreur
          }
          
          // Mettre à jour uniquement les favoris
          await setDoc(userDocRef, { favorites }, { merge: true });
        } catch (firestoreError) {
          console.error("Erreur lors de la sauvegarde des favoris dans Firestore:", firestoreError);
          // Continuer car les favoris sont déjà sauvegardés dans localStorage
        }
      };
      
      // Délai plus long si l'utilisateur vient de se connecter
      const delay = isNewLogin ? 3000 : 500;
      
      // Utiliser un délai pour éviter les mises à jour trop fréquentes
      const timeoutId = setTimeout(() => {
        saveFavorites();
      }, delay);
      
      return () => clearTimeout(timeoutId);
    }
  }, [favorites, currentUser]);

  // Ajouter un produit aux favoris
  const addToFavorites = (product: FavoriteProduct) => {
    setFavorites(prevFavorites => {
      // Vérifier si le produit est déjà dans les favoris
      if (prevFavorites.some(fav => fav.id === product.id)) {
        return prevFavorites;
      }
      return [...prevFavorites, product];
    });
  };

  // Supprimer un produit des favoris
  const removeFromFavorites = (productId: string) => {
    setFavorites(prevFavorites => 
      prevFavorites.filter(product => product.id !== productId)
    );
  };

  // Vérifier si un produit est dans les favoris
  const isFavorite = (productId: string) => {
    return favorites.some(product => product.id === productId);
  };

  // Vider tous les favoris
  const clearFavorites = () => {
    setFavorites([]);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    clearFavorites
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
