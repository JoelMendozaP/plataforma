import React from "react";
import Prueba from "../Prueba";
import "./Information.css";
import { useStateValue } from "../../services/context/store";
import { useTranslation } from "react-i18next";

function Information(props) {
  const [{ informationR }] = useStateValue();
  const { t } = useTranslation("infoT");

  const categoria = (
    <React.Fragment>
      <h2>{t("infCategories")}</h2>
      <Prueba />
    </React.Fragment>
  );
  return (
    <div className="itemInformation">
      {informationR ? informationR.information : categoria}
    </div>
  );
}

export default Information;
