import React from "react";
import Modal from "../../view/Modal/Modal";
import LogoRosa from "../../assets/img/LogoRosa.png";
import FormLR from "../forms/FormLR";
import "./GetIn.css";
function GetIn(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="containerLogin">
        <div className="containerLogin__img">
          <img src={LogoRosa} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuriess
          </p>
          <p>- Lorem Ipsum is simply dummy text of</p>
          <p>- Lorem Ipsum is simply dummy text of</p>
          <p>- Lorem Ipsum is simply dummy text of</p>
        </div>
        <div className="containerLogin__form">
          <FormLR isOpen={props.isOpen} onClose={props.onClose} />
        </div>
      </div>
    </Modal>
  );
}

export default GetIn;
