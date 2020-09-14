import React from "react";
import "./Information.css";
import { useStateValue } from "../../services/context/store";
// import Prueba from "../Prueba";
function Information(props) {
  const [{ informationR }] = useStateValue();

  const categoria = <h2>Categorias</h2>;
  return (
    <div className="itemInformation">
      {informationR ? informationR.information : categoria}
    </div>
  );
}

export default Information;
