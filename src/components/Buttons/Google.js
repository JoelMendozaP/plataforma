import React from "react";
import GoogleLogin from "react-google-login";
import { useStateValue } from "../../services/context/store";
import { externalLogin } from "../../services/actions/UsuarioAction";
import "./style/Google.css";
function Google(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const responseGooglef = (response) => {
    console.log("falla", response);
    dispatch({
      type: "OPEN_SNACKBAR",
      openMensaje: {
        open: true,
        message: "Error al ingresar",
      },
    });
  };
  const responseGoogle = (response) => {
    const usuario = {
      RegisterOption: "Google",
      AccessToken: response.accessToken,
      UserID: response.googleId,
      ExpiresIn: response.tokenObj.expires_in,
      ReauthorizeRequiredIn: "",
      Email: response.profileObj.email,
      FirstName: response.profileObj.givenName,
      LastName: response.profileObj.familyName,
      PhotoUrl: response.profileObj.imageUrl,
    };

    externalLogin(usuario, dispatch).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: "OPEN_SNACKBAR",
          openMensaje: {
            open: true,
            message: "Login Exitoso",
          },
        });
        window.history.pushState(null, null, "/");
        props.onClose();
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
  };
  return (
    <GoogleLogin
      clientId="510643267486-phub6ol9cpq7lq01nacs8sft7kj5d0mt.apps.googleusercontent.com"
      render={(renderProps) => (
        <button className="btnGoogle" onClick={renderProps.onClick}>
          Google
          <i className="fab fa-google"></i>
          {sesionUsuario ? sesionUsuario.usuario.FirstName : null}
        </button>
      )}
      buttonText="Google"
      onSuccess={responseGoogle}
      onFailure={responseGooglef}
      cookiePolicy={"single_host_origin"}
    />
  );
}
export default Google;
