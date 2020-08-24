import React from "react";
import "./Display.css";

export default function Display(props) {
    const op = props.operation;
    const result  = props.result;

    return (
        <div className="display">
            <h1> {result} </h1>
            <h4> {op} </h4>
        </div>
    );
}