const languages = ["en", "ja"] as const;

export type Language = typeof languages[number];

export const defaultLanguage: Language = "en";

export function isLanguage(l: unknown): l is Language {
  return (languages as readonly unknown[]).includes(l);
}
