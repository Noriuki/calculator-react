import React from 'react';
import './Button.css';

export default function Button(props){
    const darkStyle = props.dark === true ? 'button-dark' : '';

    const clicked = props.click ? () => {
            props.click(props.label);
        } : 
        null;

    return (
        <button  onClick={clicked} className={`button ${darkStyle}`} >{ props.label }</button>
    );

}