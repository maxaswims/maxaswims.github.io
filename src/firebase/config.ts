// Remarque: Cette configuration est une simulation locale pour le développement
// Pour la production, vous devrez configurer Firebase avec vos propres clés API

// Créer un mock pour l'authentification Firebase
class MockAuth {
  currentUser: any = null;
  listeners: Array<(user: any) => void> = [];

  // Simuler la création d'un utilisateur
  async createUserWithEmailAndPassword(email: string, password: string) {
    // Vérifier si l'utilisateur existe déjà
    const users = this.getUsers();
    if (users.find(user => user.email === email)) {
      throw { code: 'auth/email-already-in-use', message: 'Cet email est déjà utilisé' };
    }

    // Créer un nouvel utilisateur
    const newUser = {
      uid: `user-${Date.now()}`,
      email,
      emailVerified: false,
      displayName: '',
      photoURL: null,
      createdAt: new Date().toISOString(),
    };

    // Stocker l'utilisateur
    users.push({ ...newUser, password });
    localStorage.setItem('mockUsers', JSON.stringify(users));

    // Mettre à jour l'utilisateur courant
    this.currentUser = { ...newUser };
    this.notifyListeners(this.currentUser);

    return { user: this.currentUser };
  }

  // Simuler la mise à jour du profil utilisateur
  async updateProfile(user: any, data: any) {
    if (!user) return;

    // Mettre à jour les propriétés de l'utilisateur
    Object.assign(user, data);

    // Mettre à jour l'utilisateur dans le stockage
    const users = this.getUsers();
    const index = users.findIndex(u => u.uid === user.uid);
    if (index !== -1) {
      users[index] = { ...users[index], ...data };
      localStorage.setItem('mockUsers', JSON.stringify(users));
    }

    // Mettre à jour l'utilisateur courant
    if (this.currentUser && this.currentUser.uid === user.uid) {
      this.currentUser = { ...this.currentUser, ...data };
      this.notifyListeners(this.currentUser);
    }

    return user;
  }

  // Simuler la connexion
  async signInWithEmailAndPassword(email: string, password: string) {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      throw { code: 'auth/user-not-found', message: 'Email ou mot de passe incorrect' };
    }

    // Mettre à jour l'utilisateur courant (sans le mot de passe)
    const { password: _, ...userWithoutPassword } = user;
    this.currentUser = { ...userWithoutPassword };
    this.notifyListeners(this.currentUser);

    return { user: this.currentUser };
  }

  // Simuler la déconnexion
  async signOut() {
    this.currentUser = null;
    this.notifyListeners(null);
    return true;
  }

  // Simuler l'envoi d'un email de réinitialisation de mot de passe
  async sendPasswordResetEmail(email: string) {
    const users = this.getUsers();
    const user = users.find(u => u.email === email);

    if (!user) {
      throw { code: 'auth/user-not-found', message: 'Aucun utilisateur trouvé avec cet email' };
    }

    // Dans une implémentation réelle, un email serait envoyé ici
    console.log(`Email de réinitialisation envoyé à ${email}`);
    return true;
  }

  // Observer les changements d'état d'authentification
  onAuthStateChanged(callback: (user: any) => void) {
    this.listeners.push(callback);
    // Appeler immédiatement avec l'état actuel
    callback(this.currentUser);

    // Retourner une fonction pour se désabonner
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    };
  }

  // Notifier tous les listeners des changements
  private notifyListeners(user: any) {
    this.listeners.forEach(listener => listener(user));
  }

  // Récupérer les utilisateurs du stockage local
  private getUsers() {
    const usersJson = localStorage.getItem('mockUsers');
    return usersJson ? JSON.parse(usersJson) : [];
  }
}

// Créer un mock pour Firestore
class MockFirestore {
  // Simuler la création d'un document
  doc(collection: string, id: string) {
    return {
      // Simuler la récupération d'un document
      async get() {
        const data = this.getCollection(collection);
        const document = data[id];
        return {
          exists: !!document,
          data: () => document || null,
          id
        };
      },
      // Simuler la mise à jour d'un document
      async set(data: any, options: any = {}) {
        const collectionData = this.getCollection(collection);
        if (options.merge && collectionData[id]) {
          collectionData[id] = { ...collectionData[id], ...data };
        } else {
          collectionData[id] = data;
        }
        this.saveCollection(collection, collectionData);
        return true;
      }
    };
  }

  // Récupérer une collection du stockage local
  private getCollection(collectionName: string) {
    const collectionJson = localStorage.getItem(`mock_${collectionName}`);
    return collectionJson ? JSON.parse(collectionJson) : {};
  }

  // Sauvegarder une collection dans le stockage local
  private saveCollection(collectionName: string, data: any) {
    localStorage.setItem(`mock_${collectionName}`, JSON.stringify(data));
  }
}

// Créer des instances des mocks
export const auth = new MockAuth();
export const db = new MockFirestore();

// Exporter les fonctions Firebase simulées
export const createUserWithEmailAndPassword = (auth: any, email: string, password: string) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const signInWithEmailAndPassword = (auth: any, email: string, password: string) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const signOut = (auth: any) => {
  return auth.signOut();
};

export const updateProfile = (user: any, data: any) => {
  return auth.updateProfile(user, data);
};

export const sendPasswordResetEmail = (auth: any, email: string) => {
  return auth.sendPasswordResetEmail(email);
};

export const onAuthStateChanged = (auth: any, callback: (user: any) => void) => {
  return auth.onAuthStateChanged(callback);
};

export const Timestamp = {
  now: () => ({ toDate: () => new Date() })
};

export default { auth, db };
