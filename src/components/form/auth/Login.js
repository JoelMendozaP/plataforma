import "../style/Login.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../../services/action/UserAuthAction";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { openSnackbar, startSession } from "../../../store/actions";
import { withRouter } from "react-router-dom";
import { NormalButton } from "../../buttons";
import { DefInputIcon } from "../../inputs";
import { ErrorMsg } from "../../common";
import { Loading } from "../../animation/index";

const Login = (props) => {
  const { t } = useTranslation("loginF");
  const [view, setView] = useState({
    load: true,
    formErrors: {
      UsernameOrEmail: t("fieldObligatory"),
      password: t("fieldObligatory"),
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
          value.length < 3 ? t("charactersRequired") : "";
        break;
      case "password":
        formErrors.password = value.length < 3 ? t("charactersRequired") : "";
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
      props.openSnackbar("Login Exitoso", true);
      props.startSession(res.data.user, true);
      props.history.push("/");
    } else {
      setView((a) => ({ ...a, load: true }));
      props.openSnackbar("Error al guardar", true);
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
        await loginUser(user).then((response) => {
          console.log(" response", response);
          save(response);
        });
      } else {
        props.openSnackbar("Llene el formulario", true);
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
        <DefInputIcon
          icon="user"
          type="text"
          name="UsernameOrEmail"
          placeholder={t("lgUsC")}
          value={user.UsernameOrEmail}
          onChange={handleChange}
        />
        {view.formErrors.UsernameOrEmail.length > 0 && (
          <ErrorMsg>{view.formErrors.UsernameOrEmail}</ErrorMsg>
        )}
        <DefInputIcon
          icon="lock"
          type="password"
          name="password"
          placeholder={t("lgPass")}
          value={user.password}
          onChange={handleChange}
        />
        {view.formErrors.password.length > 0 && (
          <ErrorMsg>{view.formErrors.password}</ErrorMsg>
        )}
        {view.load ? (
          <React.Fragment>
            <NormalButton onClick={loginUsuarioButton}>
              {t("lgIniciar")}
            </NormalButton>
            <br />
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
};
const mapDispatchToProps = {
  openSnackbar,
  startSession,
};
export default connect(null, mapDispatchToProps)(withRouter(Login));
