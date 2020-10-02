import { registerUser } from "../../services/actions/UsuarioAction";
import React, { useState } from "react";
import { useStateValue } from "../../services/context/store";
import { Link } from "react-router-dom";
function Register(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const [usuario, setUsuario] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const inputhandleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };
  const registrarUsuario = (e) => {
    e.preventDefault();
    registerUser(usuario, dispatch).then((response) => {
      console.log("Se registro exitosamente", response);
      props.onClose();
    });
  };

  return (
    <form>
      <span className="form__span">Registarse</span>
      <div className="form__Input">
        <input
          className="formControl"
          type="text"
          name="username"
          placeholder="Usuario"
          value={usuario.username}
          onChange={inputhandleChange}
          required
        />
        <i className="fas fa-user"></i>
      </div>
      <div className="form__Input">
        <input
          className="formControl"
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={usuario.email}
          onChange={inputhandleChange}
          required
        />
        <i className="fas fa-envelope"></i>
      </div>
      <div className="form__Input">
        <input
          className="formControl"
          type="password"
          name="password"
          placeholder="Contraseña"
          value={usuario.password}
          onChange={inputhandleChange}
          required
        />
        <i className="fas fa-lock"></i>
      </div>
      <div className="form__Input">
        <input
          className="formControl"
          type="password"
          name="password_confirmation"
          placeholder="Confirmar contraseña"
          value={usuario.password_confirmation}
          onChange={inputhandleChange}
          required
        />
        <i className="fas fa-lock"></i>
      </div>
      <Link to="/" className="form__Link" onClick={registrarUsuario}>
        Crear cuenta
      </Link>
      {sesionUsuario ? sesionUsuario.usuario.username : null}
    </form>
  );
}
export default Register;
