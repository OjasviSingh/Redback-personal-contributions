import React from "react";
import "./App.css"; // Make sure this is linked correctly

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <img
          src="/RedbackLogo.jpeg"
          alt="Redback Operations Logo"
          className="logo"
        />
        <div className="text-block">
          <h1 className="title">TAKE YOUR FITNESS TO THE NEXT LEVEL</h1>
          <p className="subtitle">
            Experience our incredible services and join other members
          </p>
        </div>
      </div>
      <div className="buttons">
        <button className="btn signin">Sign In</button>
        <button className="btn signup">Sign Up</button>
      </div>
    </div>
  );
};

export default App;
