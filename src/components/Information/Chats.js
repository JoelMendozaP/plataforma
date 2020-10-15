import React, { useState } from "react";
import DefInputIcon from "../inputs/DefInputIcon";
// import { Link, NavLink } from "react-router-dom";
// import UserChat from "../Card/UserChat";
import "./style/Chats.css";
function Chats(props) {
  const [add, setAdd] = useState(false);
  const changeAdd = () => {
    setAdd(!add);
  };
  return (
    <div className="Chats">
      <h2>Tus conversasiones</h2>
      <div className="Chats__option">
        <span>Todos los contactos</span>
        <div className="Chats__icons">
          <i className="fas fa-stream"></i>
          <i className="fas fa-search"></i>
          <i
            onClick={changeAdd}
            className={`fas fa-${add ? "times" : "plus"} Chats__plus`}
          ></i>
        </div>
      </div>
      <div className="Chats__body">
        {add === true && (
          <div className="Chats__addInput">
            Introduzca el email con el que desea iniciar conversación
            <form className="Chats__addForm" action="">
              <DefInputIcon
                onChange={props.onChange}
                type="number"
                placeholder="id del usuario"
                icon="envelope"
                name="addConversation"
              ></DefInputIcon>
              <button onClick={props.addButton}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        )}
        <div className="Chats__cards">
          {props.conversationUsers === [] ? (
            "hay"
          ) : (
            <span className="Chats__empty">
              No tiene conversasiones inicie una.
            </span>
          )}
        </div>
        {/* <button onClick={props.onChange}>
        <UserChat CardCss={"CardA"} notifyCss={"notifyA"} />
      </button> */}

        {/* <button onClick={dd("William")}>
        <UserChat CardCss={"CardD"} notifyCss={"notifyD"} />
      </button>

      <button onClick={dd("Mendoza")}>
        <UserChat CardCss={"CardD"} notifyCss={"notifyD"} />
      </button> */}

        {/* <Link className="Chats__Link" to="/chat">
        <UserChat CardCss={"CardA"} notifyCss={"notifyA"} />
      </Link>
      <UserChat CardCss={"CardD"} notifyCss={"notifyD"} />
      <UserChat CardCss={"CardD"} notifyCss={"notifyD"} />
      <UserChat CardCss={"CardD"} notifyCss={"notifyD"} />
      <UserChat CardCss={"CardD"} notifyCss={"notifyD"} />
      <UserChat CardCss={"CardD"} notifyCss={"notifyD"} />
      <UserChat CardCss={"CardD"} notifyCss={"notifyD"} /> */}
      </div>
    </div>
  );
}

export default Chats;
