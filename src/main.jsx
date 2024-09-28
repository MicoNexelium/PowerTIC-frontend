import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom';


import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';


const themeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#69B2A6',
    },
    secondary: {
      main: '#F2A007',
    },
    background: {
      default: '#111A2B',
      paper: '#1E2940',
    },
  },
};

// Create a theme with both light and dark modes
const theme = createTheme({
  palette: {
    mode: 'light', // Default light mode
    primary: {
      main: '#69B2A6',
    },
    secondary: {
      main: '#F2A007',
    },
    background: {
      default: '#eef2f6',
      paper: '#ffffff',
    },
  },
  colorSchemes: {
    dark: {
      palette: themeOptions.palette,
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);