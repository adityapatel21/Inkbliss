import React, { useState } from "react";
import "./Footer.css";

import Logo from "../../Media/Image/logo.png";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <section id="footer">
      <div className="footer-main-container">
        <div className="footer-second-container">
          <div className="footer-information">
            <img src={Logo} alt="logo" />
            <div className="footer-links">
              <ul>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Product</a>
                </li>
                <li>
                  <a href="/">Carrers</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/">Community</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="subscribe-newsletter">
            <h1>Subscribe to InkBliss NewsLetter</h1>
            <form action="">
              <input
                type="email"
                value={inputValue}
                placeholder="Your Email Here"
                onChange={handleChange}
              />

              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="socials-conatainer">
          <a href="/">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-instagram"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-square-twitter"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-square-youtube"></i>
          </a>
        </div>
        <div className="copyright-conatainer">
          <p>© 2023 InkBliss, All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
