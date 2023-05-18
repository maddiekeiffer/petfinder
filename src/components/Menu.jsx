import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { styled } from '@mui/material/styles';
import { useUserContext } from '../context/UserContext';
import { useSearchContext } from '../context/SearchContext';
import { useFavoritesContext } from '../context/FavoritesContext';

function Menu() {
    const { clearUser } = useUserContext();
    const { clearFavorites } = useFavoritesContext();
    const { clearSearchResults } = useSearchContext();

    const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
        ({ theme }) => ({
          textTransform: 'none',
          fontWeight: theme.typography.fontWeightRegular,
          fontSize: theme.typography.pxToRem(15),
          marginRight: theme.spacing(1),
          color: 'rgba(64, 64, 64, 0.7)',
        }),
      );
  return (
    <Box sx={{ width: '100%', bgcolor: 'rgba(153, 51, 255, 0.7)'}}>
        <Tabs value='login' centered>
            <StyledTab icon={<LogoutRoundedIcon />} value='login' label='Logout' href='/login' 
            onClick={() => {
            clearUser();
            clearFavorites();
            clearSearchResults();
            }}  
            />
            <StyledTab icon={<SearchRoundedIcon />}
            value='search' label='Search' href='/search' />
            <StyledTab icon={<FavoriteRoundedIcon />}
            value='favorites' label='Favorites' href='/favorites' />
        </Tabs>
    </Box> 
  )
}

export default Menu;