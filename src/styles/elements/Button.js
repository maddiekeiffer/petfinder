import { Button, styled } from "@mui/material";
import theme from "../themes/theme";

export const CustomButton = styled((props) => (
    <Button {...props} /> ))
    ({
        border: `2px solid ${theme.palette.primary.dark}`,
        borderRadius: '5px',
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.primary.dark,
        flex: 1,
    });