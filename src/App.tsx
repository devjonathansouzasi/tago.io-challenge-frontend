import React from "react";

import { ThemeProvider } from "./contexts/ThemeContext";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <strong>Challenge Tago.io</strong>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
