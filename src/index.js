import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import createAppTheme from './theme';
import { ThemeProvider, CssBaseline } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';

const RootComponent = () => {
  const [mode, setMode] = useState("light"); 

  const toggleTheme = () => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = createAppTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App toggleTheme={toggleTheme} mode={mode} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
