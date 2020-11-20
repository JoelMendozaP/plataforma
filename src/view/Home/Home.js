import React, { useEffect } from "react";
import { CourseCard } from "../../components/card";
import { connect } from "react-redux";
import { changeInfo } from "../../store/actions";
import { Category } from "../../components/layout";
import "./Home.css";
const Home = (props) => {
  useEffect(() => {
    props.changeInfo(<Category />);
  }, [props]);
  return (
    <div className="Home">
      <h2 className="Home__title">Diplomados</h2>
      <div className="Home__cards">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  changeInfo,
};
export default connect(null, mapDispatchToProps)(Home);
