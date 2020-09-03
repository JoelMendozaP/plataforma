import React from "react";
import Modal from "../../components/Modal/Modal";
function Login(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      Login
    </Modal>
  );
}

export default Login;
