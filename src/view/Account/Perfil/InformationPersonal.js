import React from "react";
import "./style/InformationPersonal.css";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { validate } from "../../../utils/Validation";
import { CardPink } from "../../../components/card";
function InformationPersonal(props) {
  const { sesionUser } = props;
  const { t } = useTranslation("account");
  return (
    <div className="">
      <CardPink
        title={t("Birthdate")}
        data={sesionUser ? validate(sesionUser.user.age) : "Sin dato"}
      />
      <CardPink
        title={t("gender")}
        data={sesionUser ? validate(sesionUser.user.gender) : "Sin dato"}
      />
      <CardPink
        title={t("address")}
        data={sesionUser ? validate(sesionUser.user.Address) : "Sin dato"}
      />
      <CardPink
        title={t("postalCode")}
        data={sesionUser ? validate(sesionUser.user.postalCode) : "Sin dato"}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sesionUser: state.sesionUser,
  };
};
export default connect(mapStateToProps, null)(InformationPersonal);
