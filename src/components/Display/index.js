import React from "react";
import "./Display.css";

export default function Display(props) {
    const op = props.operation;
    const result  = props.result;

    const clicked = props.click ? () => {
        props.click(true);
    } : 
    null;


    return (
        <div className="display">
            <div className="wrap">
                <h1> {result} </h1>
                <h5> {op} </h5>
            </div>
            <button onClick={clicked} >AC</button>
        </div>
    );
}