import "./Login.css";
import React, { useState } from "react";
import { loginUsuario } from "../../services/actions/UsuarioAction";
import { useStateValue } from "../../services/context/store";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loading from "../animation/Loading";

function Login(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const { t } = useTranslation("loginF");
  const [view, setView] = useState({
    load: true,
  });

  const [user, setUser] = useState({
    UsernameOrEmail: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((anterior) => ({
      ...anterior,
      [name]: value,
    }));
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
  const loginUsuarioButton = async () => {
    try {
      setView({ load: false });
      await loginUsuario(user).then((response) => {
        console.log(" response", response);
        save(response);
      });
    } catch (e) {
      setView(true);
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
      </form>
    </React.Fragment>
  );
}
export default Login;
