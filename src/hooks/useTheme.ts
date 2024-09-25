import { ThemeType } from "@/types/declare";
import { useState } from "react";

export const useTheme = (): [ThemeType, () => void] => {
  const prefersColorScheme = window.matchMedia(`prefers-color-schema:dark`)
    .matches
    ? "dark"
    : "light";
  const localTheme = localStorage.getItem("theme") as ThemeType;
  const initialTheme = localTheme || prefersColorScheme;
  const [theme, setTheme] = useState<ThemeType>(initialTheme);

  const setMode = (mode: ThemeType) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  return [theme, themeToggler];
};
