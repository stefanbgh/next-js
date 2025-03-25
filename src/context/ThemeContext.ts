import { createContext } from "react";

type Theme = "dark" | "light";
const defaultTheme: Theme = "dark";

const ThemeContext = createContext<Theme>(defaultTheme);

export { defaultTheme, ThemeContext };
