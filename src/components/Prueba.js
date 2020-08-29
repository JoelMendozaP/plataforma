import React from "react";
import { useTranslation } from "react-i18next";

function Prueba() {
  const { t } = useTranslation("info");
  return (
    <div>
      Prueba
      <h3>{t("HelloEvery")}</h3>
      <p>{t("welcomeToReact")}</p>
    </div>
  );
}

export default Prueba;
