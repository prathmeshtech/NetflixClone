import React,{useState} from 'react'
import SignInScreen from '../SignInScreen/SignInScreen';
import "./LoginScreen.css";

const LoginScreen = () => {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img className="loginScreen_logo" 
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix background"/>
            </div>
            <button onClick={()=>setSignIn(true)}
            className="loginScreen_button">
                Sign In
            </button>
            <div className="loginScreen_gradient"/>
            <div className="loginScreen_body" textAlign="center">
                {
                    signIn ? (
                        <SignInScreen/>
                    ): (
                    <>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter Your email to create or restart your membership.</h3>
                        <div className="loginScreen_email">
                            <form>
                                <input type="email" placeholder="Email Address"/>
                                <button 
                                onClick={()=> setSignIn(true)}
                                className="loginScreen_getStarted">
                                GET STARTED
                                </button>
                            </form>
                        </div>
                    </>)
                }
            </div>
        </div>
    )
}

export default LoginScreen
