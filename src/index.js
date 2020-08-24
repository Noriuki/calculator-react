import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/';

import ColorPicker from './components/ColorPicker';
import Calculadora from './components/Calculadora';

ReactDOM.render(
    <div>
        <ColorPicker/>
        <Calculadora />
    </div>,
  document.getElementById('root')
);