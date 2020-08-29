import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Translate() {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState("es");

  const handleChangeLocale = (lan) => {
    setLocale(lan);
    i18n.changeLanguage(lan);
  };

  return (
    <div>
      <select
        value={locale}
        onChange={(e) => handleChangeLocale(e.target.value)}
      >
        <option value="es">Español</option>
        <option value="en">Ingles</option>
        <option value="de">Aleman</option>
        <option value="fr">frances</option>
      </select>
    </div>
  );
}

export default Translate;
