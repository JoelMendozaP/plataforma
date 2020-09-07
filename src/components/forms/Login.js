import React from "react";
import { loginUsuario } from "../../services/actions/UsuarioAction";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [usuario, setUsuario] = useState({
    UsernameOrEmail: "",
    password: "",
  });
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setUsuario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };
  const loginUsuarioButton = (e) => {
    e.preventDefault();
    loginUsuario(usuario).then((response) => {
      console.log("login exitoso", response);
      window.localStorage.setItem("token_seguridad", response.data.token);
    });
  };

  return (
    <React.Fragment>
      <form onSubmit={loginUsuarioButton}>
        <p>l1</p>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="UsernameOrEmail"
            placeholder="Usuario o correo"
            value={usuario.UsernameOrEmail}
            onChange={handleChange1}
            required
          />
          <i className="fas fa-user"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="password"
            name="password"
            placeholder="Contraseña"
            value={usuario.password}
            onChange={handleChange1}
            required
          />
          <i className="fas fa-lock"></i>
        </div>
        <button type="submit">Ingresar</button>
        <p className="forgotPassword">
          ¿Olvidaste tu <a href="...">contraseña?</a>
        </p>
      </form>
    </React.Fragment>
  );
};
export default Login;
