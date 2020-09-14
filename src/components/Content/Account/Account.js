import React from "react";
import Perfil from "../../Perfil/Perfil";
import { useStateValue } from "../../../services/context/store";
import InformationPersonal from "../../Perfil/InformationPersonal";
import EditPerfil from "../../Perfil/EditPerfil";
import "./Account.css";
function Account(props) {
  const [{ informationR }, dispatch] = useStateValue();
  function llamar() {
    dispatch({ data: <EditPerfil /> });
  }
  return (
    <React.Fragment>
      <div className="Account__title">
        <span className="Account__titleSpn">Perfil de Usuario</span>
        <button className="Account__titleBtn" onClick={llamar}>
          Editar Perfil
        </button>
      </div>
      <div className="Account__perfil">
        <Perfil />
      </div>
      <div className="Account__data">
        <InformationPersonal />
      </div>
    </React.Fragment>
  );
}

export default Account;
