import React from "react";
import "./style/Category.css";
import { useTranslation } from "react-i18next";
import CardCategory from "../Card/CardCategory";
function Category(props) {
  const { t } = useTranslation("category");
  return (
    <div className="Category">
      {t("categories")}
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
    </div>
  );
}

export default Category;
