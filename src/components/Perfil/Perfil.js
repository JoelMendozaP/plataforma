import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import user from "../../assets/img/user.jpg";
import { useStateValue } from "../../services/context/store";
import "./Perfil.css";

const Perfil = () => {
  const [{ sesionUsuario }] = useStateValue();
  return (
    <div className="Perfil">
      <div className="Perfil__photo">
        <img className="Perfil__photoImg" src={user} alt="" />
        <Link to="/Account" className="Perfil__photoBtn">
          Subir Foto
        </Link>
      </div>
      <div className="Perfil__hr"></div>
      <div className="Perfil__information">
        <h3>
          Usuario: {sesionUsuario ? sesionUsuario.usuario.username : "no data"}
        </h3>
        <h3>
          Nombre Completo:{" "}
          {sesionUsuario ? sesionUsuario.usuario.name : "no data"}
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
