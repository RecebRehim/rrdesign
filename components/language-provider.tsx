"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { content, type Copy, type Lang } from "@/lib/content";

type LanguageContextValue = {
  lang: Lang;
  copy: Copy;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("az");

  useEffect(() => {
    const stored = window.localStorage.getItem("rr-lang");
    if (stored === "az" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("rr-lang", lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
  }, []);

  const value = useMemo(
    () => ({
      lang,
      copy: content[lang],
      setLang,
    }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
