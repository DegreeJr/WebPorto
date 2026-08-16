"use client";
import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0d0d0f]/80 backdrop-blur-md border-b border-stone-200 dark:border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => go("home")}
          className="font-mono font-semibold text-stone-900 dark:text-white tracking-tight hover:text-blue-500 transition-colors"
        >
          <span className="text-blue-500">&gt;_</span> razandradjat
        </button>

        <div className="hidden md:flex items-center gap-7">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className={`text-sm transition-colors ${
                active === s.id
                  ? "text-blue-500 font-medium"
                  : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
              }`}
            >
              {s.label}
            </button>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            className="text-stone-800 dark:text-white text-2xl leading-none"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-3 mx-6 rounded-xl bg-white dark:bg-[#141416] border border-stone-200 dark:border-white/10 shadow-sm flex flex-col p-2">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className={`text-left px-4 py-2 text-sm rounded-lg ${
                active === s.id
                  ? "text-blue-500 bg-blue-50 dark:bg-white/5"
                  : "text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-white/5"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
