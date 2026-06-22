"use client";

import { useAppStore } from "@/lib/store/useAppStore";

export default function LanguageSwitcher() {
  const locale = useAppStore((state) => state.locale);
  const setLocale = useAppStore((state) => state.setLocale);

  return (
    <div className="inline-flex items-center p-0.5 rounded-full bg-white/5 border border-white/10 shadow-inner backdrop-blur-md">
      <button
        onClick={() => setLocale("pt")}
        className={`px-3 py-1.5 text-[10px] font-black rounded-full tracking-wider transition-all duration-300 cursor-pointer ${
          locale === "pt"
            ? "bg-white text-[#0f0f0f] shadow-md font-extrabold scale-105"
            : "text-gray-400 hover:text-white"
        }`}
        aria-label="Alterar idioma para Português"
      >
        PT
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-1.5 text-[10px] font-black rounded-full tracking-wider transition-all duration-300 cursor-pointer ${
          locale === "en"
            ? "bg-white text-[#0f0f0f] shadow-md font-extrabold scale-105"
            : "text-gray-400 hover:text-white"
        }`}
        aria-label="Switch language to English"
      >
        EN
      </button>
    </div>
  );
}
