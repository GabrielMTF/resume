"use client";

import { useRef } from "react";
import { THEME_STORAGE_KEY, themeColors, type Theme } from "@/lib/theme";

const THEME_TRANSITION_MS = 700;

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", themeColors[theme]);
}

export function ThemeToggle() {
  const timer = useRef(0);

  function toggle() {
    const root = document.documentElement;
    const current = root.dataset.theme === "light" ? "light" : "dark";
    const next: Theme = current === "light" ? "dark" : "light";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reduce) {
      root.classList.add("theme-transition");
      void root.offsetWidth;
    }

    applyTheme(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);

    if (!reduce) {
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        root.classList.remove("theme-transition");
      }, THEME_TRANSITION_MS);
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="inline-flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-foreground/5 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      <span className="grid size-4 place-items-center">
        <SunIcon className="col-start-1 row-start-1 size-4 scale-90 opacity-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] [[data-theme=light]_&]:scale-100 [[data-theme=light]_&]:opacity-100 motion-reduce:transition-none" />
        <MoonIcon className="col-start-1 row-start-1 size-4 scale-100 opacity-100 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] [[data-theme=light]_&]:scale-90 [[data-theme=light]_&]:opacity-0 motion-reduce:transition-none" />
      </span>
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v1.5M12 19.5V21M4.9 4.9l1.1 1.1M18 18l1.1 1.1M3 12h1.5M19.5 12H21M4.9 19.1 6 18M18 6l1.1-1.1" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5Z" />
    </svg>
  );
}
