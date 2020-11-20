import React from "react";
import user from "../../../assets/img/user.jpg";
import { useTranslation } from "react-i18next";
import { validateImg, validate } from "../../../utils/Validation";
import { connect } from "react-redux";
import { changeInfo } from "../../../store/actions";
import { CardPink } from "../../../components/card";
import "./style/Perfil.css";
import ChangeImage from "./ChangeImage";
function Perfil(props) {
  const { sesionUser, changeInfo } = props;
  const { t } = useTranslation("account");
  function ChangeImg() {
    changeInfo(<ChangeImage />);
  }
  return (
    <div className="Perfil">
      <div className="Perfil__photo">
        <div
          style={{
            backgroundImage: sesionUser
              ? `url("${validateImg(sesionUser.user.photoUrl)}")`
              : `url("${user}")`,
          }}
          className="Perfil__Pimg"
          id="change__Img"
        >
          <div className="Perfil__photoBtn">
            <i className="fas fa-plus" onClick={ChangeImg}></i>
          </div>
        </div>
      </div>
      <div className="Perfil__information">
        <CardPink
          title={t("acUser")}
          data={sesionUser ? validate(sesionUser.user.username) : "Sin dato"}
        />
        <CardPink
          title={t("acName")}
          data={
            sesionUser
              ? (validate(sesionUser.user.firstName),
                validate(sesionUser.user.lastName))
              : ""
          }
        />
        <CardPink
          title={t("acEmail")}
          data={sesionUser ? validate(sesionUser.user.email) : "Sin dato"}
        />
        <CardPink
          title={t("acPhone")}
          data={sesionUser ? validate(sesionUser.user.Number) : "Sin dato"}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sesionUser: state.sesionUser,
  };
};
const mapDispatchToProps = {
  changeInfo,
};
export default connect(mapStateToProps, mapDispatchToProps)(Perfil);
