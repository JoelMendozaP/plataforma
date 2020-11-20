import "./style/EditPerfil.css";
import { Loading } from "../../../components/animation";
import { updateUserService } from "../../../services/action/UsuarioAction";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import PhoneInput, { parsePhoneNumber } from "react-phone-number-input";
import { connect } from "react-redux";
import { updateUser, openSnackbar, changeInfo } from "../../../store/actions";
import { Prueba } from "../../../components/layout";
import { DefInputIcon } from "../../../components/inputs";
function EditPerfil(props) {
  const { sesionUser, updateUser, openSnackbar, changeInfo } = props;
  const { t } = useTranslation("editPerfil");
  const [phone, setPhone] = useState(undefined);
  const [user, setUser] = useState({
    Email: sesionUser.user.email,
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
      openSnackbar("Actulizacion Exitosa", true);
      updateUser({
        ...sesionUser.user,
        firstName: user.Name,
        lastName: user.LastName,
        gender: user.Gender,
        age: user.DateOfBirth,
        nickname: user.Nickname,
        Address: user.Address1,
        postalCode: user.PostalCode,
        Number: phone,
      });
    } else {
      setData((a) => ({ ...a, load: true }));
      openSnackbar("Error al guardar", true);
    }
  }

  const dataSend = async (e) => {
    e.preventDefault();
    try {
      if (formValid(user)) {
        if (phone !== undefined) {
          setData((a) => ({ ...a, load: false }));
          const id = sesionUser.user.id;
          const codeNumber = parsePhoneNumber(phone);
          console.log(user);
          await updateUserService(id, {
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
          openSnackbar("Telefono invalido", true);
        }
      } else {
        openSnackbar("Llene el formulario", true);
      }
    } catch (e) {
      setData((a) => ({ ...a, load: true }));
      console.log(e);
    }
  };

  return (
    <div className="EditPerfil">
      {/* <h2>{t("epEditar")}</h2> */}
      <br />
      <form action="">
        <h3>{t("epDataU")}</h3>
        <DefInputIcon
          type="text"
          name="Nickname"
          placeholder={t("Nickname")}
          icon="user"
          onChange={handleChange}
        />
        <DefInputIcon
          type="text"
          name="Name"
          placeholder={t("epName")}
          icon="signature"
          onChange={handleChange}
          value={user.Name}
        />
        <DefInputIcon
          type="text"
          name="LastName"
          placeholder={t("epLastN")}
          icon="digital-tachograph"
          onChange={handleChange}
          value={user.LastName}
        />
        <h3>Datos Personales</h3>
        <div className="form__InputSelect">
          <select
            className="fselect"
            value={user.Gender}
            onChange={handleChange}
            name="Gender"
          >
            <option value="female">{t("female")}</option>
            <option value="male">{t("male")}</option>
          </select>
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
        
        <DefInputIcon
          type="text"
          name="Address1"
          placeholder={t("epDirection")}
          icon="directions"
          onChange={handleChange}
          value={user.Address1}
        />
        <DefInputIcon
          type="text"
          name="Address2"
          placeholder={t("epDirection")}
          icon="directions"
          onChange={handleChange}
          value={user.Address2}
        />
        <DefInputIcon
          type="number"
          name="PostalCode"
          placeholder={t("epCodeP")}
          icon="mail-bulk"
          onChange={handleChange}
          value={user.PostalCode}
        />
        <PhoneInput
          placeholder="Ingresa tu numero"
          value={phone}
          onChange={setPhone}
        />
        {data.load ? (
          <div className="EditPerfil__btn">
            <button onClick={dataSend} className="EditPerfil__btnG">
              {t("epSave")}
            </button>
            <button
              onClick={() => changeInfo(<Prueba>Account</Prueba>)}
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

const mapStateToProps = (state) => {
  return {
    sesionUser: state.sesionUser,
  };
};
const mapDispatchToProps = {
  updateUser,
  openSnackbar,
  changeInfo,
};
export default connect(mapStateToProps, mapDispatchToProps)(EditPerfil);
