import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { DefInputIcon } from "../../inputs";
import { NormalButton } from "../../buttons";
const Recover = (props) => {
  const [usuario, setUsuario] = useState({
    Email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };
  const loginUsuarioButton = (e) => {
  //   e.preventDefault();
  //   loginUsuario(usuario, dispatch).then((response) => {
  //     console.log("login exitoso", response);
  //     window.localStorage.setItem("token_seguridad", response.data.token);
  //     props.onClose();
  //   });
  };

  return (
    <React.Fragment>
      <form>
        <span className="form__span">Recuperar Contraseña</span>
        <span>
          <p className="Change_text">Cambiar contraseña</p>
          <p className="Change_text">
            Indica tu correo electronico y sigue las instrucciones ques se
            envian por correo.
          </p>
        </span>
        <DefInputIcon
          icon="user"
          type="email"
          name="email"
          placeholder="Correo"
          value={usuario.Email}
          onChange={handleChange}
        />
        <NormalButton onClick={loginUsuarioButton}>Enviar Correo</NormalButton>
      </form>
    </React.Fragment>
  );
};
export default Recover;
