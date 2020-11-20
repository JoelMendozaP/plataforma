import React from "react";
import "./style/Information.css";
import Category from "./Category";
import { connect } from "react-redux";

const Information = (props) => {
  const informationR = props.informationComponent;
  return (
    <div className="" id="infor">
      {informationR ? informationR : <Category />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    informationComponent: state.informationComponent,
  };
};
export default connect(mapStateToProps, null)(Information);
