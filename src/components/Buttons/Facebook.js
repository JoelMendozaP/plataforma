import React from "react";
import FacebookLogin from "react-facebook-login";
import "./style/Facebook.css";
import { useStateValue } from "../../services/context/store";
import { externalLogin } from "../../services/actions/UsuarioAction";

function Facebook(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();

  const responseFacebook = (response) => {
    if (!response.accessToken) {
      dispatch({
        type: "OPEN_SNACKBAR",
        openMensaje: {
          open: true,
          message: "Error al ingresar",
        },
      });
    } else {
      const usuario = {
        RegisterOption: "Facebook",
        AccessToken: response.accessToken,
        UserID: response.id,
        ExpiresIn: response.expiresIn,
        ReauthorizeRequiredIn: "",
        Email: response.email,
        FirstName: response.name,
        LastName: "",
        PhotoUrl: response.picture.data.url,
      };
      console.log(usuario);
      externalLogin(usuario, dispatch).then((response) => {
        if (response.status === 200) {
          dispatch({
            type: "OPEN_SNACKBAR",
            openMensaje: {
              open: true,
              message: "Login Exitoso",
            },
          });
          dispatch({
            type: "OPEN_MODAL",
            open: false,
            content: null,
          });
          window.history.pushState(null, null, "/");
          console.log(response);
        } else {
          dispatch({
            type: "OPEN_SNACKBAR",
            openMensaje: {
              open: true,
              message: "Error al guardar",
            },
          });
        }
      });
    }
  };
  let fbButton = (
    <span>
      Facebook<i className="fab fa-facebook-f"></i>
    </span>
  );
  return (
    <React.Fragment>
      <br />
      <FacebookLogin
        appId="1026030154520877"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="btnFacebook"
        textButton={fbButton}
      />
      {sesionUsuario ? sesionUsuario.usuario.email : null}
    </React.Fragment>
  );
}

export default Facebook;
