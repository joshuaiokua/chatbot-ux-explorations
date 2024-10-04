/**
 * Application Theme
 */

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme extends Record<string, any> {}
  interface ThemeOptions extends Record<string, any> {}
  interface Palette extends Record<string, any> {}
  interface PaletteOptions extends Record<string, any> {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    boxed: true;
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    common: {
      black: "#333333",
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
          padding: "auto 24px",
          variants: [
            {
              props: { variant: "boxed" },
              style: {
                borderRadius: 0,
                border: "1px solid",
                borderColor: "#333333",
                color: "#333333",
              },
            },
          ],
        },
      },
    },
  },
  props: {
    textGradientProps: {
      background: "-webkit-linear-gradient(45deg, #7400b8 30%, #80ffdb 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },
});

export default theme;
