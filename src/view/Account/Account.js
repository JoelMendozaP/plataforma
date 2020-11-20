import "./Account.css";

import React, { useEffect } from "react";
import { Prueba } from "../../components/layout";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { changeInfo } from "../../store/actions";
import { NormalButton } from "../../components/buttons";
import {
  EditPerfil,
  Perfil,
  InformationPersonal,
  Preference,
  ChangePassword,
  ChangeImage,
} from "./Perfil";

const Account = (props) => {
  const { t } = useTranslation("account");

  useEffect(() => {
    props.changeInfo(<Prueba>Account</Prueba>);
  }, [props]);

  function toCallE() {
    document
      .getElementById("infor")
      .scrollIntoView({ block: "start", behavior: "smooth" });
    props.changeInfo(
      <React.Fragment>
        <ChangeImage />
        <EditPerfil />
      </React.Fragment>
    );
  }

  function toCall() {
    document
      .getElementById("infor")
      .scrollIntoView({ block: "start", behavior: "smooth" });
    props.changeInfo(<ChangePassword />);
  }

  return (
    <div className="Account">
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
        {/* <h4 className="Account__span">{t("personalInformation")}</h4> */}
        <div className="Account__info">
          <InformationPersonal />
        </div>
        <div className="Account__dataBtn">
          <NormalButton onClick={toCallE}>{t("acEdit")}</NormalButton>
        </div>
      </div>
      <h4 className="Account__span">{t("accountPreferences")}</h4>
      <Preference />
    </div>
  );
};

const mapDispatchToProps = {
  changeInfo,
};
export default connect(null, mapDispatchToProps)(Account);
