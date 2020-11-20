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
