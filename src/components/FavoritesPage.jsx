import React from 'react';
import AnimalDisplay from './AnimalDisplay';
import { useFavoritesContext } from '../context/FavoritesContext';

function FavoritesPage() {
  const {favorites, removeFavorite} = useFavoritesContext();

  return (
    <div>
    {favorites.map((val) => {
      
      return(
        <AnimalDisplay
          url={val.url}
          key={val.pet_id}
          pet={val.pet}
          pet_id={val.pet_id}
          image={val.image}
          name={val.name}
          primaryBreed={val.primaryBreed}
          secondaryBreed={val.secondaryBreed}
          age={val.age}
          gender={val.gender}
          distance={(val.distance).toFixed(1)}
          isFavorite={true}
          removeFavorite={removeFavorite}
          />
      );
    })}
    </div>
  )
}

export default FavoritesPage;