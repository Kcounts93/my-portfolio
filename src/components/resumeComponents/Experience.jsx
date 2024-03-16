import React from "react";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Front End Developer/Designer",
    company: "Ignitium",
    date: "Jun 2022 - Present",
    description:
      "Responsible for replicating websites. Building, maintaining, and designing HTML, CSS, JavaScript landing pages in a fast-paced, collaborative, ever-changing environment.",
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

const Experience = () => {
  return (
    <div className="h-full rounded-xl mx-10">
      <h2 className="text-2xl font-light mb-5">Experience</h2>
      <div className="flex flex-col items-center">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-center w-full mb-7">
            <div className="flex flex-col items-center mr-4">
              <FaBriefcase className="text-xl text-blue-500" />
              {index < experiences.length - 1 && (
                <div className="w-px h-8 bg-gray-300" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium">{exp.title}</h3>
              <p className="text-darkputty">{exp.company}</p>
              <p className="text-gray-400">{exp.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
