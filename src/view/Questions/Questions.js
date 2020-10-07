import React, { useEffect } from "react";
import { useStateValue } from "../../services/context/store";
import Prueba from "../../components/Information/Prueba";

function Questions(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  useEffect(() => {
    dispatch({
      type: "CHANGE_INFO",
      data: <Prueba>Questions</Prueba>,
    });
  }, [dispatch, sesionUsuario]);
  return <div>Questions</div>;
}

export default Questions;
