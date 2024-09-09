"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed responsiveThemeSwitch top-6 right-10 dark:bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <BsSun className="text-black"/> : <BsMoon className="text-white" />}
    </button>
  );
}
