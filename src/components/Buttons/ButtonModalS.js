import React from "react";
import GetIn from "../GetIn/GetIn";
import "./style/ButtonModalS.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useStateValue } from "../../services/context/store";
function ButtonModalS(props) {
  const { t } = useTranslation("header");
  const [{ sesionUsuario }, dispatch] = useStateValue();

  function cerrar() {
    console.log("cerrar sesion");
    dispatch({
      type: "SALIR_SESION",
      nuevoUsuario: {
        id: "",
        username: "",
        name: "",
        lastname: "",
        email: "",
        phone: "",
        dateN: "",
        gender: "",
        direction: "",
        postalCode: "",
        foto: "",
      },
      autenticado: false,
    });
    localStorage.removeItem("token_seguridad");
  }

  const BtnEnter = (
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

  const menuUser = (
    <div className="userPhoto">
      <div className="userPhoto__img"></div>
      <ul className="userPhoto__ul">
        <li className="userPhoto__li">
          <Link to="/Account">
            Mi Perfil <i className="far fa-user"></i>
          </Link>
        </li>
        <li className="userPhoto__li">
          <Link onClick={cerrar} to="/">
            Cerrar Sesion
            <i className="fas fa-door-open"></i>
          </Link>
        </li>
      </ul>
    </div>
  );

  if (sesionUsuario) {
    return sesionUsuario.autenticado ? menuUser : BtnEnter;
  } else {
    return BtnEnter;
  }
}
export default ButtonModalS;
