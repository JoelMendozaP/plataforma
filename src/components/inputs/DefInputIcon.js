import React from "react";
import "./style/DefInputIcon.css";
function DefInputIcon(props) {
  return (
    <div className="DefInputIcon__div">
      <i className={`fas fa-${props.icon}`}></i>
      <input
        className="DefInputIcon__input"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
<<<<<<< HEAD
        defaultValue={props.defaultValue ? props.defaultValue : null}
=======
        // defaultValue={props.defaultValue ? props.defaultValue : null}
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5
        onChange={props.onChange}
        required
      />
    </div>
  );
}

export default DefInputIcon;
