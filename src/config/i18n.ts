import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    },
    react: {
      useSuspense: true
    }
  });

export default i18n;
