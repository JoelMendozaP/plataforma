import React, { useState } from "react";
import DefInputIcon from "../inputs/DefInputIcon";
import Loading from "../animation/Loading";
import { useStateValue } from "../../services/context/store";
import { changePassword } from "../../services/actions/UsuarioAction";
import Prueba from "../../components/Information/Prueba";
import "./style/ChangePassword.css";
import { withRouter } from "react-router-dom";
function ChangePassword(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const [data, setData] = useState({
    CurrentPassword: "",
    NewPassword: "",
    ConfNewPassword: "",
    errors: {
      CurrentPassword: "Campo obligatorio",
      NewPassword: "Campo obligatorio",
      ConfNewPassword: "Campo obligatorio",
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
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "NewPassword":
        errors.NewPassword =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "ConfNewPassword":
        errors.ConfNewPassword =
          value.length < 3 ? "minimum 3 characaters required" : "";
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
      dispatch({
        type: "OPEN_SNACKBAR",
        openMensaje: {
          open: true,
          message: "Registro Exitoso",
        },
      });
      dispatch({
        type: "CHANGE_INFO",
        data: <Prueba>Account</Prueba>,
      });
    } else {
      setData((a) => ({ ...a, load: true }));
      dispatch({
        type: "OPEN_SNACKBAR",
        openMensaje: {
          open: true,
          message: "Error al guardar",
        },
      });
    }
  }

  const dataSend = async (e) => {
    e.preventDefault();
    try {
      if (data.NewPassword === data.ConfNewPassword) {
        if (formValid(data)) {
          setData((a) => ({ ...a, load: false }));
          const id = sesionUsuario.usuario.id;
          await changePassword(id, {
            NewPassword: data.NewPassword,
            CurrentPassword: data.CurrentPassword,
            UsernameOrEmail: sesionUsuario.usuario.email,
          }).then((response) => {
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
      setData((a) => ({ ...a, load: true }));
      console.log(e);
    }
  };

  return (
    <div className="ChangePassword">
      <h2>Cambiar Contraseña</h2>
      <form className="ChangePassword__form">
        <DefInputIcon
          type="password"
          name="CurrentPassword"
          placeholder="Antigua Contraseña"
          icon="unlock"
          onChange={handleChange}
        />
        {data.errors.CurrentPassword.length > 0 && (
          <span className="errorMessage">{data.errors.CurrentPassword}</span>
        )}
        <DefInputIcon
          type="password"
          name="NewPassword"
          placeholder="Nueva Contraseña"
          icon="lock"
          onChange={handleChange}
        />
        {data.errors.NewPassword.length > 0 && (
          <span className="errorMessage">{data.errors.NewPassword}</span>
        )}
        <DefInputIcon
          type="password"
          name="ConfNewPassword"
          placeholder="Repetir Contraseña"
          icon="lock"
          onChange={handleChange}
        />
        {data.errors.ConfNewPassword.length > 0 && (
          <span className="errorMessage">{data.errors.ConfNewPassword}</span>
        )}
        <div className="ChangePassword__btn">
          {data.load ? (
            <React.Fragment>
              <button
                type="button"
                onClick={dataSend}
                className="ChangePassword__btnS"
              >
                Cambiar
              </button>
              <button
                type="button"
                onClick={() =>
                  dispatch({
                    type: "CHANGE_INFO",
                    data: <Prueba>Account</Prueba>,
                  })
                }
                className="ChangePassword__btnC"
              >
                Cancelar
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

export default withRouter(ChangePassword);
