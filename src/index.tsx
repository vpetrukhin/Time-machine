import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App/App';
import {ThemeProvider} from "@mui/material";
import {theme} from "./styles/theme";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <ThemeProvider theme={theme}>
                  <App />
              </ThemeProvider>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

