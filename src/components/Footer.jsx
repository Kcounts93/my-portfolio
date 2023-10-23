import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-8 border-t">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold">Kayla Counts</h2>
          <p className="text-sm">Frontend Developer</p>
        </div>

        <div className="text-center md:text-center mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Connect with Me</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-400 hover:underline">
              LinkedIn
            </a>
            <a href="#" className="text-blue-400 hover:underline">
              GitHub
            </a>
            <a href="#" className="text-blue-400 hover:underline">
              Instagram
            </a>
          </div>
        </div>

        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold mb-2">Contact Me</h3>
          <p>Email: kcounts0211@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
