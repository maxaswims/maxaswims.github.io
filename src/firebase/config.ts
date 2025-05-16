// Configuration Firebase pour le projet MAXA Swims
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword as firebaseCreateUser,
  signInWithEmailAndPassword as firebaseSignIn,
  signOut as firebaseSignOut,
  onAuthStateChanged as firebaseOnAuthStateChanged,
  updateProfile as firebaseUpdateProfile,
  sendPasswordResetEmail as firebaseSendPasswordResetEmail
} from 'firebase/auth';
import { 
  getFirestore, 
  doc as firestoreDoc, 
  setDoc as firestoreSetDoc, 
  getDoc as firestoreGetDoc,
  Timestamp as FirebaseTimestamp,
  collection as firestoreCollection,
  getDocs as firestoreGetDocs,
  updateDoc as firestoreUpdateDoc,
  deleteDoc as firestoreDeleteDoc,
  query as firestoreQuery,
  where as firestoreWhere,
  orderBy as firestoreOrderBy,
  limit as firestoreLimit
} from 'firebase/firestore';

// Configuration Firebase avec les identifiants du projet
const firebaseConfig = {
  apiKey: "AIzaSyDjcJHUoarSq-nyWqEaptj9i3GDNun0zjM",
  authDomain: "maxaswims-79a9d.firebaseapp.com",
  projectId: "maxaswims-79a9d",
  storageBucket: "maxaswims-79a9d.appspot.com",
  messagingSenderId: "194557098309",
  appId: "1:194557098309:web:0123456789abcdef" // Remplacer par l'appId réel
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Utiliser getFirestore standard et configurer les paramètres de persistance séparément
export const db = getFirestore(app);

// Configurer les paramètres de Firestore pour résoudre les erreurs 400
import { enableIndexedDbPersistence, CACHE_SIZE_UNLIMITED, disableNetwork, enableNetwork } from 'firebase/firestore';

// Fonction pour initialiser Firestore avec gestion des erreurs
const initializeFirestoreSettings = async () => {
  try {
    // Désactiver temporairement le réseau pour éviter les connexions prématurées
    await disableNetwork(db);
    
    // Attendre un court instant
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Activer la persistance locale pour fonctionner hors ligne
    await enableIndexedDbPersistence(db).catch((err) => {
      if (err.code === 'failed-precondition') {
        // Plusieurs onglets ouverts, la persistance ne peut fonctionner que dans un seul
        console.warn('La persistance ne peut pas être activée car plusieurs onglets sont ouverts');
      } else if (err.code === 'unimplemented') {
        // Le navigateur actuel ne prend pas en charge la persistance
        console.warn('Le navigateur actuel ne prend pas en charge la persistance IndexedDB');
      }
    });
    
    // Réactiver le réseau après avoir configuré la persistance
    await enableNetwork(db);
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de Firestore:', error);
  }
};

// Initialiser les paramètres Firestore
initializeFirestoreSettings();

// Ajouter la gestion des erreurs pour les opérations Firestore
interface FirebaseError extends Error {
  code?: string;
  message: string;
}

const handleFirestoreError = (error: FirebaseError) => {
  console.error('Erreur Firestore:', error);
  if (error.code === 'permission-denied') {
    console.warn('Vérifiez les règles de sécurité Firestore');
  } else if (error.message && error.message.includes('400')) {
    console.warn('Erreur 400 détectée. Tentative de rétablissement de la connexion...');
    // Tentative de rétablissement de la connexion
    disableNetwork(db).then(() => {
      setTimeout(() => {
        enableNetwork(db).catch(e => console.error('Impossible de rétablir la connexion:', e));
      }, 2000);
    }).catch(e => console.error('Impossible de désactiver le réseau:', e));
  }
  throw error;
};

// Types pour Firebase
import { Auth, User as FirebaseUser, UserCredential } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';

// Exporter les fonctions Firebase
export const createUserWithEmailAndPassword = async (auth: Auth, email: string, password: string): Promise<UserCredential> => {
  try {
    const userCredential = await firebaseCreateUser(auth, email, password);
    
    try {
      await firestoreSetDoc(firestoreDoc(db, 'users', userCredential.user.uid), {
        email: userCredential.user.email,
        displayName: userCredential.user.displayName || '',
        createdAt: FirebaseTimestamp.now(),
        lastLogin: FirebaseTimestamp.now()
      });
    } catch (firestoreError) {
      handleFirestoreError(firestoreError as FirebaseError);
      console.warn('Utilisateur créé mais erreur lors de la sauvegarde dans Firestore:', firestoreError);
      // Continuer car l'authentification a réussi même si Firestore a échoué
    }
    
    return userCredential;
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur:', error);
    throw error;
  }
};

export const signInWithEmailAndPassword = async (auth: Auth, email: string, password: string): Promise<UserCredential> => {
  try {
    // Ajouter un délai avant la connexion pour éviter les erreurs 400
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const userCredential = await firebaseSignIn(auth, email, password);
    
    // Attendre un peu avant d'accéder à Firestore
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Vérifier si le réseau est disponible avant d'accéder à Firestore
    try {
      // Utiliser un timeout pour éviter que l'opération ne bloque trop longtemps
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Timeout lors de l\'accès à Firestore')), 5000);
      });
      
      // Essayer de mettre à jour lastLogin avec un timeout
      await Promise.race([
        firestoreSetDoc(firestoreDoc(db, 'users', userCredential.user.uid), {
          lastLogin: FirebaseTimestamp.now()
        }, { merge: true }),
        timeoutPromise
      ]);
    } catch (firestoreError) {
      console.warn('Connexion réussie mais erreur lors de la mise à jour de lastLogin:', firestoreError);
      // Essayer de rétablir la connexion Firestore
      try {
        await disableNetwork(db);
        setTimeout(() => {
          enableNetwork(db).catch(e => console.error('Impossible de rétablir la connexion:', e));
        }, 2000);
      } catch (networkError) {
        console.error('Erreur lors de la tentative de rétablissement de la connexion:', networkError);
      }
    }
    
    return userCredential;
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    throw error;
  }
};

export const signOut = (auth: Auth): Promise<void> => {
  return firebaseSignOut(auth);
};

export const updateProfile = async (user: FirebaseUser, data: { displayName?: string; photoURL?: string }): Promise<FirebaseUser> => {
  try {
    await firebaseUpdateProfile(user, data);
    
    // Mettre à jour les données utilisateur dans Firestore
    await firestoreSetDoc(firestoreDoc(db, 'users', user.uid), {
      displayName: data.displayName || user.displayName,
      photoURL: data.photoURL || user.photoURL
    }, { merge: true });
    
    return user;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil:', error);
    throw error;
  }
};

export const sendPasswordResetEmail = (auth: Auth, email: string): Promise<void> => {
  return firebaseSendPasswordResetEmail(auth, email);
};

export const onAuthStateChanged = (auth: Auth, callback: (user: FirebaseUser | null) => void) => {
  return firebaseOnAuthStateChanged(auth, callback);
};

// Exporter les fonctions Firestore
export const doc = firestoreDoc;
export const setDoc = firestoreSetDoc;
export const getDoc = firestoreGetDoc;
export const collection = firestoreCollection;
export const getDocs = firestoreGetDocs;
export const updateDoc = firestoreUpdateDoc;
export const deleteDoc = firestoreDeleteDoc;
export const query = firestoreQuery;
export const where = firestoreWhere;
export const orderBy = firestoreOrderBy;
export const limit = firestoreLimit;
export const Timestamp = FirebaseTimestamp;

export default { auth, db };
