import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight, FiCalendar } from "react-icons/fi";

const Experience = () => {
  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Adaptability",
    "Time Management",
    "Resourceful",
    "Analytical",
  ];

  const hardSkills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Responsive Web Design",
    "Version Control (Git)",
    "Front-End Build Tools (Webpack, Babel)",
    "CSS Preprocessors (e.g., SASS)",
    "RESTful APIs",
    "UI/UX Design Fundamentals",
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

  const experiences = [
    {
      title: "Web Designer/Video Editor",
      company: "EML Radio - Full time",
      date: "Oct 2019 - Aug 2020",
      description:
        "Leveraged technical skills in WordPress, CSS, HTML, and Adobe Premiere to edit podcasts, videos and make edits to a custom themed website hosted in WordPress",
    },
    {
      title: "Marketing & Social Media Intern",
      company: "EML Radio - Full time",
      date: "Jan 2022 - Apr 2022",
      description:
        "Leveraged technical skills in WordPress, CSS, HTML, and Adobe Premiere to edit podcasts, videos and make edits to a custom themed website hosted in WordPress",
    },
    {
      title: "Server/Bartender",
      company: "Moontime",
      date: "May 2020 - Jun 2022",
      description:
        "Leveraged technical skills in WordPress, CSS, HTML, and Adobe Premiere to edit podcasts, videos and make edits to a custom themed website hosted in WordPress",
    },
    {
      title: "Web Designer/Developer",
      company: "Marketing Beaver",
      date: "Jan 2022 - Jun 2022",
      description:
        "Leveraged technical skills in WordPress, CSS, HTML, and Adobe Premiere to edit podcasts, videos and make edits to a custom themed website hosted in WordPress",
    },
    {
      title: "Front End Developer/Designer",
      company: "Ignitium",
      date: "Jun 2022 - Present",
      description:
        "Leveraged technical skills in WordPress, CSS, HTML, and Adobe Premiere to edit podcasts, videos and make edits to a custom themed website hosted in WordPress",
    },
  ];

  return (
    <div name="experience" className="w-full px-5 lg:px-20 mb-10">
      <div className="text-heading-section mb-10">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-full mb-10 flex-col pr-11 lg:w-1/2">
            <h3 className="text-3xl mb-2 font-light sm:mt-10">Skills</h3>
            <div className="flex flex-row md:flex-row space-y-5 md:space-y-0 mt-10">
              <div className="w-full md:w-1/2 md:pr-5">
                <h2 className="text-xl font-semibold">Soft Skills</h2>
                <ul className="list-none ml-5 flex-row">
                  {softSkills.map((skill, index) => (
                    <li
                      key={index}
                      className="mb-2 px-0 text-darkputty cursor-default flex flex-row items-center"
                    >
                      <FiChevronRight className="mr-5 px-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 pl-5">
                <h2 className="text-xl font-semibold">Hard Skills</h2>
                <ul className="list-none ml-5 flex-row">
                  {hardSkills.map((skill, index) => (
                    <li
                      key={index}
                      className="mb-2 px-0 text-darkputty cursor-default flex flex-row items-center"
                    >
                      <FiChevronRight className="mr-5 px-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* education */}
          <div className="lg:w-1/2">
            <div className="">
              <h3 className="text-3xl mb-2 font-light sm:mt-10">Education</h3>
              <ul className="sm:mt-10 md:mt-10 cursor-default">
                {education.map((item, index) => (
                  <li
                    key={index}
                    className="pl-0 mb-4 last:mb-0 cursor-default"
                  >
                    <div className="text-md text-light text-darkputty">
                      {item.year}
                    </div>
                    <div className="text-xl font-semibold cursor-default">
                      {item.degree}
                    </div>
                    <div className="font-medium cursor-default">
                      {item.school}
                    </div>
                    <p className="mt-2 text-darkputty cursor-default">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* timeline */}
      <h3 className="text-3xl mb-2 font-light sm:mt-10">Employment</h3>
      <div className="timeline-container flex justify-center align-top">
        <ol className="items-start mt-10 sm:flex sm:flex-wrap md:flex-wrap lg:flex-nowrap">
          <AnimatePresence>
            {experiences.map((experience, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="relative mx-0 px-0 mb-6 sm:mb-0 sm:mt-5"
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 bg-charcoal rounded-full ring-0 ring-putty dark:bg-charcoal sm:ring-8 dark:ring-charcoal shrink-0">
                    <FiCalendar className="text-putty" />
                  </div>
                  <div className="hidden sm:flex w-full bg-putty h-0.5 dark:bg-charcoal"></div>
                </div>
                <div className="mt-3 mr-5">
                  <h3 className="text-md font-semibold ">{experience.title}</h3>
                  <h3 className="text-md font-medium">{experience.company}</h3>
                  <time className="block mb-2 text-md font-semibold leading-none text-darkputty">
                    {experience.date}
                  </time>
                  <p className="font-normal text-darkputty">
                    {experience.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ol>
      </div>
    </div>
  );
};

export default Experience;
