import React from "react";
import { FaBriefcase, FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";

const TimelineEntry = ({ title, subtitle, date, description, icon: Icon }) => (
  <motion.div
    className="flex flex-col md:flex-row items-center text-center md:text-left mb-5"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
        <Icon className="text-xl" />
      </div>
    </div>
    <div className="md:flex-grow md:ml-4 mt-2 md:mt-0">
      <h3 className="text-lg font-bold">{title}</h3>
      <h4 className="font-medium text-gray-500">
        {subtitle} - {date}
      </h4>
      <p className="text-md mt-1">{description}</p>
    </div>
  </motion.div>
);

const Qualifications = () => {
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
      company: "The Jacklin Arts Center",
      date: "Jan 2022 - Apr 2022",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <motion.div
      className="container mx-auto p-4 w-full px-5 md:px-10 lg:px-20 mt-10 mb-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="text-heading-section mb-5">
        <h2 className="text-4xl mb-5 font-light">Qualifications</h2>
      </div>
      <div className="md:flex">
        <div className="md:w-1/2 pr-4">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          {education.map((edu, idx) => (
            <TimelineEntry
              key={idx}
              title={edu.degree}
              subtitle={edu.school}
              date={edu.year}
              description={edu.description}
              icon={FaUniversity}
            />
          ))}
        </div>
        <div className="md:w-1/2 pl-4">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          {experiences.map((exp, idx) => (
            <TimelineEntry
              key={idx}
              title={exp.title}
              subtitle={exp.company}
              date={exp.date}
              description={exp.description}
              icon={FaBriefcase}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Qualifications;
