import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Stay connected with FlickSpace: Follow us on social media for the
          latest movie updates, exclusive content, and engaging discussions.
          Join our vibrant community of film enthusiasts and be a part of the
          conversation that celebrates the magic of cinema
        </div>
        <div className="socialIcons">
        <span className="icon" style={{color:"white"}}>
        <Link
              to="https://www.linkedin.com/in/varun--upadhyay/"
              target="_blank"
              rel="noopener noreferrer"
              style={{color:"white"}} 
            >
            <FaFacebookF />
            </Link>
            
          </span>
          <span className="icon" style={{color:"white" }}>
          <Link
              to="https://www.linkedin.com/in/varun--upadhyay/"
              target="_blank"
              rel="noopener noreferrer"
              style={{color:"white"}} 
            >
               <FaInstagram />
            </Link>
         
          </span>
          <span className="icon" style={{color:"white" }}>
          <Link
              to="https://github.com/VarunUpadhyay802"
              target="_blank"
              rel="noopener noreferrer"
              style={{color:"white"}} 
            >
             <FaGithub />
            </Link>
          </span>
          <span className="icon" >
            <Link
              to="https://www.linkedin.com/in/varun--upadhyay/"
              target="_blank"
              rel="noopener noreferrer"
              style={{color:"white"}} 
            >
              <FaLinkedin />
            </Link>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
