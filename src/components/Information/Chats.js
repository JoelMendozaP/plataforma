import React from "react";
import { Link } from "react-router-dom";
import UserChat from "../Card/UserChat";
import "./Chats.css";
function Chats(props) {
  return (
    <div>
      <h2>Tus conversasiones</h2>
      <Link className="Chats__Link" to="/chat">
        <UserChat CardCss={"CardA"} notifyCss={"notifyA"} />
      </Link>
      <UserChat CardCss={"CardD"} notifyCss={"notifyD"} />
      <UserChat CardCss={"CardD"} notifyCss={"notifyD"} />
      <UserChat CardCss={"CardD"} notifyCss={"notifyD"} />
      <UserChat CardCss={"CardD"} notifyCss={"notifyD"} />
      <UserChat CardCss={"CardD"} notifyCss={"notifyD"} />
      <UserChat CardCss={"CardD"} notifyCss={"notifyD"} />
    </div>
  );
}

export default Chats;
