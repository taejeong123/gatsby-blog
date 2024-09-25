import { ThemeType } from "@/types/declare";
import { useEffect, useState } from "react";

export const useTheme = (): [ThemeType, () => void] => {
  const getInitialTheme = (): ThemeType => {
    if (typeof window === "undefined") return "light";
    const localTheme = localStorage.getItem("theme") as ThemeType;
    const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    return localTheme || prefersColorScheme;
  };

  const [theme, setTheme] = useState<ThemeType>(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeToggler = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return [theme, themeToggler];
};
