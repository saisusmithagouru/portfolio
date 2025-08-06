import React from "react";
import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-icons">
        <a href="https://github.com/saisusmithagouru" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sai-susmitha-gowru-4794b8348/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/" target="_blank">
          <FaInstagram />
        </a>
      </div>


      <p className="footer-text">
        © 2025 All Rights Reserved | Made with ❤️ by <strong>WeMade</strong>
      </p>
    </footer>
  );
};


export default Footer;
