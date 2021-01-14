import React from 'react'

import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'
import { validatePasswordLength, validateUserNameAsEmail } from '../../../utils/validate';

import './Signup.scss'

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            userName:'',
            password:'',
            age:'',
            errorUserNameText:'',
            errorPasswordText:''
        }
    }

    onUserNameChange(event) {
        this.setState({
            userName: event.target.value
        });
    }

    onPasswordChange(event) {
        this.setState({
            password: event.target.value
        })  
    }

    onAgeChange(event) {
        this.setState({
            age: event.target.value
        })
    }

    onButtonClick() {
        if (!this.state.userName) {
            this.setState({
                errorUserNameText: "UserName is not provided"
            })
        } else {
            this.setState({
                errorUserNameText: validateUserNameAsEmail(this.state.userName).errorText
            })
        }

        if (!this.state.password) {
            this.setState({
                errorPasswordText: "Password is not provided"
            })
        } else {
            this.setState({
                errorPasswordText: validatePasswordLength(this.state.password).errorText
            })
        }

        if (!this.state.errorUserNameText && !this.state.errorPasswordText) {
            alert("You are successfully signed in ;");
        }
    }

    render() {
        return (
            <div className='box'>
                <h1>Login</h1>
                <Input value={this.state.userName} onChange={this.onUserNameChange.bind(this)} placeholder='UserName'/> 
                <p>{this.state.errorUserNameText}</p>       
                <Input value={this.state.password} onChange={this.onPasswordChange.bind(this)} placeholder = 'Password'/>
                <p>{this.state.errorPasswordText}</p>
                <Input value={this.state.password} onChange={this.onPasswordChange.bind(this)} placeholder = 'Password'/>
                <p>{this.state.errorPasswordText}</p>
                <Button onClick={this.onButtonClick.bind(this)} placeholder='Sign In'/>
           </div>
        )
    }
}

export default Signup;