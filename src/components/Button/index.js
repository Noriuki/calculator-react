import React from 'react';
import './Button.css';

export default function Button(props){
    const label = props.label;
    const darkStyle = props.dark === true ? 'button-dark' : '';

    return (
        <button className={`button ${darkStyle}`} >{ label }</button>
    );

}