import { styled } from '@mui/material/styles';
import theme from '../themes/theme';
import { Tab, Tabs } from '@mui/material'

export const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({
      marginRight: '5px',
      color: theme.palette.secondary.main,
      '&.Mui-selected': {
        color: theme.palette.primary.contrastText,
      },
    }),
  );
export const StyledTabs = styled((props) => (
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
          backgroundColor: theme.palette.primary.contrastText,
        },
  });
