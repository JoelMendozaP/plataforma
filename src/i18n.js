import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcomeToReact: "Welcome to React welcomeToReact",
      HelloEvery: "Welcome to React HelloEvery",
    },
  },
  zh: {
    translation: {
      welcomeToReact: "Welcome to React welcomeToReactzh",
      HelloEvery: "Welcome to React HelloEveryzh",
    },
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
