// Fonction pour mettre à jour le profil de l'utilisateur
export const updateUserProfile = async (userId, profileData) => {
    try {
      // Remplacez 'YOUR_API_ENDPOINT' par l'endpoint de votre API pour mettre à jour le profil de l'utilisateur
      const response = await fetch(`YOUR_API_ENDPOINT/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        }, // <--- Move this closing curly brace to this position
        body: JSON.stringify(profileData),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data; // Renvoie les données de mise à jour du profil
      } else {
        throw new Error('Erreur lors de la mise à jour du profil de l\'utilisateur');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil de l\'utilisateur:', error);
      throw error;
    }
  };
  