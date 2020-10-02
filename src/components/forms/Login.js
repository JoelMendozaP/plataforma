import "./Login.css";
import React, { useState } from "react";
import { loginUsuario } from "../../services/actions/UsuarioAction";
import { useStateValue } from "../../services/context/store";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Login(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const { t } = useTranslation("loginF");
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
      // if (response.status === 200) {
      //   dispatch({
      //     type: "OPEN_SNACKBAR",
      //     openMensaje: {
      //       open: true,
      //       message: "Login Exitoso",
      //     },
      //   });
      //   props.onClose();
      // } else {
      //   dispatch({
      //     type: "OPEN_SNACKBAR",
      //     openMensaje: {
      //       open: true,
      //       message: "Error al guardar",
      //     },
      //   });
      // }
    });
    // .catch
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
            placeholder={t("lgPass")}
            value={usuario.password}
            onChange={handleChange1}
            required
          />
          <i className="fas fa-lock"></i>
        </div>
        <Link to="/" className="form__Link" onClick={loginUsuarioButton}>
          {t("lgIniciar")}
        </Link>
        <br />
        <br />
        <span className="forgotPassword">
          {t("lgForget")} <Link to="/auth/recover">{t("lgPass")}</Link> ?
        </span>
        {sesionUsuario ? sesionUsuario.usuario.username : null}
      </form>
    </React.Fragment>
  );
}
export default Login;
