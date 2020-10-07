import React, { createContext, useCallback } from "react";

import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { THEME_STORAGE_LABEL } from "../constants/config";
import usePersistedState from "../hooks/usePersistedState";
import DarkMode from "../styles/themes/dark";
import LightMode from "../styles/themes/light";

interface ThemeProps {
  title: string;
  colors: {
    common: {
      black: string;
      white: string;
    };
    primary: string;
    background: string;
    paper: string;
    title: string;
    subtitle: string;
    error: string;
  };
}

export interface ThemeContextProps {
  theme: ThemeProps | null;
  toggleTheme: (theme?: ThemeProps) => void;
}

type ThemeProviderOptions = {
  initialState?: ThemeProps;
};

const ThemeContext = createContext<ThemeContextProps>({
  theme: null,
  toggleTheme: () => {},
});

const ThemeProvider: React.FC<ThemeProviderOptions> = ({
  children,
  initialState = LightMode,
}) => {
  const [state, setState] = usePersistedState<ThemeProps>(
    THEME_STORAGE_LABEL,
    initialState,
  );

  const toggleTheme = useCallback((): void => {
    setState(state.title === "light" ? DarkMode : LightMode);
  }, [setState, state.title]);

  return (
    <ThemeContext.Provider value={{ theme: state, toggleTheme }}>
      <StyledThemeProvider theme={state}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };

export default ThemeContext;
