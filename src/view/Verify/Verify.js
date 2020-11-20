import "./Verify.css";
import React from "react";

import { connect } from "react-redux";
import { useEffect } from "react";
import { verifykey } from "../../services/action/UsuarioAction";
import { withRouter } from "react-router-dom";
import { openSnackbar } from "../../store/actions";

function Verify(props) {
  useEffect(() => {
    const { sesionUser, openSnackbar } = props;
    const pp = new URLSearchParams(window.location.search);
    const q = pp.get("verifyKey");
    let user = {};
    const verifyK = async (e) => {
      try {
        await verifykey(user).then((response) => {
          console.log(" response", response);
          validate(response);
        });
      } catch (e) {
        console.log(e);
      }
    };
    function validate(res) {
      if (res.status === 200) {
        openSnackbar("Correo validado Correctamente", true);
      } else {
        openSnackbar(res.data, true);
      }
      props.history.push("/home");
    }
    if (sesionUser && sesionUser.user) {
      if (q) {
        user = { email: sesionUser.user.email, verifyKey: q };
        console.log(user);
        verifyK();
      }
    }
  }, [props]);

  return <div className="Verify">Verificando Email...</div>;
}

const mapStateToProps = (state) => {
  return {
    sesionUser: state.sesionUser,
  };
};
const mapDispatchToProps = {
  openSnackbar,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Verify));
