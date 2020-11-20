import React from "react";
import "./style/ExternalLogin.css";

import FacebookLogin from "react-facebook-login";
import { externalLogin } from "../../services/action/UserAuthAction";
import { openSnackbar, startSession } from "../../store/actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
const Facebook = (props) => {
  const responseFacebook = (response) => {
    if (!response.accessToken) {
      props.openSnackbar("Error al ingresar", true);
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
      console.log("user", usuario);
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
    }
  };
  const fbButton = (
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
        cssClass="btnExternal"
        textButton={fbButton}
      />
    </React.Fragment>
  );
};
const mapDispatchToProps = {
  openSnackbar,
  startSession,
};
export default connect(null, mapDispatchToProps)(withRouter(Facebook));
