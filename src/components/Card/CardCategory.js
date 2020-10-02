import React from "react";
import "./CardCategory.css";
function CardCategory(props) {
  return (
    <div className="CardCategory">
      <div className="CardCategory__Text">
        <div className="CardCategory__Name">Desarrollo de Sistemas</div>
        <div className="CardCategory__Description">56 Cursos</div>
      </div>
      <div className="CardCategory__Icon">
        <i className="fas fa-angle-right"></i>
      </div>
    </div>
  );
}

export default CardCategory;
