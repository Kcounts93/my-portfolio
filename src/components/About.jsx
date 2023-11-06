import React from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import me from "../assets/me.png";
import hikingImg from "../assets/hiking.png";

const About = () => {
  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Adaptability",
    "Time Management",
    "Resourceful",
    "Analytical",
    "Thoughtful",
  ];

  const hardSkills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "CSS Frameworks",
    "Responsive Web Design",
    "Version Control (Git)",
    "Front-End Build Tools",
    "SASS",
    "Design Fundamentals",
  ];

  const education = [
    {
      school: "Western Governors University",
      degree: "Bachelors Science in Software Engineering",
      year: "2023 - Present",
      description:
        "Degree track specializing in C# development, software engineering principles, web and desktop application development, database management, and software security.",
    },
    {
      school: "NuCamp Coding Bootcamp",
      degree: "Cerificate in Full Stack Web & Mobile Development",
      year: "2022 - 2023",
      description:
        "Relevant coursework: Node.js, Express, MongoDB, Firebase, Cloud Firestore",
    },
    {
      school: "NuCamp Coding Bootcamp",
      degree: "Cerificate in Front End Web & Mobile Development",
      year: "2022 - 2023",
      description:
        "Skills & Technologies developed: Bootstrap, React, React Native, Git, Redux, Google Cloud Platform",
    },
    {
      school: "North Idaho College",
      degree: "A.A.S in Graphic/Web Design",
      year: "2020 - 2022",
      description:
        "Developed design skills in Adobe Creative Suite and UI/UX principles.",
    },
  ];

  return (
    <div name="about" className="w-full px-5 lg:px-20 mt-10 mb-5">
      <div className="text-heading-section mb-6">
        <h2 className="text-4xl mb-2 font-medium">About me</h2>
      </div>
      <div className="flex flex-wrap">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-3/5 mb-6 md:mb-0"
        >
          <p className="mb-6 leading-loose font-medium text-darkputty">
            I grew up on the Oregon Coast, filled with memories of going to the
            beach and exploring tide pools with my family. I settled in Coeur
            d'Alene shortly after graduating high school in Spirit Lake to
            pursue a degree in criminal justice, but my empathy and creativity
            led me to graphic and web design where I was exposed to HTML, CSS
            and Javascript, which I quickly became passionate about. When I'm
            not coding or working, you'll find me playing video games, cooking
            or sharing coffee with my girlfriend. You'll also see me take part
            in the usual PNW adventures like hiking with my Chihuahua, golfing
            and snowboarding.
          </p>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <div className="">
                <h2 className="text-lg font-medium mb-3">Soft Skills</h2>
                <ul className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <li
                      key={index}
                      className="px-0 text-darkputty cursor-default flex items-center text-sm"
                    >
                      <span className="mr-2">
                        <FiCheck className="px-0" />
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 mb-5">
                <h2 className="text-lg font-medium mb-3">Hard Skills</h2>
                <ul className="grid grid-cols-2 gap-4">
                  {hardSkills.map((skill, index) => (
                    <li
                      key={index}
                      className="px-0 text-darkputty cursor-default flex items-center text-sm"
                    >
                      <span className="mr-2">
                        <FiCheck className="px-0" />
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 sm:pl-0 md:pl-10">
              <h3 className="text-lg font-medium mb-3">Education</h3>
              <ul className="sm:mt-10 md:mt-0 cursor-default">
                {education.map((item, index) => (
                  <li
                    key={index}
                    className="pl-0 mb-5 last:mb-0 cursor-default"
                  >
                    <div className="text-sm text-light text-darkputty">
                      {item.year}
                    </div>
                    <div className="text-sm font-medium cursor-default my-1 text-darkputty">
                      {item.school}
                    </div>
                    <div className="text-md font-regular cursor-default text-darkputty">
                      {item.degree}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <div className="w-full md:w-2/5 md:px-10">
          <img
            className="rounded w-40 md:w-80 opacity-90 sm:hidden md:block"
            src={me}
            alt="portfolio me"
          />
          <img
            className="rounded w-40 md:w-80 opacity-90 ml-20 mt-10 sm:hidden md:block"
            src={hikingImg}
            alt="portfolio me"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
