import React from "react";
import "./style/ListCard.css";
function ListCard(props) {
  const listUl = () => {
    let list = [];
    if (props.list) {
      for (let i = 0; i < props.list.length; i++) {
        list.push(<li key={i}>{props.list[i]}</li>);
      }
    } else {
      return list;
    }
    return list;
  };

  return (
    <div className="ListCard">
      <h3>{props.children}</h3>
      <ul>{listUl()}</ul>
    </div>
  );
}

export default ListCard;
