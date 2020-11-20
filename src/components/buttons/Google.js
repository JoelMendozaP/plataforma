import React from "react";
import "./style/ExternalLogin.css";

import GoogleLogin from "react-google-login";
import { externalLogin } from "../../services/action/UserAuthAction";
import { openSnackbar, startSession } from "../../store/actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Google = (props) => {
  const responseGooglef = (response) => {
    props.openSnackbar("Error al ingresar", true);
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
    console.log("userg", usuario);
    externalLogin(usuario).then((response) => {
      console.log("response", response);
      if (response.status === 200) {
        props.openSnackbar("Login Exitoso", true);
        props.startSession(response.data.user, true);
        props.history.push("/");
      } else {
        props.openSnackbar("Error al guardar", true);
      }
    });
  };
  return (
    <GoogleLogin
      clientId="510643267486-phub6ol9cpq7lq01nacs8sft7kj5d0mt.apps.googleusercontent.com"
      render={(renderProps) => (
        <button className="btnExternal" onClick={renderProps.onClick}>
          Google
          <i className="fab fa-google"></i>
        </button>
      )}
      buttonText="Google"
      onSuccess={responseGoogle}
      onFailure={responseGooglef}
      cookiePolicy={"single_host_origin"}
    />
  );
};
const mapDispatchToProps = {
  openSnackbar,
  startSession,
};
export default connect(null, mapDispatchToProps)(withRouter(Google));
