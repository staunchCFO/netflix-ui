// import { useState , useRef } from 'react'
import './style.scss'

const Login = () => {
    
    return (
        <div className="login">
            <div className="login__top">
                <div className="login__topWrapper">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                        className="logo_img"
                    />
                    <button className="login__btn">Sign Up</button>
                </div>
            </div>
            <div className="login__container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="login__containerBtn">Sign In</button>
                    <span>New to Netflix? <b>Sign up now.</b></span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you are not a bot.
                        <b>Learn more.</b>
                    </small>
                </form>
            </div>
        </div>
    )
}

export default Login;
