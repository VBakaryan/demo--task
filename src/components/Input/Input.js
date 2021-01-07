import React from 'react'
import './Input.css'

function Input(props) {
    return <input className="input-info" value={props.value} onChange={props.onChange} placeholder={props.placeholder} type='text'/>
}

export default Input;