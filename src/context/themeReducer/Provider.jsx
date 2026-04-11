import { useReducer } from "react";
import ThemeReducerContext from "./context";

const initialState = {
  theme: "light",
};

function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}

function ThemeReducerProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const value = {
    theme: state.theme,
    toggleTheme,
  };

  return (
    <ThemeReducerContext.Provider value={value}>
      {children}
    </ThemeReducerContext.Provider>
  );
}

export default ThemeReducerProvider;