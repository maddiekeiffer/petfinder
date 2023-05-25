import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Tabs, Tab } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { styled } from '@mui/material/styles';
import { useUserContext } from '../context/UserContext';
import { useSearchContext } from '../context/SearchContext';
import { useFavoritesContext } from '../context/FavoritesContext';

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({
    marginRight: '5px',
    color: 'rgba(64, 64, 64, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
  }),
);
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
      />
    ))({
      '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginBottom: '5px',
      },
      '& .MuiTabs-indicatorSpan': {
        width: '100%',
        backgroundColor: '#fff',
      },
});

function Menu() {
  const { clearUser } = useUserContext();
  const { clearFavorites } = useFavoritesContext();
  const { clearSearchResults } = useSearchContext();

  const location = useLocation();
  let value;

  switch (location.pathname) {
    case '/login':
        value = 'login';
        break;
    case '/search':
        value = 'search';
        break;
    case '/favorites':
        value = 'favorites';
        break;
    default:
        value = false;
        break;
  }

    
  return (
    <Box sx={{ width: '100%', bgcolor: 'rgba(153, 51, 255, 0.7)'}}>
        <StyledTabs value={value} centered>
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
        </StyledTabs>
    </Box> 
  )
}

export default Menu;