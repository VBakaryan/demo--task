import React, {Component} from 'react'

import Login from './Login/Login'
import Signup from './Signup/Signup'

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            isLogin: true
        }
    }

    toggleView() {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    render() {
        return (
            <div>
                <span onClick={this.toggleView.bind(this)}>Go to {this.state.isLogin ? "Login" : "Signup"}</span>
                {this.state.isLogin ? 
                    <Login />
                    :
                    <Signup />
                }
            </div>
        )
    }
}

export default Auth;