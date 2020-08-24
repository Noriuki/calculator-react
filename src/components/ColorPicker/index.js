import React, { useState, useEffect }  from 'react';
import './ColorPicker.css';

export default function ColorPicker() {
    const BgColors = {
        first: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
        second: 'linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99)'
    };
    const [color, setColor] = useState(BgColors.first);

    useEffect(() => {
        document.body.style.background = color;
    });

    return(
        <div className="color-picker">
            <button onClick={() => setColor(BgColors.first)} style={{background: BgColors.first}}></button>
            <button onClick={() => setColor(BgColors.second)} style={{background: BgColors.second}}></button>
        </div>
    );
}