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
      <TbBrandVscode className="text-2xl" />
      <SiJetbrains className="text-2xl" />
      <FaGitAlt className="text-2xl" />
      <FiGithub className="text-2xl" />
      <FiFigma className="text-2xl" />
      <SiAdobecreativecloud className="text-2xl" />
      <SiPrettier className="text-2xl" />
      <FaNpm className="text-2xl" />
      <SiOpenai className="text-2xl" />
    </div>
    </div>
  );
};

export default Tools;
