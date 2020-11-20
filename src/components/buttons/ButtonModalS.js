import "./style/ButtonModalS.css";
import user from "../../assets/img/user.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { closeSession, changeInfo } from "../../store/actions";
import { validateImg } from "../../utils/Validation";
function ButtonModalS(props) {
  const { sesionUser } = props;
  const { t } = useTranslation("header");

  function cerrar() {
    props.closeSession();
    localStorage.removeItem("token_seguridad");
    localStorage.removeItem("id");
  }
  function ChangeInfo() {
    // props.changeInfo();
    // dispatch({ data: <Chats /> });
  }
  const BtnEnter = (
    <div className="">
      <Link to="/auth/login" className="ButtonModalS">
        <span className="ButtonModalS__text">{t("enterHead")}</span>
        <i className="fas fa-user-circle"></i>
      </Link>
    </div>
  );
  const menuUser = (
    <div className="userPhoto">
      <div
        className="userPhoto__img"
        style={{
          backgroundImage: sesionUser
            ? `url("${validateImg(sesionUser.user.photoUrl)}")`
            : `url("${user}")`,
          // backgroundImage: `url("${user}")`,
        }}
      ></div>
      <ul className="userPhoto__ul">
        <li className="userPhoto__li">
          <Link to="/Account">
            Mi Perfil <i className="far fa-user"></i>
          </Link>
        </li>
        <li className="userPhoto__li">
          <Link onClick={ChangeInfo} to="/chat">
            Chat
            <i className="fas fa-comments"></i>
          </Link>
        </li>
        <li className="userPhoto__li">
          <Link onClick={cerrar} to="/">
            Cerrar Sesion
            <i className="fas fa-door-open"></i>
          </Link>
        </li>
      </ul>
    </div>
  );

  if (sesionUser) {
    return sesionUser.authenticate ? menuUser : BtnEnter;
  } else {
    return sesionUser;
  }
}

const mapStateToProps = (state) => {
  return {
    sesionUser: state.sesionUser,
  };
};
const mapDispatchToProps = {
  closeSession,
  changeInfo,
};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonModalS);
