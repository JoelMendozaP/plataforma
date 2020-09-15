import "./Login.css";
import React, { useState } from "react";
import { loginUsuario } from "../../services/actions/UsuarioAction";
import { useStateValue } from "../../services/context/store";
import { Link } from "react-router-dom";

function Login(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  // const [dispatch] = useStateValue();

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
    loginUsuario(usuario, dispatch).then((response) => {
      console.log("login", response);
      if (response.status === 200) {
        dispatch({
          type: "OPEN_SNACKBAR",
          openMensaje: {
            open: true,
            message: "Login Exitoso",
          },
        });
        window.localStorage.setItem("token_seguridad", response.data.token);
        props.onClose();
      } else {
        dispatch({
          type: "OPEN_SNACKBAR",
          openMensaje: {
            open: true,
            message: "Error al guardar",
          },
        });
      }
    });
    // .catch
  };

  return (
    <React.Fragment>
      <form>
        <span className="form__span">Iniciar Sesion</span>
        {/* <p>{sesionUsuario ? sesionUsuario.usuario.id : "no data"}</p> */}
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
        <Link to="/" className="form__Link" onClick={loginUsuarioButton}>
          Iniciar Sesion
        </Link>
        {/* <Link className="form__Link" onClick={loginUsuarioButton}>
          Iniciar Sesion
        </Link> */}
        <br />
        <br />
        <span className="forgotPassword">
          ¿Olvidaste tu <Link to="/auth/recover">contraseña</Link>?
        </span>
        {sesionUsuario ? sesionUsuario.usuario.username : null}
      </form>
    </React.Fragment>
  );
}
export default Login;
