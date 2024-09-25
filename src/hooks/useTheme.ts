import { ThemeType } from "@/types/declare";
import { useEffect, useState } from "react";

export const useTheme = (): [ThemeType, () => void] => {
  let prefersColorScheme = null;
  let localTheme = null;

  const [theme, setTheme] = useState<ThemeType>(
    localTheme || prefersColorScheme!
  );

  useEffect(() => {
    prefersColorScheme = window.matchMedia(`prefers-color-schema:dark`).matches
      ? "dark"
      : "light";
    localTheme = localStorage.getItem("theme") as ThemeType;
  }, []);

  const setMode = (mode: ThemeType) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  return [theme, themeToggler];
};
