import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from 'globalStyles/globalStyles.styled';
import { ThemeProvider } from "styled-components";
import { theme } from "./globalStyles/theme";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
       <GlobalStyle />
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
