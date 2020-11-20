<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Message from "../../components/Card/Message";
import user from "../../assets/img/user.jpg";
import Chats from "../../components/Information/Chats";
import "./Chat.css";
import { useStateValue } from "../../services/context/store";
import {
  getConversation,
  sendMessageAction,
  getChatBalloons,
} from "../../services/actions/UserChats";
var idRR = 0;
var conUser = null;
function Chat(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const [conversation, setConversation] = useState({
    addConversation: "",
    startConversation: false,
    conversationUsers: null,
    inputMessage: "",
    numMsj: 0,
  });
  const [listChat, setListChat] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setConversation((a) => ({
      ...a,
      [name]: value,
    }));
    if (name === "addConversation") {
      idRR = value;
    }
  };
  const addButton = (e) => {
    e.preventDefault();
    const id = sesionUsuario.usuario.id;
    getChatBalloons(id, idRR).then((response) => {
      console.log("addButton response", response);
      if (response.status === 200) {
        setConversation((a) => ({
          ...a,
          startConversation: true,
          numMsj: response.data.length,
        }));
        setListChat([]);
        const c = response.data.length;
        var dataChat;
        for (let i = 0; i < c; i++) {
          dataChat = response.data[c - i - 1];
          const typeMess =
            dataChat.senderId !== id ? "other__message" : "you__message";
          setListChat((a) => [
            ...a,
            <Message key={dataChat.id - 1} typeM={typeMess} time="11:08">
              {dataChat.content ? dataChat.content : null}
            </Message>,
          ]);
        }
      }
    });
  };
  useEffect(() => {
    if (sesionUsuario && sesionUsuario.usuario.id) {
      const id = sesionUsuario.usuario.id;
      getConversation(id).then((response) => {
        console.log("uff response", response);
        setConversation((a) => ({
          ...a,
          conversationUsers: response.data,
        }));
        conUser = response.data;
        console.log("datos", conUser);
      });
      dispatch({
        type: "CHANGE_INFO",
        data: (
          <Chats
            addButton={addButton}
            onChange={handleChange}
            conversationUsers={conUser}
          />
        ),
      });
    }
  }, [sesionUsuario]);
  const sendMessage = () => {
    if (conversation.inputMessage !== "") {
      const id = sesionUsuario.usuario.id;
      const body = {
        SenderId: id,
        RecipientId: idRR,
        Content: conversation.inputMessage,
      };
      sendMessageAction(id, body).then((response) => {
        console.log("send response", response);
        if (response.status === 201) {
          setConversation((a) => ({
            ...a,
            inputMessage: "",
          }));
          setListChat((a) => [
            ...a,
            <Message
              key={listChat.length + 1}
              typeM="you__message"
              time="11:08"
            >
              {conversation.inputMessage}
            </Message>,
          ]);
        }
      });
    } else {
      console.log("no hay");
    }
  };

  const start = (
    <div className="Chat">
      <div className="Chat__head">
        <div className="Chat__title">Conversación</div>
      </div>
      <div className="Chat__action">
        {conversation.addConversation
          ? conversation.addConversation
          : "no hay usuario"}{" "}
        <br />
        Selecciona una conversación para comenzar
      </div>
    </div>
  );

  const data = (
    <div className="Chat">
      <div className="Chat__head">
        <div
          className="Chat__headImg"
          style={{
            backgroundImage: `url("${user}")`,
          }}
        ></div>
        <div className="Chat__headName">
          {conversation.addConversation
            ? conversation.addConversation
            : "Joel Mendoza"}
        </div>
        <div className="Chat__headOpt">
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <div className="Chat__conversation">{listChat ? listChat : null}</div>

      <div className="Chat__options">
        <div className="Chat__optEmoji">
          <i className="fas fa-smile"></i>
        </div>
        <div className="Chat__optInput">
          <input
            placeholder="Escribe tu mensaje"
            type="text"
            name="inputMessage"
            onChange={handleChange}
            value={conversation.inputMessage}
          />
        </div>
        <div className="Chat__optEnv">
          <i className="fas fa-paper-plane"></i>
        </div>
        <button onClick={sendMessage}>
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );

  if (conversation.startConversation === false) {
    return start;
  } else {
    return data;
  }
}
=======
import React from "react";

const Chat = () => {
  return <div>Chat</div>;
};
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5

export default Chat;
