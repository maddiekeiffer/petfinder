import React from 'react';
import AnimalDisplay from './AnimalDisplay';
import { useFavoritesContext } from '../context/FavoritesContext';

function FavoritesPage() {
  const {favorites, removeFavorite} = useFavoritesContext();

  return (
    <div>
    <h2>Favorites:</h2>
    {favorites.map((val) => {
      return(
        <AnimalDisplay
          url={val.url}
          key={val.pet_id}
          pet={val.pet}
          pet_id={val.pet_id}
          image={val.image}
          name={val.name}
          //breeds={val.breeds}
          age={val.age}
          gender={val.gender}
          distance={val.distance}
          isFavorite={true}
          removeFavorite={removeFavorite}
          />
      );
    })}
    </div>
  )
}

export default FavoritesPage;