import { createTheme } from "@mui/material/styles";
const Avenir = require("../assets/fonts/AvenirRoman.otf");

const GlamBySamTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 24,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginTop: 16,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "white",
          padding: 12,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `@font-face {
                    font-family: 'Avenir';
                    font-style: normal;
                    scr: local(AvenirRoman), url(${Avenir}) format('otf');
                }`,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          padding: "12px 20px 12px 20px",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#FFD662",
    },
    background: {
      default: "#363636",
    },
    error: {
      main: "#F44336",
    },
  },
  spacing: [8, 12, 16, 24, 32, 48, 64, 96],
});

export default GlamBySamTheme;
