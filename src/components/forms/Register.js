import React, { useState } from "react";
import { registerUser } from "../../services/actions/UsuarioAction";
import { useStateValue } from "../../services/context/store";

import Loading from "../animation/Loading";

function Register(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const [view, setView] = useState({
    load: true,
  });
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const inputhandleChange = (e) => {
    const { name, value } = e.target;
    setUser((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };
  function save(res) {
    if (res.status === 201) {
      setView((a) => ({ ...a, load: true }));
      dispatch({
        type: "OPEN_SNACKBAR",
        openMensaje: {
          open: true,
          message: "Registro Exitoso",
        },
      });
      dispatch({
        type: "INICIAR_SESION",
        sesion: res.data.userToReturn,
        autenticado: true,
      });
      props.onClose();
      window.history.pushState(null, null, "/");
    } else {
      setView((a) => ({ ...a, load: true }));
      dispatch({
        type: "OPEN_SNACKBAR",
        openMensaje: {
          open: true,
          message: "Error al guardar",
        },
      });
    }
  }

  const registrarUsuario = async () => {
    try {
      setView({ load: false });
      await registerUser(user).then((response) => {
        console.log(" response", response);
        save(response);
      });
    } catch (e) {
      setView(true);
      console.log(e);
    }
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
          value={user.username}
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
          value={user.email}
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
          value={user.password}
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
          value={user.password_confirmation}
          onChange={inputhandleChange}
          required
        />
        <i className="fas fa-lock"></i>
      </div>
      {view.load ? (
        <button className="form__Link" onClick={registrarUsuario}>
          Crear cuenta
        </button>
      ) : (
        <Loading />
      )}
    </form>
  );
}
export default Register;
