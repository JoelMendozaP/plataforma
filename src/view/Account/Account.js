import "./Account.css";

import { useStateValue } from "../../services/context/store";
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";

import EditPerfil from "../../components/Perfil/EditPerfil";
import Perfil from "../../components/Perfil/Perfil";
import Prueba from "../../components/Information/Prueba";
import InformationPersonal from "../../components/Perfil/InformationPersonal";
import Preference from "../../components/Perfil/Preference";
import ChangePassword from "../../components/Perfil/ChangePassword";
import ChangeImage from "../../components/Perfil/ChangeImage";

function Account(props) {
  const { t } = useTranslation("account");
  const [{ sesionUsuario }, dispatch] = useStateValue();
  useEffect(() => {
    dispatch({
      type: "CHANGE_INFO",
      data: <Prueba>Account</Prueba>,
    });
  }, [dispatch, sesionUsuario]);

  function toCallE() {
    document
      .getElementById("infor")
      .scrollIntoView({ block: "start", behavior: "smooth" });
    dispatch({
      type: "CHANGE_INFO",
      data: (
        <React.Fragment>
          <ChangeImage />
          <EditPerfil />
        </React.Fragment>
      ),
    });
  }

  function toCall() {
    document
      .getElementById("infor")
      .scrollIntoView({ block: "start", behavior: "smooth" });
    dispatch({
      type: "CHANGE_INFO",
      data: <ChangePassword />,
    });
  }

  return (
    <React.Fragment>
      <div className="Account__title">
        <span className="Account__titleSpn">{t("acPerfil")}</span>
        <button className="Account__titleBtn" onClick={toCall}>
          {t("changePassword")}
        </button>
      </div>
      <div className="Account__data">
        <div className="Account__perfil">
          <Perfil />
        </div>
        <h4 className="Account__span">{t("personalInformation")}</h4>
        <div className="Account__info">
          <InformationPersonal />
        </div>
        <button className="Account__dataBtn" onClick={toCallE}>
          {t("acEdit")}
        </button>
      </div>
      <h4 className="Account__span">{t("accountPreferences")}</h4>
      <Preference />
    </React.Fragment>
  );
}

export default Account;
