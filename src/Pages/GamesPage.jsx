  import React, { useState, useEffect } from 'react';
import GameDetails from './GameDetails'; // Le composant GameDetails utilisé pour afficher les détails d'un jeu

const GamesPage = () => {
    
  // Exemple de données de jeux
  // eslint-disable-next-line no-unused-vars
  const [games, setGames] = useState([
    {
      id: 1,
      title: 'Mon super jeu 1',
      description: 'Un jeu passionnant à découvrir',
      category: 'Aventure',
      thumbnail: 'lien_vers_l_image_1.jpg',
    },
    {
      id: 2,
      title: 'Mon super jeu 2',
      description: 'Un autre jeu passionnant à découvrir',
      category: 'Action',
      thumbnail: 'lien_vers_l_image_2.jpg',
    },

  ]);

  useEffect(() => {
    // Exemple d'utilisation de l'API Twitch pour récupérer la liste des jeux en direct
    // Vous pouvez adapter cela à votre cas d'utilisation réel
    // fetchGamesFromAPI()
    //   .then(data => setGames(data))
    //   .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Liste des jeux</h2>
      <div style={gamesListStyle}>
        {games.map((game) => (
          <GameDetails
            key={game.id}
            title={game.title}
            description={game.description}
            category={game.category}
            thumbnail={game.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

const gamesListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
};

export default GamesPage;
