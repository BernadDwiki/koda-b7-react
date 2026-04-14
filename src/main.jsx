import { StrictMode } from "react";

import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import "./globals.css";
import App from "./App";
import store, { persistor } from "./store/store";
import ThemeProvider from "./context/theme/Provider.jsx";
import ThemeReducerProvider from "./context/themeReducer/Provider.jsx";
import AuthProvider from "./context/auth/Provider";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <ThemeProvider>
            <ThemeReducerProvider>
              <App />
            </ThemeReducerProvider>
          </ThemeProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
