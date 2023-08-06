import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();


  return (
    <div className="problem-container">
      <div className="header">
        <img className="problem-logo-image" src="../../../images/logo.png"></img>
        <div className="current-title">
          <p className="problem-title"
            onClick={() => navigate('/problems')}
          >
            Problems
          </p>
          <p className="submission-title"
            onClick={() => navigate('/submissions')}
          >Submissions</p>
        </div>
      </div>
    </div>
  )
}

export default Header;