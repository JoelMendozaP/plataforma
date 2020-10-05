import React from "react";
import "./InformationPersonal.css";
function InformationPersonal(props) {
  return (
    <div className="InfPersonal">
      <h3>Fecha de Nacimiento: {props.user.dateN}</h3>
      <h3>Genero: {props.user.gender}</h3>
      <h3>Direccion: {props.user.direction}</h3>
      <h3>Codigo Postal: {props.user.postalCode}</h3>
    </div>
  );
}

export default InformationPersonal;
