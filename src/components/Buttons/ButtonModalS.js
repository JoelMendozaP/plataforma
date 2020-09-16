import React from "react";
import GetIn from "../GetIn/GetIn";
import "./style/ButtonModalS.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function ButtonModalS(props) {
  const { t } = useTranslation("header");
  return (
    <React.Fragment>
      <Link
        to="/auth/login"
        onClick={props.onCloseModal}
        className="ButtonModalS"
      >
        <span className="ButtonModalS__text">{t("enterHead")}</span>
        <i className="fas fa-user-circle"></i>
      </Link>
      <GetIn isOpen={props.modalIsOpen} onClose={props.onCloseModal} />
    </React.Fragment>
  );
}
export default ButtonModalS;
