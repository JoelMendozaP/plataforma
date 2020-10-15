import React from "react";
import "./style/InformationPersonal.css";
import { useTranslation } from "react-i18next";
import { useStateValue } from "../../services/context/store";
function InformationPersonal(props) {
  const [{ sesionUsuario }] = useStateValue();
  const { t } = useTranslation("account");
  function validar(text) {
    if (text === undefined || text === null) {
      return "";
    }
    return text;
  }
  return (
    <div className="">
      <h3>
        {t("Birthdate")}:{" "}
        {sesionUsuario ? validar(sesionUsuario.usuario.age) : ""}
      </h3>
      <h3>
        {t("gender")}:{" "}
        {sesionUsuario ? validar(sesionUsuario.usuario.gender) : ""}
      </h3>
      <h3>
        {t("address")}:{" "}
        {sesionUsuario ? validar(sesionUsuario.usuario.Address) : ""}
      </h3>
      <h3>
        {t("postalCode")}:{" "}
        {sesionUsuario ? validar(sesionUsuario.usuario.postalCode) : "0000"}
      </h3>
    </div>
  );
}

export default InformationPersonal;
