import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (


    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">

<a href="https://www.facebook.com/zihadsha701/" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={24} />
      </a>
<a
        href="https://www.instagram.com/zihad_shah/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      
      <a
        href="https://www.linkedin.com/in/zihad701/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;