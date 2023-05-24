import React, { useRef, useState } from 'react';
import useAPI from '../functions/useAPI';
import AnimalDisplay from './AnimalDisplay';
import { useFavoritesContext } from '../context/FavoritesContext';
import { MenuItem, Select, Box, TextField } from '@mui/material';

function SearchPage() {
  const { isLoading, error, fetchData, result, isSuccess } = useAPI();


  const [petType, setPetType] = useState('dog');

  const {favorites, addFavorite, removeFavorite} = useFavoritesContext();
  
  const locationRef = useRef();

  const checkZipCode = (zip) => {
      const regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
      return regex.test(zip);
  }

  const searchPetHandler = (e) => {
    e.preventDefault();
    const location = locationRef.current.value;
    const locationValidity = checkZipCode(location);
    if ( location && locationValidity ) {
        fetchData(`https://api.petfinder.com/v2/animals?sort=distance&type=${petType}&location=${location}&distance=50`);
    }
  }

  return (
    <Box >
      <form style= {{ display: 'flex', flexDirection: 'row' }}>
          <TextField label='Please enter 6 digit US zip code' inputRef={locationRef} name='location' variant='filled' required />
          <Select value={petType} 
            onChange={(e) => setPetType(e.target.value)}>
              <MenuItem value='dog'>Dog</MenuItem>
              <MenuItem value='cat'>Cat</MenuItem>
              <MenuItem value='rabbit'>Rabbit</MenuItem>
              <MenuItem value='horse'>Horse</MenuItem>
              <MenuItem value='bird'>Bird</MenuItem>
              <MenuItem value='smallfurry'>Rodent</MenuItem>
              <MenuItem value='barnyard'>Barnyard</MenuItem>
              <MenuItem value='scalesfinsother'>Scales, Fins & Other</MenuItem>
            </Select>
          
          <button type='submit' onClick={searchPetHandler}>Search</button>
      </form>
      
      {isLoading && <p>Loading ...</p> }
      {error && <p>An error has occured: {error.message}</p> }
      {isSuccess &&
        (result.animals.map((val) => {
          let photos = null;
          // Check if photos property exists and has at least one item
          if (val.photos && val.photos.length > 0) {
              photos = <img style={{ width: '200px', height: '150px' }} src={val.photos[0].full} alt={val.name} />;
          }

          return (
            <AnimalDisplay 
              key={val.id}
              pet={petType}
              pet_id={val.id}
              url={val.url}
              primaryBreed={val.breeds.primary}
              secondaryBreed={val.breeds.secondary}
              name={val.name}
              image={photos}
              age={val.age}
              gender={val.gender}
              distance={val.distance}
              addFavorite={() => addFavorite({pet_id: val.id, url: val.url})}
              removeFavorite={removeFavorite}
              isFavorite={favorites.some((fav) => fav.id === val.id)} 
            />
          )
        })
      )}
    </Box>
  )
}

export default SearchPage;