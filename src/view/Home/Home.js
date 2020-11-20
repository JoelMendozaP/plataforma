<<<<<<< HEAD
import React, { Component } from "react";
import Content from "../../components/Content/Content";
import Information from "../../components/Information/Information";

class Home extends Component {
  state = {
    information: 0,
  };
  handleInformation = (info) => {
    this.setState({ information: info });
    console.log("funcion del padre");
  };
  render() {
    return (
      <React.Fragment>
        <Content
          onChangeColor={this.props.onChangeColor}
          colorValue={this.props.colorValue}
          handleInformation={this.handleInformation}
        />
        <Information
          onInformation={this.state.information}
          handleInformation={this.handleInformation}
        />
      </React.Fragment>
    );
  }
}

export default Home;
=======
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
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5
