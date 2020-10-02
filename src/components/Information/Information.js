import React from "react";
// import Prueba from "../Prueba";
// import Chats from "./Chats";
import "./Information.css";
import { useStateValue } from "../../services/context/store";
// import { useTranslation } from "react-i18next";
import Category from "./Category";
function Information(props) {
  const [{ informationR }] = useStateValue();
  // const { t } = useTranslation("infoT");

  // const categoria = (
  //   <React.Fragment>
  //     <h2>{t("infCategories")}</h2>
  //     <Prueba />
  //   </React.Fragment>
  // );
  const category = <Category />;
  return (
    <div className="itemInformation">
      {informationR ? informationR.information : category}
    </div>
  );
}

export default Information;
