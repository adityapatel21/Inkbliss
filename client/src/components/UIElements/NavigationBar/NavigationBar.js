import React, { useState } from "react";
import "./NavigationBar.css";

import SolidButton from "../Buttons/SoildButton/SolidButton";

const NavigationBar = () => {
  const handleReload = () => {
    window.location.reload();
  };

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <header>
        <img
          src="https://i.postimg.cc/xd7DK2C9/Ink-Bliss-1.png"
          alt="logo"
          onClick={handleReload}
        />
        <div className="header-inner">
          <nav className="navbar">
            <a href="/" className="nav-item">
              Home
            </a>
            <a href="/" className="nav-item">
              Product
            </a>
            <a href="/" className="nav-item">
              About
            </a>
            <a href="/" className="nav-item">
              Community
            </a>
          </nav>
          <div className="nav-buttons">
            <div className="login-button">
              <SolidButton text="Login" />
            </div>
            <div className="signup-button">
              <SolidButton text="Signup" />
            </div>
          </div>
          <div className="nav-mobile-icons">
            <i
              className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
              onClick={handleClick}
            ></i>
            {/* <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-xmark"></i> */}
          </div>
        </div>
        <div
          className={clicked ? "nav-mobile nav-mobile-active" : "nav-mobile"}
        >
          <nav className="navbar">
            <a href="/" className="nav-item">
              Home
            </a>
            <a href="/" className="nav-item">
              Product
            </a>
            <a href="/" className="nav-item">
              About
            </a>
            <a href="/" className="nav-item">
              Community
            </a>
            <div className="nav-mobile-signup">
              <SolidButton text="Sign Up" />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavigationBar;
