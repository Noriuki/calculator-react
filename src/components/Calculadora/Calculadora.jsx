import React from "react";
import "./Calculadora.css";

import Button from "../Button/Button";
import Display from "../Display/Display";

export default function Calculadora() {
  return (
      <div className="calculator">
        <Display value={100} />

        <Button label="AC" />
        <Button label="9" />
        <Button label="8" />
        <Button label="7" />
        <Button label="6" />
        <Button label="5" />
        <Button label="4" />
        <Button label="3" />
        <Button label="2" />
        <Button label="1" />
        <Button label="0" />
        <Button label="/" />
        <Button label="*" />
        <Button label="-" />
        <Button label="+" />
        <Button label="." />
        <Button label="=" />
      </div>
  );
}
