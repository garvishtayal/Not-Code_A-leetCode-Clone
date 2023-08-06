import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../signup-page/signup.css';

function Login() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/signup');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="container">
      <div className="main-container">
        <img className="main-image" src="../../../images/front-bg.jpeg"></img>
        <img className="logo-image" src="../../../images/logo.png"></img>
        <input
          className="email-box"
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          className="password-box"
          type="text"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          className="submit-button"
          onClick={async () => {
            try {
              const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: email,
                  password: password
                })
              });

              const json = await response.json();

              if (response.ok) {
                alert(json.message);
                navigate("/problems");
              } else {
                alert('An error occurred while logging in');
              }
            } catch (error) {
              alert('An error occurred while logging in');
            }

          }}

        >
          Login
        </button>
        <p className="navigation-link">Not registered? 
          <span 
            className="link"
            onClick={handleNavigation}
            > 
            Create Account
          </span>
        </p>
      </div>

    </div>
  );
}

export default Login