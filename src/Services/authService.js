import authService from '../Services/auth'; 
// Remplacez 'path/to/authService' par le chemin correct vers le service d'authentification

// Fonction pour effectuer la connexion de l'utilisateur
const login = async (username, password) => {
  try {
    // Appel à l'API pour vérifier les informations d'identification de l'utilisateur
    const response = await fetch('https://id.twitch.tv/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();

      localStorage.setItem('accessToken', data.accessToken);
      authService.setAxiosToken(); // Appeler setAxiosToken après avoir défini l'accessToken
      return true; // Connexion réussie
    } else {
      return false; // Connexion échouée
    }
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    return false; // Connexion échouée
  }
};

// Fonction pour effectuer la déconnexion de l'utilisateur
const logout = () => {
  // Supprimer les informations d'authentification du stockage local
  localStorage.removeItem('accessToken');
};

// Fonction pour vérifier si l'utilisateur est actuellement connecté
const isAuthenticated = () => {
  // Vérifier si l'accessToken est présent dans le stockage local
  const accessToken = localStorage.getItem('accessToken');
  return accessToken !== null;
};

export { isAuthenticated, login, logout };
