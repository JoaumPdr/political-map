"use client";

import { ReactNode, useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import { useAppStore } from "@/lib/store/useAppStore";
import enMessages from "@/messages/en.json";
import ptMessages from "@/messages/pt.json";

const messagesMap = {
  en: enMessages,
  pt: ptMessages,
};

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const locale = useAppStore((state) => state.locale);
  const setLocale = useAppStore((state) => state.setLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Sincroniza o locale inicial com localStorage se disponível no cliente
    if (typeof window !== "undefined") {
      const savedLocale = localStorage.getItem("political-atlas-locale");
      if (savedLocale === "en" || savedLocale === "pt") {
        setLocale(savedLocale as "en" | "pt");
      } else {
        // Fallback para a linguagem do navegador se começar com 'pt'
        const browserLang = navigator.language || "";
        const defaultLocale = browserLang.startsWith("pt") ? "pt" : "en";
        setLocale(defaultLocale);
      }
    }
    setMounted(true);
  }, [setLocale]);

  // Se ainda não montou, usamos o locale padrão (pt) para evitar incompatibilidade na hidratação SSR
  const activeLocale = mounted ? locale : "pt";
  const messages = messagesMap[activeLocale];

  return (
    <NextIntlClientProvider locale={activeLocale} messages={messages} timeZone="America/Sao_Paulo">
      {children}
    </NextIntlClientProvider>
  );
}
