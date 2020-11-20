import { Loading } from "../../animation/index";
import { registerUser } from "../../../services/action/UserAuthAction";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { openSnackbar, startSession } from "../../../store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ErrorMsg } from "../../common";
import { DefInputIcon } from "../../inputs";
import { NormalButton } from "../../buttons";
const Register = (props) => {
  const { t } = useTranslation("Register");
  const [view, setView] = useState({
    load: true,
    formErrors: {
      username: t("fieldObligatory"),
      email: t("fieldObligatory"),
      password: t("fieldObligatory"),
      password_confirmation: t("fieldObligatory"),
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
        formErrors.username = value.length < 3 ? t("charactersRequired") : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : t("invalidEmail");
        break;
      case "password":
        formErrors.password = value.length < 3 ? t("charactersRequired") : "";
        break;
      case "password_confirmation":
        formErrors.password_confirmation =
          value.length < 3 ? t("charactersRequired") : "";
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
      props.openSnackbar("Registro Exitoso", true);
      props.startSession(res.data.userToReturn, true);
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
          props.openSnackbar("Llene el formulario", true);
        }
      } else {
        props.openSnackbar("Las contraseñas no coinciden", true);
      }
    } catch (e) {
      setView(true);
      console.log(e);
    }
  };

  return (
    <form>
      <span className="form__span">{t("signIn")}</span>
      <DefInputIcon
        icon="user"
        type="text"
        name="username"
        placeholder={t("user")}
        value={user.username}
        onChange={inputhandleChange}
      />
      {view.formErrors.username.length > 0 && (
        <ErrorMsg>{view.formErrors.username}</ErrorMsg>
      )}
      <DefInputIcon
        icon="envelope"
        type="email"
        name="email"
        placeholder={t("email")}
        value={user.email}
        onChange={inputhandleChange}
      />
      {view.formErrors.email.length > 0 && (
        <ErrorMsg>{view.formErrors.email}</ErrorMsg>
      )}
      <DefInputIcon
        icon="lock"
        type="password"
        name="password"
        placeholder={t("password")}
        value={user.password}
        onChange={inputhandleChange}
      />
      {view.formErrors.password.length > 0 && (
        <ErrorMsg>{view.formErrors.password}</ErrorMsg>
      )}
      <DefInputIcon
        icon="lock"
        type="password"
        name="password_confirmation"
        placeholder={t("confirmPassword")}
        value={user.password_confirmation}
        onChange={inputhandleChange}
      />
      {view.formErrors.password_confirmation.length > 0 && (
        <ErrorMsg>{view.formErrors.password_confirmation}</ErrorMsg>
      )}
      {view.load ? (
        <NormalButton onClick={registrarUsuario}>
          {t("createAccount")}
        </NormalButton>
      ) : (
        <Loading />
      )}
    </form>
  );
};
const mapDispatchToProps = {
  openSnackbar,
  startSession,
};
export default connect(null, mapDispatchToProps)(withRouter(Register));
