import "./style/HeaderOption.css";
import { Link } from "react-router-dom";
import { ButtonModalS, Translate } from "../../buttons/index";
import { Notify } from "../../buttons";
import { connect } from "react-redux";
function HeaderOption(props) {
  return (
    <div className="optionList">
      <ul className="optionList__ul">
        <li>
          <ButtonModalS />
        </li>
        <li>
          <Translate />
        </li>
        {props.sesionUser.authenticate ? <li>{<Notify />}</li> : null}
        <li>
          <Link to="/theme" className="iconHeader">
            <i className="fas fa-moon"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    sesionUser: state.sesionUser,
  };
};
export default connect(mapStateToProps, null)(HeaderOption);
