import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeInfo } from "../../store/actions";
import { Prueba } from "../../components/layout";

const Courses = (props) => {
  useEffect(() => {
    props.changeInfo(<Prueba>Courses</Prueba>);
  }, [props]);
  return <div>Courses</div>;
};

const mapDispatchToProps = {
  changeInfo,
};
export default connect(null, mapDispatchToProps)(Courses);
