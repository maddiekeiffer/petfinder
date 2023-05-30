import React, { useRef, useState } from 'react';
import useAPI from '../functions/useAPI';
import AnimalDisplay from './AnimalDisplay';
import { useFavoritesContext } from '../context/FavoritesContext';
import { Box, TextField, Select, MenuItem } from '@mui/material';
import YoutubeSearchedForRoundedIcon from '@mui/icons-material/YoutubeSearchedForRounded';
import CircularProgress from '@mui/material/CircularProgress';
import { CustomImg } from '../styles/elements/Img';
import { CustomButton } from '../styles/elements/Button';

function SearchPage() {
  const { isLoading, error, fetchData, result, isSuccess } = useAPI();

  const [petType, setPetType] = useState('dog');

  const [distance, setDistance] = useState('50');

  const [sortResults, setSortResults] = useState('distance');

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
        fetchData(`https://api.petfinder.com/v2/animals?sort=${sortResults}&type=${petType}&location=${location}&distance=${distance}`);
    }
  }

  return (
    <Box >
      <form style= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '7px' }}>
          <TextField style={{ borderRadius: '5px' }}label='Enter 6 digit US zip code' inputRef={locationRef} name='location'  required />
          <Select style={{ flex: 1}} value={petType} 
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

            <Select style={{ flex: 1}} value={distance} 
            onChange={(e) => setDistance(e.target.value)}>
              <MenuItem value='50'>50 miles</MenuItem>
              <MenuItem value='100'>100 miles</MenuItem>
              <MenuItem value='150'>150 miles</MenuItem>
              <MenuItem value='200'>200 miles</MenuItem>
              <MenuItem value='250'>250 miles</MenuItem>
              <MenuItem value='300'>300 miles</MenuItem>
              <MenuItem value='350'>350 miles</MenuItem>
              <MenuItem value='400'>400 miles</MenuItem>
              <MenuItem value='450'>450 miles</MenuItem>
              <MenuItem value='500'>500 miles</MenuItem>
            </Select>
          
            <Select style={{ flex: 1}} value={sortResults} 
            onChange={(e) => setSortResults(e.target.value)}>
              <MenuItem value='distance'>Nearest</MenuItem>
              <MenuItem value='-distance'>Furthest</MenuItem>
              <MenuItem value='recent'>Newest Addition</MenuItem>
              <MenuItem value='-recent'>Oldest Addition</MenuItem>
              <MenuItem value='random'>Randomize</MenuItem>
            </Select>
          
          <CustomButton type='submit' endIcon={ <YoutubeSearchedForRoundedIcon /> } onClick={searchPetHandler}>Search</CustomButton>
      </form>

      
      {isLoading && 
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box> }
      {error && <p>An error has occured: {error.message}</p> }

      <div style={{display: 'flex', width: '100%', flexWrap: 'wrap'}}>

      {isSuccess &&
        (result.animals.map((val) => {
          let photos = null;
          // Check if photos property exists and has at least one item
          if (val.photos && val.photos.length > 0) {
              photos = <CustomImg src={val.photos[0].full} alt={val.name} />;
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
                addFavorite={() => addFavorite(
                  {key: val.pet_id,
                  pet: petType,
                  pet_id: val.id,
                  url: val.url,
                  primaryBreed: val.breeds.primary,
                  secondaryBreed: val.breeds.secondary,
                  name: val.name,
                  image: photos,
                  age: val.age,
                  gender: val.gender,
                  distance: val.distance})}
                removeFavorite={removeFavorite}
                isFavorite={favorites.some((fav) => fav.pet_id === val.id)} 
              />
          )
        })
      )}
    </div>
  </Box>
  )
}

export default SearchPage;