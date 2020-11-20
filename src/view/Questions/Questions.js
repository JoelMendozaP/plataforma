import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeInfo } from "../../store/actions";
import { Prueba } from "../../components/layout";

const Questions = (props) => {
  useEffect(() => {
    props.changeInfo(<Prueba>Questions</Prueba>);
  }, [props]);
  return <div>Questions</div>;
};

const mapDispatchToProps = {
  changeInfo,
};
export default connect(null, mapDispatchToProps)(Questions);
