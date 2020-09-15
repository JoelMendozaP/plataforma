import React, { useState } from "react";
import Perfil from "../../Perfil/Perfil";
import { useStateValue } from "../../../services/context/store";
import InformationPersonal from "../../Perfil/InformationPersonal";
import EditPerfil from "../../Perfil/EditPerfil";
import "./Account.css";
function Account(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const [usuario, setUsuario] = useState({
    username: `${sesionUsuario ? validar(sesionUsuario.usuario.username) : ""}`,
    name: `${sesionUsuario ? validar(sesionUsuario.usuario.name) : ""}`,
    lastname: `${sesionUsuario ? validar(sesionUsuario.usuario.lastname) : ""}`,
    email: `${sesionUsuario ? validar(sesionUsuario.usuario.email) : ""}`,
    phone: `${sesionUsuario ? validar(sesionUsuario.usuario.phone) : ""}`,
    dateN: `${sesionUsuario ? validar(sesionUsuario.usuario.dateN) : ""}`,
    gender: `${sesionUsuario ? validar(sesionUsuario.usuario.gender) : ""}`,
    direction: `${
      sesionUsuario ? validar(sesionUsuario.usuario.direction) : ""
    }`,
    postalCode: `${
      sesionUsuario ? validar(sesionUsuario.usuario.postalCode) : ""
    }`,
  });
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

  function llamar() {
    dispatch({
      data: <EditPerfil user={usuario} handleChange={handleChange} />,
    });
  }

  return (
    <React.Fragment>
      <div className="Account__title">
        <span className="Account__titleSpn">Perfil de Usuario</span>
        <button className="Account__titleBtn" onClick={llamar}>
          Editar Perfil
        </button>
      </div>
      <div className="Account__perfil">
        <Perfil user={usuario} />
      </div>
      <div className="Account__data">
        <InformationPersonal user={usuario} />
      </div>
    </React.Fragment>
  );
}

export default Account;
