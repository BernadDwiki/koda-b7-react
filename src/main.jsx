import { StrictMode } from "react";

import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import "./globals.css";
import App from "./App";
import store from "./store/store";
import ThemeProvider from "./context/theme/Provider.jsx";
import ThemeReducerProvider from "./context/themeReducer/Provider.jsx";
import AuthProvider from "./context/auth/Provider";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <ThemeReducerProvider>
            <App />
          </ThemeReducerProvider>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  </StrictMode>,
);
