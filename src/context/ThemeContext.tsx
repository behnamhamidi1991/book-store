"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: "",
  toggle: () => {},
});

// LOCAL STORAGE | TOGGLE
const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  //   localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme ?? "light");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
