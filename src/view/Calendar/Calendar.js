import React, { useEffect } from "react";
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
