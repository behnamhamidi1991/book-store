"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState(false);

  return <div className={theme ? "main dark" : "main light"}></div>;
}
