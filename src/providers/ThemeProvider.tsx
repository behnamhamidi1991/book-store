"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState, useEffect } from "react";

const ThemeProvider = ({ children }: any) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;