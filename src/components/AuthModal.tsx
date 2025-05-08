import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useAuth } from '../contexts/useAuth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<string>('login');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [resetSent, setResetSent] = useState<boolean>(false);

  const { login, signup, resetPassword } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }
    
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      onClose();
    } catch (err: unknown) {
      const firebaseError = err as { code?: string, message?: string };
      console.error('Détails de l\'erreur de connexion:', firebaseError);
      
      // Gérer les différents types d'erreurs Firebase
      switch(firebaseError.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          setError('Email ou mot de passe incorrect');
          break;
        case 'auth/invalid-email':
          setError('Adresse email invalide');
          break;
        case 'auth/user-disabled':
          setError('Ce compte a été désactivé');
          break;
        case 'auth/too-many-requests':
          setError('Trop de tentatives de connexion. Veuillez réessayer plus tard.');
          break;
        case 'auth/network-request-failed':
          setError('Problème de connexion réseau. Vérifiez votre connexion internet.');
          break;
        default:
          setError(`Erreur de connexion: ${firebaseError.message || 'Veuillez réessayer'}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !displayName || !confirmPassword) {
      setError('Veuillez remplir tous les champs');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }
    
    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }
    
    try {
      setError('');
      setLoading(true);
      await signup(email, password, displayName);
      onClose();
    } catch (err: unknown) {
      const firebaseError = err as { code?: string, message?: string };
      console.error('Détails de l\'erreur d\'inscription:', firebaseError);
      
      // Gérer les différents types d'erreurs Firebase
      switch(firebaseError.code) {
        case 'auth/email-already-in-use':
          setError('Cet email est déjà utilisé');
          break;
        case 'auth/invalid-email':
          setError('Adresse email invalide');
          break;
        case 'auth/weak-password':
          setError('Le mot de passe est trop faible. Il doit contenir au moins 6 caractères.');
          break;
        case 'auth/network-request-failed':
          setError('Problème de connexion réseau. Vérifiez votre connexion internet.');
          break;
        default:
          setError(`Erreur lors de l'inscription: ${firebaseError.message || 'Veuillez réessayer'}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Veuillez entrer votre email');
      return;
    }
    
    try {
      setError('');
      setLoading(true);
      await resetPassword(email);
      setResetSent(true);
    } catch (err) {
      setError('Erreur lors de l\'envoi du lien de réinitialisation');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setDisplayName('');
    setConfirmPassword('');
    setError('');
    setResetSent(false);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    resetForm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px] rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light text-center">
            <span className="text-gradient-pink font-medium">MAXA</span>
            <span className="text-text-primary">SWIMS</span>
          </DialogTitle>
          <DialogDescription className="text-center">
            Connectez-vous ou créez un compte pour accéder à votre espace personnel
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="login" className="rounded-l-full">Connexion</TabsTrigger>
            <TabsTrigger value="signup" className="rounded-r-full">Inscription</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            {resetSent ? (
              <div className="p-4 bg-green-50 text-green-700 rounded-lg text-center">
                <p>Un lien de réinitialisation a été envoyé à votre adresse email.</p>
                <Button 
                  variant="link" 
                  onClick={() => setResetSent(false)}
                  className="mt-2 text-pink-500"
                >
                  Retour à la connexion
                </Button>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-full"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Button 
                      variant="link" 
                      type="button" 
                      onClick={() => setActiveTab('reset')}
                      className="text-xs text-pink-500 p-0 h-auto"
                    >
                      Mot de passe oublié ?
                    </Button>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-full"
                  />
                </div>

                {error && (
                  <div className="p-2 text-sm text-red-500 bg-red-50 rounded-lg">
                    {error}
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full rounded-full bg-gradient-pink text-white hover:bg-pink-600"
                  disabled={loading}
                >
                  {loading ? 'Connexion en cours...' : 'Se connecter'}
                </Button>
              </form>
            )}
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="displayName">Nom complet</Label>
                <Input
                  id="displayName"
                  type="text"
                  placeholder="Votre nom"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="rounded-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signupEmail">Email</Label>
                <Input
                  id="signupEmail"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signupPassword">Mot de passe</Label>
                <Input
                  id="signupPassword"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="rounded-full"
                />
              </div>

              {error && (
                <div className="p-2 text-sm text-red-500 bg-red-50 rounded-lg">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full rounded-full bg-gradient-pink text-white hover:bg-pink-600"
                disabled={loading}
              >
                {loading ? 'Inscription en cours...' : 'Créer un compte'}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="reset" className="space-y-4">
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="resetEmail">Email</Label>
                <Input
                  id="resetEmail"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full"
                />
              </div>

              {error && (
                <div className="p-2 text-sm text-red-500 bg-red-50 rounded-lg">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full rounded-full bg-gradient-pink text-white hover:bg-pink-600"
                disabled={loading}
              >
                {loading ? 'Envoi en cours...' : 'Réinitialiser le mot de passe'}
              </Button>

              <Button 
                variant="outline" 
                type="button" 
                onClick={() => setActiveTab('login')}
                className="w-full rounded-full border-pink-500 text-pink-500"
              >
                Retour à la connexion
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex flex-col sm:flex-row sm:justify-center text-center text-sm text-gray-500 mt-4">
          <p>
            En vous connectant, vous acceptez nos{' '}
            <a href="#" className="text-pink-500 hover:underline">
              Conditions d'utilisation
            </a>{' '}
            et notre{' '}
            <a href="#" className="text-pink-500 hover:underline">
              Politique de confidentialité
            </a>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
