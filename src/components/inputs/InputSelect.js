import React from "react";
import { useTranslation } from "react-i18next";
import "./style/InputSelect.css";
function InputSelect(props) {
  const { t } = useTranslation("language");
  return (
    <div className="InputSelect">
      {props.children}
      <select value={props.value} onChange={props.onChange} name={props.name}>
        <option value="es">{t("esLanguage")}</option>
        <option value="en">{t("enLanguage")}</option>
        <option value="de">{t("deLanguage")}</option>
        <option value="fr">{t("frLanguage")}</option>
      </select>
    </div>
  );
}

export default InputSelect;
