import React from 'react';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { Box } from '@mui/material';

const AnimalDisplay = ({ pet_id, name, image, primaryBreed, secondaryBreed, gender, age, distance, addFavorite, removeFavorite, isFavorite }) => {

    return ( //{pet} is type of pet
        <Box> 
            <h4>{name}</h4>
            {image}
            <h5>{primaryBreed}
                {secondaryBreed != null && 
                    `, ${secondaryBreed}`
                }
            </h5>
            <h5>{gender} | {age} </h5>
            <h6>{distance} miles away</h6>

            {!isFavorite &&
            <button startIcon={<FavoriteBorderRoundedIcon />} onClick={() => addFavorite(pet_id)}>Add Favorite</button>}

            {isFavorite &&
            <button startIcon={<FavoriteRoundedIcon />} onClick={() => removeFavorite(pet_id)}>Remove Favorite</button>}
        </Box>
      )
}

  


export default AnimalDisplay;