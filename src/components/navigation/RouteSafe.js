import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useStateValue } from "../../services/context/store";
function RouteSafe({ component: Component, ...rest }) {
  const [{ sesionUsuario }] = useStateValue();
  return (
    <Route
      {...rest}
      render={(props) =>
        sesionUsuario ? (
          sesionUsuario.autenticado === true ? (
            <Component {...props} {...rest} />
          ) : (
            <Redirect to="/auth" />
          )
        ) : (
          <Redirect to="/auth" />
        )
      }
    />
  );
}

export default RouteSafe;
