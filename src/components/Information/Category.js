import React from "react";
import CardCategory from "../Card/CardCategory";
import "./style/Category.css";
function Category(props) {
  return (
    <div className="Category">
      Categorias
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
    </div>
  );
}

export default Category;
