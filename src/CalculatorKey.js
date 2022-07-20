import React from "react";
import "./styles.css";
const CalculatorKey = (props) => {
  return (
    <button
      className={`${props.className}`}
      onClick={() => {
        props.onClick(props.keyValue);
        console.log(props.keyValue);
      }}
    >
      {props.keyValue}{" "}
    </button>
  );
};
export default CalculatorKey;
