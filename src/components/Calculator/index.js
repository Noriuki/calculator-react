import React, { useState } from "react";
import "./Calculator.css";

import Button from "../Button";
import Display from "../Display";

export default function Calculator() {
  const [result, setResult] = useState("0");
  const [operation, setOperation] = useState([]);
  const [operator, setOperator] = useState(false);

  function addOperator(op) {
    if (operator === false) {
      setOperation(operation.concat(op));
      setOperator(true);
    }
  }

  function addDigit(n) {
    setOperation(operation.concat(n));
  }

  function calcResult() {

    if (!isNaN(operation[operation.length - 1])) {
        // eslint-disable-next-line
        setResult(eval(operation.join("")));
        setOperator(false);
    }
    
  }

  function clearDisplay(clear){
    if(clear === true) {
        setResult('0');
        setOperator(false);
        setOperation([]);
    }
  }

  return (
    <div className="calculator">
      <Display click={(e) => clearDisplay(e)} result={result} operation={operation} />

      <Button click={(e) => addDigit(e)} label="7" />
      <Button click={(e) => addDigit(e)} label="8" />
      <Button click={(e) => addDigit(e)} label="9" />
      <Button click={(e) => addOperator(e)} dark={true} label="+" />

      <Button click={(e) => addDigit(e)} label="4" />
      <Button click={(e) => addDigit(e)} label="5" />
      <Button click={(e) => addDigit(e)} label="6" />
      <Button click={(e) => addOperator(e)} dark={true} label="-" />

      <Button click={(e) => addDigit(e)} label="1" />
      <Button click={(e) => addDigit(e)} label="2" />
      <Button click={(e) => addDigit(e)} label="3" />
      <Button click={(e) => addOperator(e)} dark={true} label="*" />

      <Button click={(e) => addDigit(e)} label="0" />
      <Button click={(e) => addOperator(e)} label="." />
      <Button click={(e) => calcResult(e)} label="=" />
      <Button click={(e) => addOperator(e)} dark={true} label="/" />
    </div>
  );
}
