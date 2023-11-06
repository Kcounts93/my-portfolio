import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCalendar } from "react-icons/fi";

const Experience = () => {
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
    <div name="experience" className="w-full px-5 lg:px-20 mb-5">
      {/* timeline */}
      <h3 className="sm:mt-5 text-lg font-medium mb-3">Employment</h3>
      <div className="timeline-container flex justify-center align-top">
        <ol className="items-start mt-3 sm:flex sm:flex-wrap md:flex-wrap lg:flex-nowrap">
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
                  <time className="block mb-2 text-sm font-medium leading-none text-darkputty">
                    {experience.date}
                  </time>
                  <h3 className="text-sm font-medium text-darkputty">
                    {experience.title}
                  </h3>
                  <h3 className="text-sm font-medium my-1 text-darkputty">
                    {experience.company}
                  </h3>
                  <p className="font-medium text-sm text-darkputty">
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
