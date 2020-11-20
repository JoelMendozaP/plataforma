import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import global_de from "./de/globalDe.json";
import global_en from "./en/globalEn.json";
import global_es from "./es/globalEs.json";
import global_fr from "./fr/globalFr.json";
import global_pt from "./pt/globalPt.json";

const resources = {
  de: global_de,
  en: global_en,
  es: global_es,
  fr: global_fr,
  pt: global_pt,
};
i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
