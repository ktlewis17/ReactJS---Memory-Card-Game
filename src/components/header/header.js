import React from "react";
import "./header.css";

const Header = props => (
  
  <div className="main-container">
    <nav className="navbar sticky-top navbar-light bg-light justify-content-end">
      <h5 className="text-muted">Current game score: {props.currentScore} | Top score: {props.topScore}</h5>
    </nav>
    
    <div className="jumbotron text-muted">
      <h1>"The Princess and the Frog" Memory Card Game</h1>
      <p className="lead"><b>How to Play:</b> Click on as many cards as you can without repeating the same card twice. 
    </p>
    </div>
  </div>
);

export default Header;