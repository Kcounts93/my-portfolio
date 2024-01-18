import React from "react";
import { FaBriefcase, FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";

const TimelineEntry = ({ title, subtitle, date, description, icon: Icon }) => (
  <motion.div className="flex flex-row items-start md:items-start text-left mb-5">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-putty">
        <Icon className="text-xl" />
      </div>
    </div>
    <div className="md:flex-grow md:ml-4 mt-2 md:mt-0">
      <h3 className="text-lg font-medium">{title}</h3>
      <h4 className="font-medium text-darkputty">
        {subtitle} - {date}
      </h4>
      <p className="text-md mt-1 text-darkputty">{description}</p>
    </div>
  </motion.div>
);

const Qualifications = () => {
  const experiences = [
    {
      title: "Front End Developer/Designer",
      company: "Ignitium",
      date: "Jun 2022 - Present",
      description:
        "Responsible for replicating websites and building, maintaining, and designing HTML, CSS, JavaScript landing pages, emphasizing adaptability in a fast-paced environment.",
    },
    {
      title: "Web Designer/Developer",
      company: "Marketing Beaver",
      date: "Jan 2022 - Jun 2022",
      description:
        "Served as the primary web designer for local clients in the CDA area, specializing in crafting responsive WordPress websites and expanding skills in vanilla HTML, CSS, and JavaScript.",
    },
    {
      title: "Marketing & Social Media Intern",
      company: "The Jacklin Arts Center",
      date: "Jan 2022 - Apr 2022",
      description:
        "Managed social media and maintained the WordPress website for a non-profit cultural arts center, enhancing online presence and community engagement.",
    },
    {
      title: "Web Designer/Video Editor",
      company: "EML Radio - Full time",
      date: "Oct 2019 - Aug 2020",
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
        "Focuses on server-side programming and database integration, ensuring a well-rounded mastery of web development. Relevant coursework: Node.js, Express, MongoDB, Firebase, Cloud Firestore",
    },
    {
      school: "NuCamp Coding Bootcamp",
      degree: "Cerificate in Front End Web & Mobile Development",
      year: "2022 - 2023",
      description:
        "Focuses on building engaging user interfaces. Skills & Technologies developed: Bootstrap, React, React Native, Git, Redux, Google Cloud Platform",
    },
    {
      school: "North Idaho College",
      degree: "A.A.S in Graphic/Web Design",
      year: "2020 - 2022",
      description:
        "Acquired practical skills in digital design, web development, and multimedia communication.",
    },
  ];

  return (
    <div id="Expertise" className="section">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 mt-20 mb-10">
        <div className="text-heading-section mb-10">
          <h2 className="text-4xl font-medium">Expertise</h2>
        </div>
        <div className="md:flex">
          <div className="md:w-1/2 pr-5 mb-20">
            <h2 className="text-2xl font-light mb-5">Education</h2>
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
          <div className="md:w-1/2 pl-0 md:pl-4">
            <h2 className="text-2xl font-light mb-5">Experience</h2>
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
      </div>
    </div>
  );
};

export default Qualifications;
