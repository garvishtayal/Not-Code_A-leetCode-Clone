import React from "react";
import { useState } from "react";
import './signup.css';
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="main-container">
        <img className="main-image" src="../../../images/front-bg.jpeg"></img>
        <img className="logo-image" src="../../../images/logo.png"></img>
        <p className="text" >Create your<br></br> Account Here!</p>
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
              const response = await fetch("http://localhost:3001/signup", {
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
              } else if (response.status === 409) {
                alert('User already exists');
              } else {
                alert('An error occurred while signing up');
              }
            } catch (error) {
              alert('An error occurred while signing up');
            }

          }}

        >
          Signup
        </button>
      </div>

    </div>
  );
}

export default SignUp