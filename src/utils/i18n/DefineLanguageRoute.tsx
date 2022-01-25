import { Outlet, useSearch } from "react-location";
import { defaultLanguage, isLanguage } from "./language";
import { LanguageProvider } from "./LanguageContext";

export const DefineLanguageRoute: React.VFC = () => {
  const { lang: rawLang } = useSearch<{
    Search: {
      lang: string;
    };
  }>();
  const lang = isLanguage(rawLang) ? rawLang : defaultLanguage;

  return (
    <LanguageProvider value={lang}>
      <Outlet />
    </LanguageProvider>
  );
};
