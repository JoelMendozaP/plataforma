import React, { useState } from "react";
import DefInputIcon from "../inputs/DefInputIcon";
import { changePassword } from "../../services/actions/UsuarioAction";
import "./style/ChangePassword.css";
function ChangePassword(props) {
  const [data, setData] = useState({
    CurrentPassword: "",
    NewPassword: "",
    ConfNewPassword: "",
    errors: {
      CurrentPassword: "Campo obligatorio",
      NewPassword: "Campo obligatorio",
      ConfNewPassword: "Campo obligatorio",
    },
  });
  const [confirm, setConfirm] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((a) => ({
      ...a,
      [name]: value,
      errors: {
        ...a.errors,
      },
    }));
  };

  const dataSend = (e) => {
    e.preventDefault();
    const id = window.localStorage.getItem("id");
    changePassword(id, {
      NewPassword: data.CurrentPassword,
      CurrentPassword: data.NewPassword,
      UsernameOrEmail: props.user,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="ChangePassword">
      <h2>Cambiar Contraseña</h2>
      <form action="">
        <DefInputIcon
          type="password"
          name="CurrentPassword"
          placeholder="Antigua Contraseña"
          icon="unlock"
          onChange={handleChange}
        />
        {data.errors.CurrentPassword && <p>{data.errors.CurrentPassword}</p>}
        <DefInputIcon
          type="password"
          name="NewPassword"
          placeholder="Nueva Contraseña"
          icon="lock"
          onChange={handleChange}
        />
        {data.errors.NewPassword && <p>{data.errors.NewPassword}</p>}

        <DefInputIcon
          type="password"
          name="ConfNewPassword"
          placeholder="Repetir Contraseña"
          icon="lock"
          onChange={handleChange}
        />
        {data.errors.ConfNewPassword && <p>{data.errors.ConfNewPassword}</p>}

        <div className="ChangePassword__btn">
          <button onClick={dataSend} className="ChangePassword__btnS">
            Cambiar
          </button>
          <button
            onClick={() => window.location.reload()}
            className="ChangePassword__btnC"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
