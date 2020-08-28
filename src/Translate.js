import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

function Translate() {
  const { t, i18n } = useTranslation();
  const [locale, setLocale] = useState("en");

  const handleChangeLocale = (lan) => {
    setLocale(lan);
    i18n.changeLanguage(lan);
  };

  return (
    <div>
      <h3>{t("HelloEvery")}</h3>
      <p>{t("welcomeToReact")}</p>
      <select
        value={locale}
        onChange={(e) => handleChangeLocale(e.target.value)}
      >
        <option value="en">Eng</option>
        <option value="zh">Chi</option>
      </select>
    </div>
  );
}

export default Translate;
