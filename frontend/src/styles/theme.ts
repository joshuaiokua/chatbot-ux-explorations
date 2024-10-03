/**
 * Application Theme
 * TODO: Programmatic ability to add custom named colors.
 */

import { createTheme } from "@mui/material/styles";

// Augment the palette to include an ochre color
declare module '@mui/material/styles' {
  interface Palette {
    charcoal: Palette['primary'];
    lightGray: Palette['primary'];
    gray: Palette['primary'];
  }

  interface PaletteOptions {
    charcoal?: PaletteOptions['primary'];
    lightGray?: PaletteOptions['primary'];
    gray?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    common: {
        black: "#333",
        white: "#fff",
    },
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#ffffff",
    },
    charcoal: {
      main: "#333333",
      light: "#4F4F4F",
    },
    lightGray: {
      main: "#f2f2f2",
    },
    gray: {
      main: "#E5E5E5",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h3: {
      fontWeight: 700,
    },
  },
  components: {
    // BUTTON //
    MuiButton: {
      defaultProps: {
        disableElevation: true, // Removes shadow
      },
      styleOverrides: {
        root: {
          height: 40,
          textTransform: "none",
        },
      },
    },
  },
});



export default theme;
