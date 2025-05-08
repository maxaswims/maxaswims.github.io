import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useAuth } from '../contexts/useAuth';
import { db } from '../firebase/config';
import { User, Mail, Phone, MapPin } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UserProfileData {
  displayName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  postalCode: string;
}

export const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  const { currentUser, userProfile } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [profileData, setProfileData] = useState<UserProfileData>({
    displayName: userProfile?.displayName || '',
    email: userProfile?.email || '',
    phoneNumber: '',
    address: '',
    city: '',
    postalCode: ''
  });

  // Charger les données complètes du profil depuis Firebase
  useEffect(() => {
    const loadProfileData = async () => {
      if (currentUser) {
        try {
          const userDocRef = db.doc('users', currentUser.uid);
          const userDoc = await userDocRef.get();
          
          if (userDoc.exists && userDoc.data()) {
            const userData = userDoc.data();
            setProfileData({
              displayName: userProfile?.displayName || '',
              email: userProfile?.email || '',
              phoneNumber: userData.phoneNumber || '',
              address: userData.address || '',
              city: userData.city || '',
              postalCode: userData.postalCode || ''
            });
          }
        } catch (error) {
          console.error("Erreur lors du chargement du profil:", error);
        }
      }
    };

    if (isOpen) {
      loadProfileData();
    }
  }, [currentUser, userProfile, isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentUser) {
      setError('Vous devez être connecté pour modifier votre profil');
      return;
    }
    
    try {
      setError('');
      setLoading(true);
      
      // Mettre à jour le profil dans Firebase
      const userDocRef = db.doc('users', currentUser.uid);
      await userDocRef.set({
        displayName: profileData.displayName,
        phoneNumber: profileData.phoneNumber,
        address: profileData.address,
        city: profileData.city,
        postalCode: profileData.postalCode,
        updatedAt: new Date()
      }, { merge: true });
      
      setSuccess(true);
      
      // Réinitialiser le message de succès après 3 secondes
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      console.error('Erreur lors de la mise à jour du profil:', err);
      setError('Une erreur est survenue lors de la mise à jour du profil');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-pink-dark">
            <User className="h-5 w-5 text-pink" />
            Mon Profil
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <div className="space-y-2">
            <Label htmlFor="displayName" className="flex items-center gap-2">
              <User className="h-4 w-4 text-pink" />
              Nom complet
            </Label>
            <Input
              id="displayName"
              name="displayName"
              type="text"
              value={profileData.displayName}
              onChange={handleInputChange}
              className="rounded-full"
              placeholder="Votre nom complet"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-pink" />
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={profileData.email}
              disabled
              className="rounded-full bg-gray-50"
              placeholder="votre@email.com"
            />
            <p className="text-xs text-gray-500">L'email ne peut pas être modifié</p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-pink" />
              Téléphone
            </Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={profileData.phoneNumber}
              onChange={handleInputChange}
              className="rounded-full"
              placeholder="Votre numéro de téléphone"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address" className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-pink" />
              Adresse
            </Label>
            <Input
              id="address"
              name="address"
              type="text"
              value={profileData.address}
              onChange={handleInputChange}
              className="rounded-full"
              placeholder="Votre adresse"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">Ville</Label>
              <Input
                id="city"
                name="city"
                type="text"
                value={profileData.city}
                onChange={handleInputChange}
                className="rounded-full"
                placeholder="Votre ville"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postalCode">Code postal</Label>
              <Input
                id="postalCode"
                name="postalCode"
                type="text"
                value={profileData.postalCode}
                onChange={handleInputChange}
                className="rounded-full"
                placeholder="Code postal"
              />
            </div>
          </div>

          {error && (
            <div className="p-2 text-sm text-red-500 bg-red-50 rounded-lg">
              {error}
            </div>
          )}
          
          {success && (
            <div className="p-2 text-sm text-green-500 bg-green-50 rounded-lg">
              Profil mis à jour avec succès !
            </div>
          )}

          <DialogFooter className="pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="rounded-full border-pink text-pink hover:bg-pink/10"
            >
              Annuler
            </Button>
            <Button 
              type="submit" 
              variant="gradient" 
              className="rounded-full text-white"
              disabled={loading}
            >
              {loading ? 'Mise à jour...' : 'Enregistrer'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
