import React, { useState } from "react";
import "./Courses.css";
import "react-phone-number-input/style.css";
import PhoneInput, {
  parsePhoneNumber,
  formatPhoneNumber,
} from "react-phone-number-input";

function Courses(props) {
  const [value, setValue] = useState("");

  function sa() {
    const codeNumber = parsePhoneNumber(value);
    if (codeNumber) {
      console.log(codeNumber.country);
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
