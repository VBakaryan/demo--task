import React from 'react'
import './Input.scss'

function Input(props) {
    return <input className="input-info" value={props.value} onChange={props.onChange} placeholder={props.placeholder} type='text'/>
}

export default Input;