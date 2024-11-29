import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./locale/en";
import cz from "./locale/cz";
import ua from "./locale/ua";

const defaultFallback = "ua";
const defaultTranslationNamespace = "translation";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    defaultNS: defaultTranslationNamespace,
    fallbackLng: defaultFallback,
    resources: {
      en: {
        translation: en,
      },
      // cz: {
      //   translation: cz,
      // },
      ua: {
        translation: ua,
      },
    },
    react: {
      useSuspense: true,
    },
  });

export default i18next;
