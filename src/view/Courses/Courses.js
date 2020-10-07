import React, { useState, useEffect } from "react";
import "./Courses.css";
import "react-phone-number-input/style.css";
import PhoneInput, { parsePhoneNumber } from "react-phone-number-input";
import Prueba from "../../components/Information/Prueba";
import { useStateValue } from "../../services/context/store";

function Courses(props) {
  const [value, setValue] = useState("");
  const [{ sesionUsuario }, dispatch] = useStateValue();
  useEffect(() => {
    dispatch({
      type: "CHANGE_INFO",
      data: <Prueba>Courses</Prueba>,
    });
  }, [dispatch, sesionUsuario]);
  function sa() {
    const codeNumber = parsePhoneNumber(value);
    if (codeNumber) {
      console.log(codeNumber);
    }
  }
  return (
    <div className="Courses">
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
      />
      <p>{value}</p>
      <button onClick={sa}>enviar</button>
    </div>
  );
}

export default Courses;
