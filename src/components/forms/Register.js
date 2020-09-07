import React from "react";
import { registerUser } from "../../services/actions/UsuarioAction";
import "./Register.css";
import { useState } from "react";

const Register = () => {
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
    registerUser(usuario).then((response) => {
      console.log("Se registro exitosamente", response);
      window.localStorage.setItem("token_seguridad", response.data.token);
    });
  };

  return (
    <form onSubmit={registrarUsuario}>
      <p>r1</p>
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
      <button type="submit">Crear cuenta</button>
    </form>
  );
};
export default Register;
