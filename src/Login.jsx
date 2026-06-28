import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import email from "/email.png"
import Lock from "/Lock.png"
import './Login.css';


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showpopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    

    const handleLogin = () => {
        const user = JSON.parse(localStorage.getItem('username'));
        if (user && user.username === username && user.password === password) {
            setShowPopup(true);
            setPopupMessage('Login successful!');
            setTimeout(() => {
                navigate('/game');
            }, 2000);
        } else {
            setShowPopup(true);
            setPopupMessage('Invalid username or password!');
            setTimeout(() => {
                setShowPopup(false);
            }, 1000);
        }
    }
   

  
    return(
        <>
            <div className="login">
                <div className="inner-box">
                <h1>Tic Tac Toe</h1>
                <h5>Welcome back! <br/><span style={{color:"#27d17f"}}>Login</span> to continue</h5>
                <div className="input-box"> 
                    <img src={email} alt="User" className="icon" />
                    <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label>Username</label>
                </div>
                <div className="input-box">
                    <img src={Lock} alt="User" className="icon" />
                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label>Password</label>
                </div>
                <div className="login-btn-container">
                    <button className="login-btn" onClick={handleLogin}>
                        Login
                    </button>
                    <p className="signup-link">Don't have an account? <a href="/register">Sign up</a></p>
                </div>
                </div>
            </div>

             {showpopup && (
        <div className="l-popup">
            <div className="l-popup-content">
                <p>{popupMessage}</p>
            </div>
        </div>
         )}

        </>
    );
}

export default Login;