import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
                    <h2>Register</h2>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button className="register-btn" onClick={handleRegister}>
                        Register
                    </button>
                    <p className="login-link">Already have an account? <a href="/">Login</a></p>
                </div>
            </div>
            {showpopup && (
        <div className="popup">
            <div className="popup-content">     
                <p>{popupMessage}</p>
            </div>
        </div>
         )}
        </>
    );    
}

export default Register;