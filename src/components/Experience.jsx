import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
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
    <div name="experience" className="w-full px-5 lg:px-20 mt-20 mb-20">
      <div className="text-heading-section mb-10">
        <h2 className="text-[3.5rem] mb-2 font-light">Experience</h2>
        <div className="flex sm:flex-col lg:flex-row sm:flex-wrap md:flex-wrap lg:flex-nowrap">
          <div className=" mb-5 sm:mb-10 flex items-center pr-11 lg:w-3/5">
            <p className="text-xl leading-10">
              My journey started with an A.A.S in Graphic/Web Design, where I
              honed my creative and design skills. I was exposed to HTML, CSS,
              and vanilla Javascript and knew from then on I wanted to be a
              developer.
              <br />
              <br />
              In my professional roles, I've had the opportunity to put these
              design and development skills into action giving me a diverse
              background. I have edited podcasts, videos, maintained a
              custom-themed WordPress website, building websites and creating
              100s of landing pages for enterprise level clients.
              <br />
              <br />
              I'm driven by a relentless pursuit of growth, innovation, and
              curiosity. I look forward to contributing my passion for
              development to collaborative projects and teams.
            </p>
          </div>
          {/* education */}
          <div className="lg:w-2/5">
            <h3 className="text-3xl mb-2 font-light pl-3">Education</h3>
            <ul className="sm:mt-10 lg:mt-0">
              {education.map((item, index) => (
                <li key={index} className="mb-4 last:mb-0">
                  <div className="text-gray-800 ">{item.year}</div>
                  <div className="text-lg font-semibold text-gray-900">
                    {item.degree}
                  </div>
                  <div className="text-gray-700 ">{item.school}</div>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* timeline */}
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
                className="relative mb-6 sm:mb-0 sm:mt-5"
              >
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-charcoal rounded-full ring-0 ring-putty dark:bg-charcoal sm:ring-8 dark:ring-charcoal shrink-0">
                    <FaCalendarAlt className="text-putty" />
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg font-semibold ">{experience.title}</h3>
                  <h3 className="text-lg font-semibold">
                    {experience.company}
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {experience.date}
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
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
