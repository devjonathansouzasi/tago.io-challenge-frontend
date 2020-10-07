import { useContext } from "react";

import ThemeContext, { ThemeContextProps } from "../contexts/ThemeContext";

export default function useTheme(): ThemeContextProps {
  const ctx = useContext<ThemeContextProps>(ThemeContext);
  return ctx;
}
