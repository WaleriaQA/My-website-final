import { useLayoutEffect, useState } from "react";

const THEME_KEY = "theme";

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_KEY) || "light";
  });

  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return {
    theme,
    isDarkTheme,
    toggleTheme,
    setTheme, // оставляем на будущее, вдруг понадобится
  };
};

export default useTheme;
