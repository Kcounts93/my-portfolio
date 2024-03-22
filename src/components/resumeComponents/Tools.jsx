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
    <div className="mb-10">
      <h2 className="text-xl font-light mb-5">Tools</h2>
    <div className="flex justify-between flex-wrap">
      <TbBrandVscode className="text-2xl icon-animation-hover" />
      <SiJetbrains className="text-2xl icon-animation-hover" />
      <FaGitAlt className="text-2xl icon-animation-hover" />
      <FiGithub className="text-2xl icon-animation-hover" />
      <FiFigma className="text-2xl icon-animation-hover" />
      <SiAdobecreativecloud className="text-2xl icon-animation-hover" />
      <SiPrettier className="text-2xl icon-animation-hover" />
      <FaNpm className="text-2xl icon-animation-hover" />
      <SiOpenai className="text-2xl icon-animation-hover" />
    </div>
    </div>
  );
};

export default Tools;
