import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./style/Translate.css";
import { changeLang } from "../../services/actions/UsuarioAction";
import { useStateValue } from "../../services/context/store";
function Translate() {
  const { i18n } = useTranslation();
  const { t } = useTranslation("language");
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const [locale, setLocale] = useState("es");

  useEffect(() => {
    var lang = "es";
    if (sesionUsuario && sesionUsuario.usuario.language) {
      lang = sesionUsuario.usuario.language.code;
    }
    setLocale(lang);
  }, [sesionUsuario]);

  const handleChangeLocale = (lan) => {
    setLocale(lan);
    i18n.changeLanguage(lan);
    dispatch({
      type: "CABIAR_IDIOMA",
      nuevoLang: {
        code: lan,
      },
    });
    if (sesionUsuario) {
      if (sesionUsuario.usuario.id) {
        changeLang(
          {
            LanguageCode: lan,
          },
          sesionUsuario.usuario
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
      </select>
    </div>
  );
}

export default Translate;
