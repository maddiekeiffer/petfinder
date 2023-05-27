import { Box, styled } from "@mui/material";
import theme from "../themes/theme";

export const CustomBox = styled((props) => (
    <Box {...props} /> ))
    ({
        border: `5px solid ${theme.palette.secondary.light}`,
        backgroundColor: theme.palette.primary.main,
        margin: '3px',
        borderRadius: '5px',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        flex: 1
    });