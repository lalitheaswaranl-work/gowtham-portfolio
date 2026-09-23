"use client";

import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full neu-pill flex items-center justify-center opacity-0" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative w-11 h-11 rounded-full neu-btn flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-amber-400 animate-spin-slow transition-transform hover:scale-110" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600 transition-transform hover:scale-110" />
      )}
    </button>
  );
}
