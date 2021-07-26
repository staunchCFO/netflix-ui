import { useState , useRef } from 'react'
import './style.scss'

const Register = () => {
    const [ email , setEmail ] = useState("")
    const [ password , setPassword ] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleSubmit = () => {
        setPassword(passwordRef.current.value)
    }

    return (
        <div className="register">
            <div className="register__top">
                <div className="register__topWrapper">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                        className="logo_img"
                    />
                    <button className="register__btn">Sign In</button>
                </div>
            </div>
            <div className="register__container">
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere, cancel anytime</h2>
                <p>Ready to watch? enter your email to create or restart your membership.</p>
                {!email ? (
                    <div className="register__getStartedInput">
                        <input type="email" placeholder="Email address" ref={emailRef} />
                        <button className="register__getStartedBtn" onClick={handleStart}>Get Started</button>
                    </div>
                ) : (
                    <form className="register__getStartedInput">
                        <input type="password" placeholder="Password" />
                        <button 
                            type="submit" 
                            className="register__getStartedBtn" 
                            ref={passwordRef}
                            onClick={handleSubmit}
                        >Submit</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Register
