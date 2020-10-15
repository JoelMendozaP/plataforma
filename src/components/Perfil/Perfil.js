import React from "react";
import user from "../../assets/img/user.jpg";
import { useStateValue } from "../../services/context/store";
import { useTranslation } from "react-i18next";
import "./style/Perfil.css";
import ChangeImage from "./ChangeImage";
function Perfil(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const { t } = useTranslation("account");
  function ChangeImg() {
    dispatch({ type: "CHANGE_INFO", data: <ChangeImage /> });
  }
  function validar(text) {
    if (text === undefined || text === null) {
      return "";
    }
    return text;
  }
  function validarImg(img) {
    if (img === undefined || img === null) {
      return user;
    }
    return img;
  }
  return (
    <div className="Perfil">
      <div className="Perfil__photo">
        <div
          style={{
            backgroundImage: sesionUsuario
              ? `url("${validarImg(sesionUsuario.usuario.photoUrl)}")`
              : `url("${user}")`,
          }}
          className="change__containerImg"
          id="change__Img"
        ></div>
        <button className="Perfil__photoBtn" onClick={ChangeImg}>
          {t("acChange")}
        </button>
      </div>
      <div className="Perfil__hr"></div>
      <div className="Perfil__information">
        <h3>
          <span>
            {t("acUser")}:{" "}
            {sesionUsuario ? validar(sesionUsuario.usuario.username) : ""}
          </span>
        </h3>
        <h3>
          <span>
            {t("acName")}:{" "}
            {sesionUsuario
              ? (validar(sesionUsuario.usuario.firstName),
                validar(sesionUsuario.usuario.lastName))
              : ""}
          </span>
        </h3>
        <h3>
          {t("acEmail")}:{" "}
          {sesionUsuario ? validar(sesionUsuario.usuario.email) : ""}
        </h3>
        <h3>
          {t("acPhone")}:{" "}
          {sesionUsuario ? validar(sesionUsuario.usuario.Number) : ""}
        </h3>
      </div>
    </div>
  );
}

export default Perfil;
