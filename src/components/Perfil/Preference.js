import React, { useState, useEffect } from "react";
import PreferenceCheck from "../inputs/PreferenceCheck";
import { UserPreference } from "../../services/actions/UserPreferenceAction";
import { useTranslation } from "react-i18next";
import { changePreference } from "../../services/actions/UserPreferenceAction";
import IntputNumber from "../inputs/IntputNumber";
import InputSelect from "../inputs/InputSelect";
import { useStateValue } from "../../services/context/store";
import "./style/Preference.css";
function Preference(props) {
  const [check, setCheck] = useState([]);
  const { t } = useTranslation("Preference");
  const [{ sesionUsuario }, dispatch] = useStateValue();

  useEffect(() => {
    const idLs = window.localStorage.getItem("id");
    if (idLs) {
      UserPreference(idLs).then((response) => {
        if (response.status === 200) {
          var userPref = response.data.userToReturn.preference;
          for (let i = 1; i <= 12; i++) {
            setCheck((a) => ({
              ...a,
              [Object.keys(userPref)[i]]: Object.values(userPref)[i],
            }));
          }
          var user = response.data.userToReturn;
          setCheck((a) => ({
            ...a,
            LanguageCode: user.language.code,
            UsernameOrEmail: user.email,
          }));
        }
      });
    }
  }, []);

  const onChange = (e) => {
    if (e.target.type === "checkbox") {
      const { name, checked } = e.target;
      setCheck((anterior) => ({
        ...anterior,
        [name]: checked,
      }));
    }
    console.log(e.target.type);
    if (e.target.type === "number" || e.target.type === "select-one") {
      const { name, value } = e.target;
      setCheck((anterior) => ({
        ...anterior,
        [name]: value,
      }));
    }
  };
  const UpdatePref = () => {
    const id = window.localStorage.getItem("id");
    changePreference(id, check).then((response) => {
      var msj = "";
      if (response.status === 200) {
        msj = "Actualizado exitoso";
      } else {
        msj = "Error al actualizar";
      }
      dispatch({
        type: "OPEN_SNACKBAR",
        openMensaje: {
          open: true,
          message: msj,
        },
      });
    });
  };
  const createList = (n, m) => {
    let List = [];
    for (let i = n; i <= m; i++) {
      var na = Object.keys(check)[i];
      var v = Object.values(check)[i];
      List.push(
        <PreferenceCheck key={i} name={na} onChange={onChange} value={v}>
          {t(na)}
        </PreferenceCheck>
      );
    }
    return List;
  };

  return (
    <div className="Preference">
      <div className="Preference__Notify">
        Notificaciones
        <div className="Preference__List">{createList(0, 4)}</div>
      </div>
      <div className="Preference__NEmail">
        Notificaciones de Email
        <div className="Preference__List">{createList(5, 9)}</div>
      </div>
      <div className="Preference__Acount">
        {createList(10, 10)}
        <IntputNumber
          name={Object.keys(check)[11]}
          onChange={onChange}
          value={Object.values(check)[11]}
        >
          {t(Object.keys(check)[11])}
        </IntputNumber>
        <InputSelect
          name={Object.keys(check)[12]}
          onChange={onChange}
          value={Object.values(check)[12]}
        >
          {t(Object.keys(check)[12])}
        </InputSelect>
      </div>
      <div className="Preference__btn">
        <button onClick={UpdatePref} className="EditPerfil__btnG">
          Guardar Configuracion
        </button>
        <button
          onClick={() => window.location.reload()}
          className="EditPerfil__btnC"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default Preference;
