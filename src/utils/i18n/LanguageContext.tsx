import { createContext, useContext } from "react";
import { defaultLanguage, Language } from "./language";

const LanguageContext = createContext<Language>(defaultLanguage);

export const LanguageProvider = LanguageContext.Provider;

export function useI18n<T>(values: {
  [K in Language]: T;
}): T {
  const language = useContext(LanguageContext);
  return values[language];
}
