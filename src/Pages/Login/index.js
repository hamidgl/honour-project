import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Login = () => {
    return (
        <div className='container'>
            <div className='content'>
                <div className='new-customer'>
                    <h2>New Customers</h2>
                    <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
                    <div className='button-wrapper'>
                        <Link to="/regsteration">Create an Account</Link>
                    </div>
                </div>
                <div className='login'>
                    <div className='first-group'>
                        <h2>Regsterd Customer</h2>
                        <p>* Required Fields</p>
                    </div>
                    <p>If you have an account, sign in with your email address.</p>
                    <div class="email">
                        <label for="email">Email</label>
                        <input name="email" type="email" />
                    </div>
                    <div class="email">
                        <label for="password">Password</label>
                        <input name="password" type="password" />
                    </div>

                    <div class="checkbox">
                        <input type="checkbox" id="keep_me_loggedin" name="keepMeLoggedin" checked="checked" />
                        <label for="keep_me_loggedin" >
                            <span>Keep me logged in </span>
                        </label>
                    </div>
                    <Link to="/login">Forgotten Password?</Link>
                    <div className='login-button-wrapper'><button type="submit">Log In</button></div>
                </div>
            </div>
        </div>
    )
}

export default Login