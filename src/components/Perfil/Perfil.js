import React from "react";
import user from "../../assets/img/user.jpg";
import { useStateValue } from "../../services/context/store";
import "./Perfil.css";
import ChangeImage from "./ChangeImage";
function Perfil(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();

  function ChangeImg() {
    dispatch({ data: <ChangeImage /> });
  }
  return (
    <div className="Perfil">
      <div className="Perfil__photo">
        <img className="Perfil__photoImg" src={user} alt="" />
        <button className="Perfil__photoBtn" onClick={ChangeImg}>
          Cambiar Foto
        </button>
      </div>
      <div className="Perfil__hr"></div>
      <div className="Perfil__information">
        <h3>
          <span>Usuario: {props.user.username}</span>
        </h3>
        <h3>
          <span>
            Nombre Completo:{props.user.name} {props.user.lastname}
          </span>
        </h3>
        <h3>Correo: {props.user.email}</h3>
        <h3>Ceular: {props.user.phone}</h3>
      </div>
    </div>
  );
}

export default Perfil;
