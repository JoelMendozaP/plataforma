import React from "react";
import GetIn from "../GetIn/GetIn";
import Chats from "../Information/Chats";
import "./style/ButtonModalS.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useStateValue } from "../../services/context/store";
import user from "../../assets/img/user.jpg";
function ButtonModalS(props) {
  const { t } = useTranslation("header");
  const [{ sesionUsuario }, dispatch] = useStateValue();

  function cerrar() {
    dispatch({
      type: "SALIR_SESION",
      autenticado: false,
      nuevoUsuario: {},
    });
    localStorage.removeItem("token_seguridad");
    localStorage.removeItem("id");
  }
  function ChangeInfo() {
    dispatch({ data: <Chats /> });
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
  function validar(img) {
    if (img === undefined || img === null) {
      return user;
    }
    return img;
  }
  const menuUser = (
    <div className="userPhoto">
      <div
        className="userPhoto__img"
        style={{
          backgroundImage: sesionUsuario
            ? `url("${validar(sesionUsuario.usuario.photoUrl)}")`
            : `url("${user}")`,
        }}
      ></div>
      <ul className="userPhoto__ul">
        <li className="userPhoto__li">
          <Link to="/Account">
            Mi Perfil <i className="far fa-user"></i>
          </Link>
        </li>
        <li className="userPhoto__li">
          <Link onClick={ChangeInfo} to="/chat">
            Chat
            <i className="fas fa-comments"></i>
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
