"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.documentElement.classList.toggle("light", savedTheme === "light");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    document.documentElement.classList.toggle("light", nextTheme === "light");
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.dispatchEvent(new CustomEvent("theme-change", { detail: { theme: nextTheme } }));
  };

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-xl border border-slate-700/40 bg-slate-900/30 ${className}`} />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative h-9 px-3 rounded-xl border border-slate-700/50 hover:border-cyan-400/60 bg-slate-900/50 [data-theme="light"]:bg-white [data-theme="light"]:border-slate-300 [data-theme="light"]:text-slate-800 transition-all flex items-center gap-2 text-xs font-mono shadow-sm hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] ${className}`}
      title={`Switch to ${theme === "dark" ? "White / Light" : "Dark"} Theme`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <>
          <Sun className="h-4 w-4 text-amber-400 animate-pulse" />
          <span className="hidden lg:inline text-[10px] uppercase font-semibold text-slate-300">LIGHT</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 text-cyan-600" />
          <span className="hidden lg:inline text-[10px] uppercase font-semibold text-slate-700">DARK</span>
        </>
      )}
    </button>
  );
}
