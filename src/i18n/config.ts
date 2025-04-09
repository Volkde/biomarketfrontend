import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./locales/en/translation.json";
import translationRu from "./locales/ru/translation.json";

i18next.use(initReactI18next).init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      translationEn
    },
    ru: {
      translationRu
    }
  }
});
