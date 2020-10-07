import React, { useEffect } from "react";
import Prueba from "../../components/Information/Prueba";
import { useStateValue } from "../../services/context/store";

function Calendar(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "CHANGE_INFO",
      data: <Prueba>Calendar</Prueba>,
    });
  }, [dispatch, sesionUsuario]);

  return <div>Calendar</div>;
}

export default Calendar;
