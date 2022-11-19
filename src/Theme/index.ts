import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
      light: "#c8e6c9",
      dark: "#1b5e20",
    },
    secondary: {
      main: "#009688",
      light: "#b2dfdb",
      dark: "#00695C",
    },
    error: {
      main: "#Ef5350",
      light: "#D32f2f",
      dark: "#C62828",
    },
    info: {
      main: "#03A9f4",
      light: "#0288D1",
      dark: "#01579B",
    },
  },
});

export default theme;
