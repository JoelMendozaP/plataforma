import React from "react";
import "./style/Information.css";
import { useStateValue } from "../../services/context/store";
import Category from "./Category";
function Information(props) {
  const [{ informationR }] = useStateValue();
  const category = <Category />;
  return (
    <div className="itemInformation" id="infor">
      {informationR
        ? informationR.information
          ? informationR.information
          : category
        : category}
    </div>
  );
}

export default Information;
