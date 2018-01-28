import React, { Component } from 'react';
import './auth.css';

export default class Auth extends Component {

    render() {
        return (
            <div>
                <div className="background-image"></div>
                <div className="auth-main">
                        <div className="auth-box">
                            <a href={process.env.REACT_APP_LOGIN}>
                                <div className="login-div">
                                    <span className="login">LOGIN</span>
                                </div>
                            </a>
                        </div>
                </div>
            </div>
        )
    }
}

