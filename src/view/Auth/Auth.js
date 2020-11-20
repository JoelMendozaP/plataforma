<<<<<<< HEAD
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

  return null;
}

export default withRouter(Auth);
=======
import Home from "../Home/Home";
import Modal from "../../components/modal/Modal";
import LogoRosa from "../../assets/img/LogoRosa.png";
import ModalLog from "../../components/layout/ModalLog";
import "./style/Auth.css";
const Auth = () => {
  return (
    <div>
      <Home />
      <Modal>
        <div className="containerLog">
          <div className="containerLogin__img">
            <img src={LogoRosa} alt="" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuriess
            </p>
            <p>- Lorem Ipsum is simply dummy text of</p>
            <p>- Lorem Ipsum is simply dummy text of</p>
            <p>- Lorem Ipsum is simply dummy text of</p>
          </div>
          <div className="containerLogin__form">
            <ModalLog />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Auth;
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5
