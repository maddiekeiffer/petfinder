import { React }from 'react';
import { Box } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useUserContext } from '../context/UserContext';
import { useSearchContext } from '../context/SearchContext';
import { useFavoritesContext } from '../context/FavoritesContext';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { StyledTab, StyledTabs } from '../styles/elements/StyledTabs';
import theme from '../styles/themes/theme';


function Menu() {
    const { clearUser } = useUserContext();
    const { clearFavorites } = useFavoritesContext();
    const { clearSearchResults } = useSearchContext();

    const location = useLocation();
    let value;

    switch (location.pathname) {
        case '/login':
            value = '/login';
            break;
        case '/search':
            value = '/search';
            break;
        case '/favorites':
            value = '/favorites';
            break;
        default:
            value = null;
            break;
    }

    const handleLogout = () => {
        clearUser();
        clearFavorites();
        clearSearchResults();
      };

    

return (
  <Box sx={{ width: '100%', bgcolor: theme.palette.primary.main}}>
      <StyledTabs value={value || false} centered>
          <StyledTab component={Link} to="/login" icon={<LogoutRoundedIcon />} value='/login' label='Logout' onClick={handleLogout} />
          <StyledTab component={Link} to="/search" icon={<SearchRoundedIcon />} value='/search' label='Search' />
          <StyledTab component={Link} to="/favorites" icon={<FavoriteRoundedIcon />} value='/favorites' label='Favorites' />
      </StyledTabs>
  </Box> 
)
}

export default Menu;