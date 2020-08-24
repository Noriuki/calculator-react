import React, { useState, useEffect }  from 'react';
import './ColorPicker.css';

export default function ColorPicker() {
    const [color, setColor] = useState('linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)');

    useEffect(() => {
        document.body.style.background = color;
    });

    function ChangeColor( option ){

        switch (option) {
            case 1:
                setColor('linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99)');
                break;
            default:
                setColor('linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)');
                break;
        }

    }

    return(
        <div className="color-picker">
            <button onClick={() => ChangeColor(1)} style={{background: 'linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99)'}}></button>
            <button onClick={() => ChangeColor(2)} style={{background: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)'}} ></button>
        </div>
    );
}