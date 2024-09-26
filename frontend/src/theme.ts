import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    common: {
        black: "#000",
        white: "#fff",
    },
    primary: {
      main: "#1976d2", // You can change this to any color you prefer
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#333",
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
