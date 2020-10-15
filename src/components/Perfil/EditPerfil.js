import "./style/EditPerfil.css";

import { updateUser } from "../../services/actions/UsuarioAction";
import { useStateValue } from "../../services/context/store";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import PhoneInput, { parsePhoneNumber } from "react-phone-number-input";
import Loading from "../animation/Loading";
function EditPerfil(props) {
  const { t } = useTranslation("editPerfil");
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const [phone, setPhone] = useState(undefined);
  const [user, setUser] = useState({
    Email: sesionUsuario.usuario.email,
    Name: "",
    LastName: "",
    Gender: "",
    DateOfBirth: "",
    Nickname: "",
    CountryAddressId: "1",
    CityAddressId: "1",
    Address1: "",
    Address2: "",
    PostalCode: "",
  });
  const [data, setData] = useState({
    errors: {
      Name: "",
      LastName: "",
      Gender: "",
      DateOfBirth: "",
      Nickname: "",
      Address1: "",
      Address2: "",
      PostalCode: "",
    },
    load: true,
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // let errors = { ...data.errors };
    // if (value.length < 1) {
    //   // var variable = `errors.${name}`;
    //   errors.Name = "requerido";
    // }
    setUser((a) => ({
      ...a,
      [name]: value,
    }));
    // setData((a) => ({
    //   ...a,
    //   errors,
    // }));
  };
  const formValid = (val) => {
    let valid = true;
    // Object.values(val.errors).forEach((val) => {
    //   val.length > 0 && (valid = false);
    // });
    Object.values(val).forEach((val) => {
      val === "" && (valid = false);
    });
    return valid;
  };

  function save(res) {
    if (res.status === 200) {
      setData((a) => ({ ...a, load: true }));
      dispatch({
        type: "OPEN_SNACKBAR",
        openMensaje: {
          open: true,
          message: "Actulizacion Exitosa",
        },
      });
      dispatch({
        type: "ACTUALIZAR_USUARIO",
        nuevoUsuario: {
          ...sesionUsuario.usuario,
          firstName: user.Name,
          lastName: user.LastName,
          gender: user.Gender,
          age: user.DateOfBirth,
          nickname: user.Nickname,
          Address: user.Address1,
          postalCode: user.PostalCode,
          Number: phone,
        },
      });
    } else {
      setData((a) => ({ ...a, load: true }));
      dispatch({
        type: "OPEN_SNACKBAR",
        openMensaje: {
          open: true,
          message: "Error al guardar",
        },
      });
    }
  }

  const dataSend = async (e) => {
    e.preventDefault();
    try {
      if (formValid(user)) {
        if (phone !== undefined) {
          setData((a) => ({ ...a, load: false }));
          const id = sesionUsuario.usuario.id;
          const codeNumber = parsePhoneNumber(phone);
          console.log(user);
          await updateUser(id, {
            ...user,
            Country: codeNumber.country,
            CountryCode: codeNumber.countryCallingCode,
            NationalNumber: codeNumber.nationalNumber,
            Number: codeNumber.number,
          }).then((response) => {
            console.log("response update", response);
            save(response);
          });
        } else {
          dispatch({
            type: "OPEN_SNACKBAR",
            openMensaje: {
              open: true,
              message: "Telefono invalido",
            },
          });
        }
      } else {
        dispatch({
          type: "OPEN_SNACKBAR",
          openMensaje: {
            open: true,
            message: "Llene el formulario",
          },
        });
      }
    } catch (e) {
      setData((a) => ({ ...a, load: true }));
      console.log(e);
    }
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
            placeholder={t("Nickname")}
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
        {/* <div className="form__Input">
          <input
            className="formControl"
            type="number"
            name="phone"
            placeholder={t("epPhone")}
            defaultValue={user.phone}
            onChange={handleChange}
          />
          <i className="fas fa-mobile"></i>
        </div> */}
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

        <PhoneInput
          placeholder="Enter phone number"
          value={phone}
          onChange={setPhone}
        />
        {data.load ? (
          <div className="EditPerfil__btn">
            <button onClick={dataSend} className="EditPerfil__btnG">
              {t("epSave")}
            </button>
            <button
              onClick={() => window.location.reload()}
              className="EditPerfil__btnC"
            >
              {t("epCancel")}
            </button>
          </div>
        ) : (
          <Loading />
        )}
      </form>
    </div>
  );
}

export default EditPerfil;
