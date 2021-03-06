import React from "react";
import "./style/Loading.css";
function Loading(props) {
  return (
    <div className="Loading">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
