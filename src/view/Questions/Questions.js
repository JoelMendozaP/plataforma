<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useStateValue } from "../../services/context/store";
import Prueba from "../../components/Information/Prueba";

function Questions(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const [inf, setInf] = useState({
    disponible: "",
    latitude: "",
    longitude: "",
    formatted: "",
    components: null,
  });

  const getCountry = (position) => {
    const { latitude, longitude } = position.coords;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=92000d6367c24202aeb7fa1ce7ff49de`;
    fetch(url)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        const { formatted, components } = json.results[0];
        setInf((a) => ({
          ...a,
          formatted,
          components,
        }));
      })
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    dispatch({
      type: "CHANGE_INFO",
      data: <Prueba>Questions</Prueba>,
    });

    if ("geolocation" in navigator) {
      console.log("disponible");
      setInf((a) => ({ ...a, disponible: "disponible" }));
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        getCountry(position);
        setInf((a) => ({
          ...a,
          latitude: latitude,
          longitude: longitude,
        }));
      });
    } else {
      console.log("NO está disponible");
      setInf((a) => ({ ...a, disponible: "NO está disponible" }));
    }
  }, [dispatch, setInf, sesionUsuario]);

  const createList = () => {
    let List = [];
    if (inf.components) {
      for (let i = 0; i < 14; i++) {
        // var na = Object.keys(inf.components)[i];
        var v = Object.values(inf.components)[i];
        List.push(<li key={i}>{v}</li>);
      }
      return List;
    }
    return "loading...";
  };

  return (
    <div>
      Questions
      <br />
      <span>
        La ubicacion esta:
        {" " + inf.disponible}
      </span>
      <br />
      <div className="loc">
        <span>
          Latitud:
          {" " + inf.latitude}
        </span>
        <br />
        <span>
          Longitud:
          {" " + inf.longitude}
        </span>
        <br />
        <span>
          Ubicacion:
          {" " + inf.formatted}
        </span>
        <br />
      </div>
      <div className="information">
        <ul>{createList()}</ul>
      </div>
    </div>
  );
}

export default Questions;
=======
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
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5
