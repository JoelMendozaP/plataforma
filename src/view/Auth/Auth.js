import React from "react";
import GetIn from "../../components/GetIn/GetIn";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useStateValue } from "../../services/context/store";
function Auth(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();

  useEffect(() => {
    if (sesionUsuario) {
      if (sesionUsuario.autenticado) {
        props.history.push("/");
      } else {
        dispatch({
          type: "OPEN_MODAL",
          open: true,
          content: <GetIn />,
        });
        props.history.push("/auth/login");
      }
    } else {
      dispatch({
        type: "OPEN_MODAL",
        open: true,
        content: <GetIn />,
      });
      props.history.push("/auth/login");
    }
  }, [props, sesionUsuario, dispatch]);

  return <div>hola </div>;
}

export default withRouter(Auth);
