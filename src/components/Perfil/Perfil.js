import React from "react";
// import { useState } from "react";
import { useStateValue } from "../../services/context/store";
const Perfil = () => {
  const [{ sesionUsuario }] = useStateValue();
  return (
    <div>
      <h1>Perfil de usuario</h1>
      <p>
        Usuario: {sesionUsuario ? sesionUsuario.usuario.username : "no data"}
      </p>
      <p>Email: {sesionUsuario ? sesionUsuario.usuario.email : "no data"}</p>
      <p>
        Pasword: {sesionUsuario ? sesionUsuario.usuario.password : "no data"}
      </p>
    </div>
  );
};

export default Perfil;
