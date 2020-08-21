import React from 'react';
import './Button.css';

export default function Button(props){
    const label = props.label;

    return (
        <button className="button">{ label }</button>
    );

}