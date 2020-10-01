import React from "react";
import user from "../../assets/img/user.jpg";
import "./UserChat.css";
function UserChat(props) {
  //   function validar(img) {
  //     if (img === undefined || img === null) {
  //       return user;
  //     }
  //     return img;
  //   }
  return (
    <div className={`UserChat ${props.CardCss}`}>
      <div
        className="UserChat__avatar"
        style={{
          backgroundImage: `url("${user}")`,
        }}
        // style={{
        //     backgroundImage: sesionUsuario
        //       ? `url("${validar(sesionUsuario.usuario.photoUrl)}")`
        //       : `url("${user}")`,
        //   }}
      ></div>
      <div className="UserChat__content">
        <div className="UserChat__Cname">Joel Mendoza</div>
        <div className="UserChat__Cchat">
          Lorem Ipsum is simply dummy text of the printing and typesetti
          industry.
        </div>
      </div>
      <div className="UserChat__info">
        <div className={`${props.notifyCss} UserChat__Inotify`}>1</div>
        {/* <div className="UserChat__Inotify UserChatA">1</div> */}
        <div className="UserChat__Idate">21/09</div>
        <div className="UserChat__Ihour">11:08 pm</div>
      </div>
    </div>
  );
}

export default UserChat;
