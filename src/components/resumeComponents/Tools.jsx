import React from "react";
import { FiFigma, FiGithub } from "react-icons/fi";
import { TbBrandVscode } from "react-icons/tb";
import {
  SiJetbrains,
  SiPrettier,
  SiAdobecreativecloud,
  SiOpenai,
} from "react-icons/si";
import { FaGitAlt, FaNpm } from "react-icons/fa";

const Tools = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-5 my-4 w-60 mb-10">
      <TbBrandVscode className="text-3xl" />
      <SiJetbrains className="text-3xl" />
      <FaGitAlt className="text-3xl" />
      <FiGithub className="text-3xl" />
      <FiFigma className="text-3xl" />
      <SiAdobecreativecloud className="text-3xl" />
      <SiPrettier className="text-3xl" />
      <FaNpm className="text-3xl" />
      <SiOpenai className="text-3xl" />
    </div>
  );
};

export default Tools;
