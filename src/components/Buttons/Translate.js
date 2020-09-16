import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./style/Translate.css";
function Translate() {
  const { i18n } = useTranslation();
  const { t } = useTranslation("language");
  const [locale, setLocale] = useState("es");

  const handleChangeLocale = (lan) => {
    setLocale(lan);
    i18n.changeLanguage(lan);
  };

  return (
    <div className="selectTranslate">
      <select
        value={locale}
        onChange={(e) => handleChangeLocale(e.target.value)}
      >
        <option value="es">{t("esLanguage")}</option>
        <option value="en">{t("enLanguage")}</option>
        <option value="de">{t("deLanguage")}</option>
        <option value="fr">{t("frLanguage")}</option>
      </select>
    </div>
  );
}

export default Translate;
