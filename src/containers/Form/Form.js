import React, {useState} from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { validateUserNameLength, validateUserNameAsEmail } from '../../utils/validate';

import './Form.css'


export const Form = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onUserNameChange = (event) => {
        const val = event.target.value;

        console.log(validateUserNameLength(val).errorText);

        setUserName(val);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onButtonClick = () => {
        if (!userName || !password) {
            console.log("UserName or password is not provided");
        } else {
            const result = validateUserNameAsEmail(userName).errorText;
            result ? console.log(result) : console.log("You are successfully signed in ;)");
        }
    }

    return (
            <div className='box'>
                <h1>Login</h1>
                <Input value={userName} onChange={onUserNameChange} placeholder='UserName'/>        
                <Input value={password} onChange={onPasswordChange} placeholder = 'Password'/>
                <Button onClick={onButtonClick} placeholder='Sign In'/>
           </div>
           );
}