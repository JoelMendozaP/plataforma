import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeInfo } from "../../store/actions";
import { Prueba } from "../../components/layout";

const Calendar = (props) => {
  useEffect(() => {
    props.changeInfo(<Prueba>Calendar</Prueba>);
  }, [props]);
  return <div>Calendar</div>;
};

const mapDispatchToProps = {
  changeInfo,
};
export default connect(null, mapDispatchToProps)(Calendar);
