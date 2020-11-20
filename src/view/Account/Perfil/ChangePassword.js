import "./style/ChangePassword.css";

import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changePassword } from "../../../services/action/UsuarioAction";
import React, { useState } from "react";

import { DefInputIcon } from "../../../components/inputs";
import { Loading } from "../../../components/animation";
import { Prueba } from "../../../components/layout";
import { changeInfo, openSnackbar } from "../../../store/actions";
import { ErrorMsg } from "../../../components/common";
import { connect } from "react-redux";
function ChangePassword(props) {
  const { changeInfo, openSnackbar, sesionUser } = props;
  const { t } = useTranslation("Preference");
  const [data, setData] = useState({
    CurrentPassword: "",
    NewPassword: "",
    ConfNewPassword: "",
    errors: {
      CurrentPassword: t("fieldObligatory"),
      NewPassword: t("fieldObligatory"),
      ConfNewPassword: t("fieldObligatory"),
    },
    load: true,
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = { ...data.errors };
    switch (name) {
      case "CurrentPassword":
        errors.CurrentPassword =
          value.length < 3 ? t("charactersRequired") : "";
        break;
      case "NewPassword":
        errors.NewPassword = value.length < 3 ? t("charactersRequired") : "";
        break;
      case "ConfNewPassword":
        errors.ConfNewPassword =
          value.length < 3 ? t("charactersRequired") : "";
        break;
      default:
        break;
    }

    setData((a) => ({
      ...a,
      [name]: value,
      errors,
    }));
  };

  const formValid = (val) => {
    let valid = true;
    Object.values(val.errors).forEach((val) => {
      val.length > 0 && (valid = false);
    });
    Object.values(val).forEach((val) => {
      val === "" && (valid = false);
    });
    return valid;
  };
  function save(res) {
    if (res.status === 200) {
      setData((a) => ({ ...a, load: true }));
      openSnackbar("Registro Exitoso", true);
      changeInfo(<Prueba>Account</Prueba>);
    } else {
      setData((a) => ({ ...a, load: true }));
      openSnackbar("Error al guardar", true);
    }
  }

  const dataSend = async (e) => {
    e.preventDefault();
    try {
      if (data.NewPassword === data.ConfNewPassword) {
        if (formValid(data)) {
          setData((a) => ({ ...a, load: false }));
          const id = sesionUser.user.id;
          await changePassword(id, {
            NewPassword: data.NewPassword,
            CurrentPassword: data.CurrentPassword,
            UsernameOrEmail: sesionUser.user.email,
          }).then((response) => {
            console.log(" response", response);
            save(response);
          });
        } else {
          openSnackbar("Llene el formulario", true);
        }
      } else {
        openSnackbar("Las contraseñas no coinciden", true);
      }
    } catch (e) {
      setData((a) => ({ ...a, load: true }));
      console.log(e);
    }
  };

  return (
    <div className="ChangePassword">
      <h2>{t("changePassword")}</h2>
      <form className="ChangePassword__form">
        <DefInputIcon
          type="password"
          name="CurrentPassword"
          placeholder={t("oldPassword")}
          icon="unlock"
          onChange={handleChange}
        />
        {data.errors.CurrentPassword.length > 0 && (
          <ErrorMsg>{data.errors.CurrentPassword}</ErrorMsg>
        )}
        <DefInputIcon
          type="password"
          name="NewPassword"
          placeholder={t("newPassword")}
          icon="lock"
          onChange={handleChange}
        />
        {data.errors.NewPassword.length > 0 && (
          <ErrorMsg>{data.errors.NewPassword}</ErrorMsg>
        )}
        <DefInputIcon
          type="password"
          name="ConfNewPassword"
          placeholder={t("repeatPassword")}
          icon="lock"
          onChange={handleChange}
        />
        {data.errors.ConfNewPassword.length > 0 && (
          <ErrorMsg>{data.errors.ConfNewPassword}</ErrorMsg>
        )}
        <div className="ChangePassword__btn">
          {data.load ? (
            <React.Fragment>
              <button
                type="button"
                onClick={dataSend}
                className="ChangePassword__btnS"
              >
                {t("change")}
              </button>
              <button
                type="button"
                onClick={() => changeInfo(<Prueba>Account</Prueba>)}
                className="ChangePassword__btnC"
              >
                {t("cancel")}
              </button>
            </React.Fragment>
          ) : (
            <Loading />
          )}
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    sesionUser: state.sesionUser,
  };
};
const mapDispatchToProps = {
  changeInfo,
  openSnackbar,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ChangePassword));
