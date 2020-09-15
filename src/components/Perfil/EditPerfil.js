import React, { useState } from "react";
import { useStateValue } from "../../services/context/store";
import "./EditPerfil.css";
function EditPerfil(props) {
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
  return (
    <div className="EditPerfil">
      <h2>Editar</h2>
      <form action="">
        <h3>Datos de Usuario</h3>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="username"
            placeholder="Usuario"
            value={usuario.username}
            onChange={handleChange}
          />
          <i className="fas fa-user"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            value={usuario.name}
          />
          <i className="fas fa-signature"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="lastname"
            placeholder="Apellido"
            value={usuario.lastname}
            onChange={handleChange}
          />
          <i className="fas fa-digital-tachograph"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="email"
            name="email"
            placeholder="Correo"
            value={usuario.email}
            onChange={handleChange}
          />
          <i className="fas fa-envelope"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="number"
            name="phone"
            placeholder="Telefono"
            value={usuario.phone}
            onChange={handleChange}
          />
          <i className="fas fa-mobile"></i>
        </div>
        <h3>Datos Personales</h3>
        <div className="form__Input">
          <input
            className="formControl"
            type="date"
            name="dateN"
            placeholder="Fecha de Nacimiento"
            value={usuario.dateN}
            onChange={handleChange}
          />
          <i className="fas fa-calendar-check"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="number"
            name="gender"
            placeholder="Genero"
            value={usuario.gender}
            onChange={handleChange}
          />
          <i className="fas fa-dna"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="direction"
            placeholder="Direccion"
            value={usuario.direction}
            onChange={handleChange}
          />
          <i className="fas fa-directions"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="number"
            name="postalCode"
            placeholder="Codigo Postal"
            value={usuario.postalCode}
            onChange={handleChange}
          />
          <i className="fas fa-mail-bulk"></i>
        </div>
      </form>
    </div>
  );
}

export default EditPerfil;
