import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./style/EditPerfil.css";

function EditPerfil(props) {
  const { t } = useTranslation("editPerfil");
  const [user, setUser] = useState({
    Email: "",
    Name: "",
    LastName: "",
    Gender: "",
    DateOfBirth: "",
    Nickname: "",
    CountryAddressId: "",
    CityAddressId: "",
    Address1: "",
    Address2: "",
    PostalCode: "",
    phone: {
      country: "",
      countryCallingCode: "",
      nationalNumber: "",
      number: "",
    },
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };

  return (
    <div className="EditPerfil">
      <h2>{t("epEditar")}</h2>
      <form action="">
        <h3>{t("epDataU")}</h3>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="Nickname"
            placeholder={t("epUsr")}
            value={user.Nickname}
            onChange={handleChange}
          />
          <i className="fas fa-user"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="Name"
            placeholder={t("epName")}
            value={user.Name}
            onChange={handleChange}
          />
          <i className="fas fa-signature"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="LastName"
            placeholder={t("epLastN")}
            value={user.LastName}
            onChange={handleChange}
          />
          <i className="fas fa-digital-tachograph"></i>
        </div>
        <h3>Datos Personales</h3>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="Gender"
            placeholder={t("epGener")}
            value={user.Gender}
            onChange={handleChange}
          />
          <i className="fas fa-dna"></i>
        </div>
        <div className="form__InputDate">
          <input
            className="formControl"
            type="date"
            name="DateOfBirth"
            placeholder={t("epDate")}
            value={user.DateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="number"
            name="phone"
            placeholder={t("epPhone")}
            defaultValue={user.phone}
            onChange={handleChange}
          />
          <i className="fas fa-mobile"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="Address1"
            placeholder={t("epDirection")}
            defaultValue={user.Address1}
            onChange={handleChange}
          />
          <i className="fas fa-directions"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="Address2"
            placeholder={t("epDirection")}
            defaultValue={user.Address2}
            onChange={handleChange}
          />
          <i className="fas fa-directions"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="number"
            name="PostalCode"
            placeholder={t("epCodeP")}
            defaultValue={user.PostalCode}
            onChange={handleChange}
          />
          <i className="fas fa-mail-bulk"></i>
        </div>
        <div className="EditPerfil__btn">
          <button className="EditPerfil__btnG">{t("epSave")}</button>
          <button
            onClick={() => window.location.reload()}
            className="EditPerfil__btnC"
          >
            {t("epCancel")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPerfil;
