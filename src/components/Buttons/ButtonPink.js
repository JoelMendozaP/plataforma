import React from 'react';
import "./style/ButtonPink.css"
function ButtonPink(props) {
    return (
            <button className="ButtonPink" onClick={props.onClick}>
                {props.children}
            </button>
    );
}

export default ButtonPink;