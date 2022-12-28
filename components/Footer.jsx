import React from "react";
import {
  AiFillAlert,
  AiFillCamera,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        &copy; <span>{currentYear}</span> {""}
        <span className="footer">SureBuy</span> {""}
        Built by <a href="http://resumeop.netlify.app/">Oketo Peters</a>
      </p>
      <p className="icons">
        <AiFillInstagram />
        {/* <AiOutlineTwitter /> */}
        {/* <AiFillAlert /> */}
        <AiFillCamera />
      </p>
    </div>
  );
};

export default Footer;
