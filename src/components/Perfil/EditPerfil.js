import React from "react";
import { useTranslation } from "react-i18next";
import "./EditPerfil.css";

function EditPerfil(props) {
  const { t } = useTranslation("editPerfil");
  return (
    <div className="EditPerfil">
      <h2>{t("epEditar")}</h2>
      <form action="">
        <h3>{t("epDataU")}</h3>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="username"
            placeholder={t("epUsr")}
            defaultValue={props.user.username}
            onChange={props.handleChange}
          />
          <i className="fas fa-user"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="name"
            placeholder={t("epName")}
            onChange={props.handleChange}
            defaultValue={props.user.name}
          />
          <i className="fas fa-signature"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="lastname"
            placeholder={t("epLastN")}
            defaultValue={props.user.lastname}
            onChange={props.handleChange}
          />
          <i className="fas fa-digital-tachograph"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="email"
            name="email"
            placeholder={t("Correo")}
            defaultValue={props.user.email}
            onChange={props.handleChange}
          />
          <i className="fas fa-envelope"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="number"
            name="phone"
            placeholder={t("epPhone")}
            defaultValue={props.user.phone}
            onChange={props.handleChange}
          />
          <i className="fas fa-mobile"></i>
        </div>
        <h3>Datos Personales</h3>
        <div className="form__InputDate">
          {/* <label for="party">Fecha de nacimiento</label> */}
          <input
            className="formControl"
            type="date"
            name="dateN"
            placeholder={t("epDate")}
            defaultValue={props.user.dateN}
            onChange={props.handleChange}
          />
          {/* <i className="fas fa-calendar-check"></i> */}
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="number"
            name="gender"
            placeholder={t("epGener")}
            defaultValue={props.user.gender}
            onChange={props.handleChange}
          />
          <i className="fas fa-dna"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="direction"
            placeholder={t("epDirection")}
            defaultValue={props.user.direction}
            onChange={props.handleChange}
          />
          <i className="fas fa-directions"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="number"
            name="postalCode"
            placeholder={t("epCodeP")}
            defaultValue={props.user.postalCode}
            onChange={props.handleChange}
          />
          <i className="fas fa-mail-bulk"></i>
        </div>
        <div className="EditPerfil__btn">
          <button className="EditPerfil__btnG">{t("epSave")}</button>
          <button className="EditPerfil__btnC">{t("epCancel")}</button>
        </div>
      </form>
    </div>
  );
}

export default EditPerfil;
