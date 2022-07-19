import React from "react";
import CalculatorKey from "./CalculatorKey";
import "./styles.css";

const Calculator = (props) => {
  return (
    <div className="calculator">
      <div className="calculator-input">
        <div className="result">result</div>
      </div>
      <div className="calculator-keypad">
        <div className="keys-function">
          <CalculatorKey keyValue={"c"} />
          <CalculatorKey keyValue={"\xB1"} />
          <CalculatorKey keyValue={"%"} />
        </div>
        <div className="keys-operators">
          <CalculatorKey keyValue={"+"} />
          <CalculatorKey keyValue={"-"} />
          <CalculatorKey keyValue={"*"} />
          <CalculatorKey keyValue={"/"} />
          <CalculatorKey keyValue={"="} />
        </div>
        <div className="keys-numbers">
          <CalculatorKey keyValue={"9"} />
          <CalculatorKey keyValue={"8"} />
          <CalculatorKey keyValue={"7"} />
          <CalculatorKey keyValue={"6"} />
          <CalculatorKey keyValue={"5"} />
          <CalculatorKey keyValue={"4"} />
          <CalculatorKey keyValue={"3"} />
          <CalculatorKey keyValue={"2"} />
          <CalculatorKey keyValue={"1"} />
          <CalculatorKey keyValue={"0"} />
          <CalculatorKey keyValue={"."} />
        </div>
      </div>
    </div>
  );
};
export default Calculator;
