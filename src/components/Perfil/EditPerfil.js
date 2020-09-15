import React from "react";
import "./EditPerfil.css";
function EditPerfil(props) {
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
            defaultValue={props.user.username}
            onChange={props.handleChange}
          />
          <i className="fas fa-user"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={props.handleChange}
            defaultValue={props.user.name}
          />
          <i className="fas fa-signature"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="lastname"
            placeholder="Apellido"
            defaultValue={props.user.lastname}
            onChange={props.handleChange}
          />
          <i className="fas fa-digital-tachograph"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="email"
            name="email"
            placeholder="Correo"
            defaultValue={props.user.email}
            onChange={props.handleChange}
          />
          <i className="fas fa-envelope"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="number"
            name="phone"
            placeholder="Telefono"
            defaultValue={props.user.phone}
            onChange={props.handleChange}
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
            defaultValue={props.user.dateN}
            onChange={props.handleChange}
          />
          <i className="fas fa-calendar-check"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="number"
            name="gender"
            placeholder="Genero"
            defaultValue={props.user.gender}
            onChange={props.handleChange}
          />
          <i className="fas fa-dna"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="direction"
            placeholder="Direccion"
            defaultValue={props.user.direction}
            onChange={props.handleChange}
          />
          <i className="fas fa-directions"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="number"
            name="postalCode"
            placeholder="Codigo Postal"
            defaultValue={props.user.postalCode}
            onChange={props.handleChange}
          />
          <i className="fas fa-mail-bulk"></i>
        </div>
        <div className="EditPerfil__btn">
          <button className="EditPerfil__btnG">Guardar datos</button>
          <button className="EditPerfil__btnC">Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default EditPerfil;
