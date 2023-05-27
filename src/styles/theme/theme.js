import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            light: '#8336c3',
            main: '#6504b5',
            dark: '#8336c3',
            contrastText: '#fff'
        },
        secondary: {
            light: '#4dabf5',
            main: '#2196f3',
            dark: '#1769aa',
            contrastText: '#fff'
        },
       // error: '#d32f2f',
       // warning: '#ffb74d'
    }

});
export default theme;