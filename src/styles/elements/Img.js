import { styled } from "@mui/material";
import theme from "../themes/theme";

export const CustomImg = styled((props) => (
    <img {...props} alt='' /> ))
    ({
        border: `3px solid ${theme.palette.secondary.light}`,
        borderRadius: '5px',
        height: '150px',
        width: '200px',
        margin: '5px',
        
    });