import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';

import ColorPicker from './components/ColorPicker';
import Calculator from './components/Calculator';

ReactDOM.render(
    <div>
        <ColorPicker/>
        <Calculator />
    </div>,
  document.getElementById('root')
);