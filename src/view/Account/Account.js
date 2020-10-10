import "./Account.css";

import { useStateValue } from "../../services/context/store";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";

// import EditPerfil from "../../components/Perfil/EditPerfil";
import Perfil from "../../components/Perfil/Perfil";
import Prueba from "../../components/Information/Prueba";
import InformationPersonal from "../../components/Perfil/InformationPersonal";
import Preference from "../../components/Perfil/Preference";
import ChangePassword from "../../components/Perfil/ChangePassword";

function Account(props) {
  const { t } = useTranslation("account");
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const [usuario, setUsuario] = useState({
    username: `${sesionUsuario ? validar(sesionUsuario.usuario.username) : ""}`,
    name: `${sesionUsuario ? validar(sesionUsuario.usuario.name) : ""}`,
    lastname: `${sesionUsuario ? validar(sesionUsuario.usuario.lastname) : ""}`,
    email: `${sesionUsuario ? validar(sesionUsuario.usuario.email) : ""}`,
    phone: `${sesionUsuario ? validar(sesionUsuario.usuario.phone) : ""}`,
    dateN: `${sesionUsuario ? validar(sesionUsuario.usuario.dateN) : ""}`,
    gender: `${sesionUsuario ? validar(sesionUsuario.usuario.gender) : ""}`,
    photoUrl: `${sesionUsuario ? validar(sesionUsuario.usuario.photoUrl) : ""}`,
    direction: `${
      sesionUsuario ? validar(sesionUsuario.usuario.direction) : ""
    }`,
    postalCode: `${
      sesionUsuario ? validar(sesionUsuario.usuario.postalCode) : ""
    }`,
  });
  useEffect(() => {
    dispatch({
      type: "CHANGE_INFO",
      data: <Prueba>Account</Prueba>,
    });
  }, [dispatch]);

  function validar(text) {
    if (text === undefined || text === null) {
      return "";
    }
    return text;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };

  // function toCallE() {
  //   dispatch({
  //     data: <EditPerfil user={usuario} handleChange={handleChange} />,
  //   });
  // }
  function toCall() {
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
          {t("acEdit")}
        </button>
      </div>
      <div className="Account__perfil">
        <Perfil user={usuario} />
      </div>
      {t("personalInformation")}
      <div className="Account__data">
        <InformationPersonal user={usuario} />
      </div>
      {t("accountPreferences")}
      <Preference />
    </React.Fragment>
  );
}

export default Account;
