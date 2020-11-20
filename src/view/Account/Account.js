import "./Account.css";

<<<<<<< HEAD
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
=======
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
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5

  function toCallE() {
    document
      .getElementById("infor")
      .scrollIntoView({ block: "start", behavior: "smooth" });
<<<<<<< HEAD
    dispatch({
      type: "CHANGE_INFO",
      data: (
        <React.Fragment>
          <ChangeImage />
          <EditPerfil />
        </React.Fragment>
      ),
    });
=======
    props.changeInfo(
      <React.Fragment>
        <ChangeImage />
        <EditPerfil />
      </React.Fragment>
    );
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5
  }

  function toCall() {
    document
      .getElementById("infor")
      .scrollIntoView({ block: "start", behavior: "smooth" });
<<<<<<< HEAD
    dispatch({
      type: "CHANGE_INFO",
      data: <ChangePassword />,
    });
  }

  return (
    <React.Fragment>
=======
    props.changeInfo(<ChangePassword />);
  }

  return (
    <div className="Account">
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5
