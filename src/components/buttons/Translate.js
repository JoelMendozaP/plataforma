import "./style/Translate.css";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { changeLang } from "../../services/action/UsuarioAction";
import { useTranslation } from "react-i18next";
import { changeLanguageAction } from "../../store/actions";

const Translate = (props) => {
  const { sesionUser } = props;
  const { i18n } = useTranslation();
  const { t } = useTranslation("language");
  const [locale, setLocale] = useState("es");
  useEffect(() => {
    if (sesionUser.user && sesionUser.user.language) {
      var lang = sesionUser.user.language.code;
      setLocale(lang);
      i18n.changeLanguage(lang);
    }
  }, [sesionUser, i18n]);

  const handleChangeLocale = (lan) => {
    setLocale(lan);
    i18n.changeLanguage(lan);
    props.changeLanguageAction({
      code: lan,
    });
    if (sesionUser) {
      if (sesionUser.user.id) {
        changeLang(
          {
            LanguageCode: lan,
          },
          sesionUser.user
        ).then((response) => {
          console.log("changeLang", response);
        });
      }
    }
  };

  return (
    <div className="selectTranslate">
      <select
        value={locale}
        onChange={(e) => handleChangeLocale(e.target.value)}
      >
        <option value="es">{t("esLanguage")}</option>
        <option value="en">{t("enLanguage")}</option>
        <option value="de">{t("deLanguage")}</option>
        <option value="fr">{t("frLanguage")}</option>
        <option value="pt">{t("ptLanguage")}</option>
      </select>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    sesionUser: state.sesionUser,
  };
};
const mapDispatchToProps = {
  changeLanguageAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Translate);
