import "./style/Login.css";
import React, { useState } from "react";
// import { loginUsuario } from "../../services/actions/UsuarioAction";
// import { useStateValue } from "../../services/context/store";
import { Link } from "react-router-dom";

function Recover(props) {
  // const [dispatch] = useStateValue();

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
  // const loginUsuarioButton = (e) => {
  //   e.preventDefault();
  //   loginUsuario(usuario, dispatch).then((response) => {
  //     console.log("login exitoso", response);
  //     window.localStorage.setItem("token_seguridad", response.data.token);
  //     props.onClose();
  //   });
  // };

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
        <div className="form__Input">
          <input
            className="formControl"
            type="email"
            name="Email"
            placeholder="Correo"
            value={usuario.Email}
            onChange={handleChange}
            required
          />
          <i className="fas fa-user"></i>
        </div>
        {/* <Link to="/" className="form__Link" onClick={loginUsuarioButton}> */}
        <Link to="/" className="form__Link">
          Enviar Correo
        </Link>
      </form>
    </React.Fragment>
  );
}
export default Recover;
