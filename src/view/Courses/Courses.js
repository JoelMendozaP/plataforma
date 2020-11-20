<<<<<<< HEAD
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
=======
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeInfo } from "../../store/actions";
import { Prueba } from "../../components/layout";

const Courses = (props) => {
  useEffect(() => {
    props.changeInfo(<Prueba>Courses</Prueba>);
  }, [props]);
  return <div>Courses</div>;
};

const mapDispatchToProps = {
  changeInfo,
};
export default connect(null, mapDispatchToProps)(Courses);
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5
