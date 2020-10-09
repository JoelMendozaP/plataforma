import "./style/Login.css";
import React, { useState } from "react";
import { loginUsuario } from "../../services/actions/UsuarioAction";
import { useStateValue } from "../../services/context/store";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loading from "../animation/Loading";

function Login() {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const { t } = useTranslation("loginF");
  const [view, setView] = useState({
    load: true,
    formErrors: {
      UsernameOrEmail: "",
      password: "",
    },
  });

  const [user, setUser] = useState({
    UsernameOrEmail: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...view.formErrors };
    switch (name) {
      case "UsernameOrEmail":
        formErrors.UsernameOrEmail =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "password":
        formErrors.password =
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
    if (res.status === 200) {
      setView((a) => ({ ...a, load: true }));
      dispatch({
        type: "OPEN_SNACKBAR",
        openMensaje: {
          open: true,
          message: "Login Exitoso",
        },
      });
      dispatch({
        type: "INICIAR_SESION",
        sesion: res.data.user,
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

  const loginUsuarioButton = async (e) => {
    e.preventDefault();
    try {
      if (formValid(user, view.formErrors)) {
        setView((a) => ({ ...a, load: false }));
        await loginUsuario(user).then((response) => {
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
    } catch (e) {
      setView((a) => ({ ...a, load: true }));
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      <form>
        <span className="form__span">{t("lgIniciar")}</span>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="UsernameOrEmail"
            placeholder={t("lgUsC")}
            value={user.UsernameOrEmail}
            onChange={handleChange}
            required
          />
          <i className="fas fa-user"></i>
        </div>
        {view.formErrors.UsernameOrEmail.length > 0 && (
          <span className="errorMessage">
            {view.formErrors.UsernameOrEmail}
          </span>
        )}
        <div className="form__Input">
          <input
            className="formControl"
            type="password"
            name="password"
            placeholder={t("lgPass")}
            value={user.password}
            onChange={handleChange}
            required
          />
          <i className="fas fa-lock"></i>
        </div>
        {view.formErrors.password.length > 0 && (
          <span className="errorMessage">{view.formErrors.password}</span>
        )}
        {view.load ? (
          <React.Fragment>
            <button className="form__Link" onClick={loginUsuarioButton}>
              {t("lgIniciar")}
            </button>
            <span className="forgotPassword">
              {t("lgForget")} <Link to="/auth/recover">{t("lgPass")}</Link> ?
            </span>
          </React.Fragment>
        ) : (
          <Loading />
        )}
        {sesionUsuario ? null : null}
      </form>
    </React.Fragment>
  );
}
export default Login;
