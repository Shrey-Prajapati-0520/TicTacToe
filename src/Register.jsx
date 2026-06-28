import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import remail from "/email.png"
import Lock from "/Lock.png"
import User from "/user.png"
import './Register.css';

function Register() {   

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const [showpopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const handleRegister = () => {
        const user={
            username: username,
            email: email,
            password: password
        };

        localStorage.setItem('username', JSON.stringify(user));
        setShowPopup(true);
        setPopupMessage('Registration successful!');
        setTimeout(() => {
            navigate('/');
        }, 1000);
    }
    return(
        <>
            <div className="register">  
                <div className="rinner-box">
                    <h1>Tic Tac Toe</h1>
                    <h5>Create <span style={{color:"#27d17f"}}>your account</span></h5>
                    <div className="rinput-box">
                         <img src={User} alt="User" className="ricon" />
                        <input type="text"  required value={username} onChange={(e) => setUsername(e.target.value)} />
                        <label>Username</label>
                    </div>
                        
                    <div className="rinput-box">
                         <img src={remail} alt="email" className="ricon" />
                        <input type="email"  required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Email</label>
                    </div>
                        
                    <div className="rinput-box">
                         <img src={Lock} alt="password" className="ricon" />
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label>Password</label>
                    </div>
                         
                    <div className="rinput-box">
                        <img src={Lock} alt="confirmPassword" className="ricon" />
                        <input type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <label>Confirm Password</label>
                    </div>
                    <div className="register-btn-container">
                    <button className="register-btn" onClick={handleRegister}>
                        Register
                    </button>
                    <p className="login-link">Already have an account? <a href="/">Login</a></p>
                    </div>
                </div>
            </div>
            {showpopup && (
        <div className="r-popup">
            <div className="r-popup-content">     
                <p>{popupMessage}</p>
            </div>
        </div>
         )}
        </>
    );    
}

export default Register;