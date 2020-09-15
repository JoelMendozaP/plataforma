import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import user from "../../assets/img/user.jpg";
import { useStateValue } from "../../services/context/store";
import "./Perfil.css";
import ChangeImage from "./ChangeImage";
const Perfil = () => {
  const [{ sesionUsuario, informationR }, dispatch] = useStateValue();

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
          <span>
            Usuario:{" "}
            {sesionUsuario ? sesionUsuario.usuario.username : "no data"}
          </span>
        </h3>
        <h3>
          <span>
            Nombre Completo:{" "}
            {sesionUsuario ? sesionUsuario.usuario.name : "no data"}
          </span>
        </h3>
        <h3>
          Correo: {sesionUsuario ? sesionUsuario.usuario.email : "no data"}
        </h3>
        <h3>
          Ceular: {sesionUsuario ? sesionUsuario.usuario.phone : "no data"}
        </h3>
      </div>
    </div>
  );
};

export default Perfil;
