import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useStateValue } from "../../services/context/store";
function RouteSafe({ component: Component, ...rest }) {
  const [{ sesionUsuario }] = useStateValue();
  function redirect(props) {
    const id = window.localStorage.getItem("id");
    if (id) {
      return <Component {...props} {...rest} />;
    } else {
      return validate(props);
    }
  }
  const validate = (props) =>
    sesionUsuario ? (
      sesionUsuario.autenticado === true ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to="/auth" />
      )
    ) : (
      <Redirect to="/auth" />
    );

  return <Route {...rest} render={(props) => redirect(props)} />;
}

export default RouteSafe;
