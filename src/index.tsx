import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {createRoot} from 'react-dom/client';
import App from "app/App";
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n/';


const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
