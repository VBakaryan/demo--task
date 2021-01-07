import React from 'react';
import './Button.css'

function Button(props) {
    return <button className="btn-info" onClick={props.onClick}>{props.placeholder}</button>
}

export default Button;