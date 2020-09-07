import React from "react";
import { useState } from "react";

const Perfil = () => {
  // const [usuario, setUsuario] = useState({
  const [usuario] = useState({
    username: "",
    email: "",
    password: "",
  });
  return (
    <div>
      <h1>Perfil de usuario</h1>
      <p>Usuario: {usuario.username}</p>
      <p>Email: {usuario.email}</p>
      <p>Pasword: {usuario.password}</p>
    </div>
  );
};

export default Perfil;
