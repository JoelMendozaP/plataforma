import React, { useState, useEffect } from "react";
import { SendVerify } from "../../services/action/UsuarioAction";
import { connect } from "react-redux";
import { openSnackbar } from "../../store/actions";
import "./style/Notify.css";
function Notify(props) {
  const [view, setView] = useState({
    activate: false,
    list: [],
  });
  const swap = () => {
    setView((a) => ({
      ...a,
      activate: !view.activate,
    }));
  };
  useEffect(() => {
    const { sesionUser, openSnackbar } = props; 
    const verifySend = async (e) => {
      try {
        const user = { email: sesionUser.user.email };
        await SendVerify(user).then((response) => {
          console.log(" response", response);
          validate(response);
        });
      } catch (e) {
        console.log(e);
      }
    };
    function validate(res) {
      if (res.status === 200) {
        openSnackbar("Se envio Correctamente", true);
      } else {
        openSnackbar(res.data, true);
      }
      // props.history.push("/home");
    }
    if (sesionUser && sesionUser.user.email) {
      setView((a) => ({
        ...a,
        list: [
          ...a.list,
          <li onClick={verifySend} key="1" className="Notify__li">
            <span>Verificar Correo</span>
            <i className="fas fa-arrow-right"></i>
          </li>,
          <li onClick={verifySend} key="1" className="Notify__li">
            <span>Verificar asd</span>
            <i className="fas fa-arrow-right"></i>
          </li>,
        ],
      }));
    }
  }, [props]);
  return (
    <div className="Notify">
      <div className="Notify__icon">
        <i onClick={swap} className="fas fa-bell"></i>
        <div className="Notify__circle"></div>
      </div>
      {view.activate ? (
        <div className="notify__list">
          <div className="Notify__header">
            <span>Tus notificaciones</span>
            <i className="fas fa-cog"></i>
          </div>
          <ul className="Notify__ul">{view.list}</ul>
          <span className="notify__span">Ver todas las notificaciones</span>
        </div>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sesionUser: state.sesionUser,
  };
};
const mapDispatchToProps = {
  openSnackbar,
};
export default connect(mapStateToProps, mapDispatchToProps)(Notify);
