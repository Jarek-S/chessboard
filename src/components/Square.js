import React from "react";

function Square(props) {
  let cssClass = "square " + props.color;
  let number = props.training ? props.number : null;
    return (
      <button
        className={cssClass}
        onClick={props.onClick}
      >
        {number}
      </button>
    );
}

export default Square;