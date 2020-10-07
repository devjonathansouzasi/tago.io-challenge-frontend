import React from "react";

import { ThemeProvider } from "./contexts/ThemeContext";
import { TodoProvider } from "./contexts/TodoContext";
import MainPage from "./pages/Main";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <TodoProvider>
        <MainPage />
      </TodoProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
