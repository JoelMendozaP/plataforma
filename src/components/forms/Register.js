import React, { useState } from "react";
import { registerUser } from "../../services/actions/UsuarioAction";
import { useStateValue } from "../../services/context/store";

import Loading from "../animation/Loading";

function Register(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const [view, setView] = useState({
    load: true,
    formErrors: {
      username: "Campo obligatorio",
      email: "Campo obligatorio",
      password: "Campo obligatorio",
      password_confirmation: "Campo obligatorio",
    },
  });
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const inputhandleChange = (e) => {
    const { name, value } = e.target;
    let formErrors = { ...view.formErrors };
    switch (name) {
      case "username":
        formErrors.username =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "password_confirmation":
        formErrors.password_confirmation =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      default:
        break;
    }
    setUser((anterior) => ({
      ...anterior,
      [name]: value,
    }));
    setView((a) => ({ ...a, formErrors }));
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
      dispatch({
        type: "OPEN_MODAL",
        open: false,
        content: null,
      });
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

  const formValid = (user, formErrors) => {
    let valid = true;
    Object.values(formErrors).forEach((val) => {
      val.length > 0 && (valid = false);
    });
    Object.values(user).forEach((val) => {
      val === "" && (valid = false);
    });
    return valid;
  };

  const registrarUsuario = async (e) => {
    e.preventDefault();
    try {
      if (user.password === user.password_confirmation) {
        if (formValid(user, view.formErrors)) {
          setView((a) => ({ ...a, load: false }));
          await registerUser(user).then((response) => {
            console.log(" response", response);
            save(response);
          });
        } else {
          dispatch({
            type: "OPEN_SNACKBAR",
            openMensaje: {
              open: true,
              message: "Llene el formulario",
            },
          });
        }
      } else {
        dispatch({
          type: "OPEN_SNACKBAR",
          openMensaje: {
            open: true,
            message: "Las contraseñas no coinciden",
          },
        });
      }
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
      {view.formErrors.username.length > 0 && (
        <span className="errorMessage">{view.formErrors.username}</span>
      )}
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
      {view.formErrors.email.length > 0 && (
        <span className="errorMessage">{view.formErrors.email}</span>
      )}
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
      {view.formErrors.password.length > 0 && (
        <span className="errorMessage">{view.formErrors.password}</span>
      )}
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
      {view.formErrors.password_confirmation.length > 0 && (
        <span className="errorMessage">
          {view.formErrors.password_confirmation}
        </span>
      )}
      {view.load ? (
        <button className="form__Link" onClick={registrarUsuario}>
          Crear cuenta
        </button>
      ) : (
        <Loading />
      )}
      {sesionUsuario ? sesionUsuario.usuario.email : null}
    </form>
  );
}
export default Register;
