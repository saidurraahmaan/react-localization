import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationBD from "./locales/bd/translation.json";
import translationEN from "./locales/en/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  bd: {
    translation: translationBD,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  debug: true,
});

export default i18n;
