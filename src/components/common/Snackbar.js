import React from "react";
import "./style/Snackbar.css";
import { openSnackbar } from "../../store/actions";
import { connect } from "react-redux";
function Snackbar(props) {
  const { open, message } = props.snackbarReducer;
  if (open) {
    setTimeout(function () {
      props.openSnackbar("", false);
    }, 3000);

    return (
      <div className="snackText">
        <i className="fas fa-circle-notch"></i>
        {message}
      </div>
    );
  }
  return null;
}
const mapStateToProps = (state) => {
  return {
    snackbarReducer: state.snackbarReducer,
  };
};
const mapDispatchToProps = {
  openSnackbar,
};
export default connect(mapStateToProps, mapDispatchToProps)(Snackbar);
