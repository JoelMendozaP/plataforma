import React from "react";
import user from "../../assets/img/user.jpg";
import { useStateValue } from "../../services/context/store";
import { useTranslation } from "react-i18next";
import "./Perfil.css";
import ChangeImage from "./ChangeImage";
function Perfil(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const { t } = useTranslation("account");
  function ChangeImg() {
    dispatch({ data: <ChangeImage /> });
  }
  function validar(img) {
    if (img === undefined || img === null) {
      return user;
    }
    return img;
  }
  return (
    <div className="Perfil">
      <div className="Perfil__photo">
        {/* <img className="Perfil__photoImg" src={props.user.photoUrl} alt="" /> */}
        <div
          style={{
            backgroundImage: sesionUsuario
              ? `url("${validar(sesionUsuario.usuario.photoUrl)}")`
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
            {t("acUser")}: {props.user.username}
          </span>
        </h3>
        <h3>
          <span>
            {t("acName")}:{props.user.name} {props.user.lastname}
          </span>
        </h3>
        <h3>
          {t("acEmail")}: {props.user.email}
        </h3>
        <h3>
          {t("acPhone")}: {props.user.phone}
        </h3>
      </div>
    </div>
  );
}

export default Perfil;
