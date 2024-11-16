// theme.js
import { createTheme } from "@mui/material/styles";

const lightColors = {
  primary: "#A5A5A5", 
  background: "#FFFFFF", 
  paper: "#EDEDED",       
  text: "#000000"        
};

const darkColors = {
  primary: "#F57C00",    
  background: "#121212",  
  paper: "#333333",    
  text: "#FFFFFF"        
};

const createAppTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === "light" ? lightColors.primary : darkColors.primary,
    },
    background: {
      default: mode === "light" ? lightColors.background : darkColors.background,
      paper: mode === "light" ? lightColors.paper : darkColors.paper,
    },
    text: {
      primary: mode === "light" ? lightColors.text : darkColors.text,
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontFamily: "Inter, sans-serif",
    },
    h2: {
      fontFamily: "Inter, sans-serif",
    },
  },
});

export default createAppTheme;
