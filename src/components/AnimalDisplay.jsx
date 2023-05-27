import React from 'react';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { CustomBox } from '../styles/elements/Box';
import { CustomButton } from '../styles/elements/Button';
import { H4, H5, H6 } from '../styles/elements/Headers';

const AnimalDisplay = ({ pet_id, name, image, primaryBreed, secondaryBreed, gender, age, distance, addFavorite, removeFavorite, isFavorite }) => {

    return ( //{pet} is type of pet
        <CustomBox> 
            <H4>{name}</H4>
            {image}
            <H5>{primaryBreed}
                {secondaryBreed != null && 
                    `, ${secondaryBreed}`
                }
            </H5>
            <H5>{gender} | {age} </H5>
            <H6>{distance} miles away</H6>

            {!isFavorite &&
            <CustomButton startIcon={<FavoriteBorderRoundedIcon />} onClick={() => addFavorite(pet_id)}>Add Favorite</CustomButton>}

            {isFavorite &&
            <CustomButton startIcon={<FavoriteRoundedIcon />} onClick={() => removeFavorite(pet_id)}>Remove Favorite</CustomButton>}
        </CustomBox>
      )
}

  


export default AnimalDisplay;