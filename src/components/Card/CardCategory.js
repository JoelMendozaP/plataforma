import React from "react";
import "./style/CardCategory.css";
import { useTranslation } from "react-i18next";
function CardCategory(props) {
  const { t } = useTranslation("category");
  return (
    <div className="CardCategory">
      <div className="CardCategory__Text">
        <div className="CardCategory__Name">{t("title")}</div>
        <div className="CardCategory__Description">{t("cont")}</div>
      </div>
      <div className="CardCategory__Icon">
        <i className="fas fa-angle-right"></i>
      </div>
    </div>
  );
}

export default CardCategory;
