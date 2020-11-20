import React, { useEffect } from "react";
<<<<<<< HEAD
import Prueba from "../../components/Information/Prueba";
import { useStateValue } from "../../services/context/store";
import Span from "../../components/typography/Span";
import "./Calendar.css";
function Calendar(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  // const [data, setData] = useState();
  useEffect(() => {
    dispatch({
      type: "CHANGE_INFO",
      data: <Prueba>Calendar</Prueba>,
    });
  }, [dispatch, sesionUsuario]);

  return (
    <div className="Calendar">
      <div className="Calendar__title">
        Responsive App Landing Page Template
      </div>
      <span className="Calendar__h2">About The App</span>
      <span className="Calendar__p">
        Sed ut perspiciatis unde omnis iste natus error. Sit voluptatem
        accusantium doloremque laudantium. Totam rem aperiam eaque ipsa.
      </span>
      <Span class_span="t1">Tipografia del sistema</Span>
      <Span class_span="t2">Tipografia del sistema</Span>
      <Span class_span="t3">Tipografia del sistema</Span>
      <Span class_span="t4">Tipografia del sistema</Span>
    </div>
  );
}

export default Calendar;
=======
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
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5
