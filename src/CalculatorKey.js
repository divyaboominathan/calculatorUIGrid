import React from "react";
import "./styles.css";
const CalculatorKey = (props) => {
  return (
    <button className="button" onClick={() => props.onClick(props.keyValue)}>
      {props.keyValue}{" "}
    </button>
  );
};
export default CalculatorKey;
