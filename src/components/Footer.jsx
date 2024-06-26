import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

const Footer = () => {
  return (
    <footer className="text-white py-6 bg-transparent">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-5">
        <div>
          <ul className="flex items-center space-x-4">
            <li>
              <a
                href="https://www.linkedin.com/in/kaylacounts/"
                target="blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl hover:text-drap transition-transform hover:scale-125 duration-300" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Kcounts93"
                target="blank"
                aria-label="GitHub"
              >
                <DiGithubBadge className="text-2xl hover:text-drap transition-transform hover:scale-125 duration-300" />
              </a>
            </li>
            <li>
              <a href="mailto:kcounts0211@gmail.com" aria-label="Email">
                <FaEnvelope className="text-xl hover:text-drap transition-transform hover:scale-125 duration-300" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs mt-5">
        © {new Date().getFullYear()} Kayla Counts. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
