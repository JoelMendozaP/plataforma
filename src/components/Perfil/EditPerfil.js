import React from "react";
import "./EditPerfil.css";
function EditPerfil(props) {
  return (
    <div className="EditPerfil">
      <h2>Editar</h2>
      <form action="">
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="UsernameOrEmail"
            placeholder="Usuario"
            // value={usuario.UsernameOrEmail}
            // onChange={handleChange1}
          />
          <i className="fas fa-user"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="UsernameOrEmail"
            placeholder="Nombre Completo"
            // value={usuario.UsernameOrEmail}
            // onChange={handleChange1}
          />
          <i className="fas fa-user"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="UsernameOrEmail"
            placeholder="Correo"
            // value={usuario.UsernameOrEmail}
            // onChange={handleChange1}
          />
          <i className="fas fa-user"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="UsernameOrEmail"
            placeholder="Celualr"
            // value={usuario.UsernameOrEmail}
            // onChange={handleChange1}
          />
          <i className="fas fa-user"></i>
        </div>
      </form>
    </div>
  );
}

export default EditPerfil;
