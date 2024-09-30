import { createTheme } from "@mui/material/styles";

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
      default: "#fff",
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
