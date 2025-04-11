import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationDE from "./locales/de/translation.json";
import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: true,
  resources: {
    en: { translation: translationEN },
    ru: { translation: translationRU },
    de: { translation: translationDE }
  }
});

export default i18next;
