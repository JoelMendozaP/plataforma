import React from "react";
import "./style/InformationPersonal.css";
import { useTranslation } from "react-i18next";
function InformationPersonal(props) {
  const { t } = useTranslation("account");
  return (
    <div className="InfPersonal">
      <h3>
        {t("Birthdate")}: {props.user.dateN}
      </h3>
      <h3>
        {t("gender")}: {props.user.gender}
      </h3>
      <h3>
        {t("address")}: {props.user.direction}
      </h3>
      <h3>
        {t("postalCode")}: {props.user.postalCode}
      </h3>
    </div>
  );
}

export default InformationPersonal;
