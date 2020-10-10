import React, { useEffect } from "react";
import Message from "../../components/Card/Message";
import user from "../../assets/img/user.jpg";
import Chats from "../../components/Information/Chats";
import "./Chat.css";
import { useStateValue } from "../../services/context/store";

function Chat(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  useEffect(() => {
    dispatch({
      type: "CHANGE_INFO",
      data: <Chats />,
    });
  }, [dispatch, sesionUsuario]);
  return (
    <div className="Chat">
      <div className="Chat__head">
        <div
          className="Chat__headImg"
          style={{
            backgroundImage: `url("${user}")`,
          }}
        ></div>
        <div className="Chat__headName">Joel Mendoza</div>
        <div className="Chat__headOpt">
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <div className="Chat__conversation">
        <Message typeM="other__message" />
        <Message typeM="other__message" />
        <Message typeM="you__message" />
        <Message typeM="you__message" />
        <Message typeM="other__message" />
      </div>
      <div className="Chat__options">
        <div className="Chat__optEmoji">
          <i className="fas fa-smile"></i>
        </div>
        <div className="Chat__optInput">
          <input placeholder="Escribe tu mensaje" type="text" name="" id="" />
        </div>
        <div className="Chat__optEnv">
          <i className="fas fa-paper-plane"></i>
        </div>
      </div>
    </div>
  );
}

export default Chat;
