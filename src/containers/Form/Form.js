import React, {useState} from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { validatePasswordLength, validateUserNameAsEmail } from '../../utils/validate';

import './Form.scss'


export const Form = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorUserNameText, setErrorUserNametext] = useState('');
    const [errorPasswordText, setErrorPasswordText] = useState('');

    const onUserNameChange = (event) => {
        setUserName(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onButtonClick = () => {
        if (!userName) {
            setErrorUserNametext("UserName is not provided");
        } else {
            setErrorUserNametext(validateUserNameAsEmail(userName).errorText);
        }

        if (!password) {
            setErrorPasswordText("Password is not provided")
        } else {
            setErrorPasswordText(validatePasswordLength(password).errorText);
        }

        if (!errorUserNameText && !errorPasswordText) {
            alert("You are successfully signed in ;");
        }
    }

    return (
            <div className='box'>
                <h1>Login</h1>
                <Input value={userName} onChange={onUserNameChange} placeholder='UserName'/> 
                <p>{errorUserNameText}</p>       
                <Input value={password} onChange={onPasswordChange} placeholder = 'Password'/>
                <p>{errorPasswordText}</p>
                <Button onClick={onButtonClick} placeholder='Sign In'/>
           </div>
           );
}