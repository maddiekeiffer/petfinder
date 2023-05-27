import { ThemeProvider as ThemeWrapper } from "@mui/material";
import theme from './theme';

export const ThemeProvider = (props) => {
    return <ThemeWrapper theme={theme}>{props.children}</ThemeWrapper>
}