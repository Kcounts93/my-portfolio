import React from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className="text-white py-3 border-t border-charcoal">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="text-center md:text-center mb-4 md:mb-0">
          <h3 className="text-md font-light mb-2">Connect with Me</h3>
          <div className="flex space-x-4">
            <ul className="flex">
              <li>
                <a
                  href="https://www.linkedin.com/in/kaylacounts/"
                  target="blank"
                >
                  <FiLinkedin className="text-xl transition-transform hover:scale-150 duration-300" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Kcounts93" target="blank">
                  <FiGithub className="text-xl transition-transform hover:scale-150 duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kaylaranae.psd/"
                  target="blank"
                >
                  <FiInstagram className="text-xl transition-transform hover:scale-150 duration-300" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
