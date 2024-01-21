import React, { useState, useEffect } from "react";
import notesApp from "../assets/notes-app.png";
import otr from "../assets/ontherocks.png";
import gpt4 from "../assets/gpt4.png";
import chatBot from "../assets/chatronix.png";
import portfolioImg from "../assets/portfolio.png";
import kingsQuest from "../assets/kings-quest.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "GPT-4 Landing Page",
      subtitle: "Snippet",
      categories: ["HTML", "React", "CSS"],
      image: gpt4,
      projectLink: "https://github.com/Kcounts93/gpt4-react-landing",
      liveLink: "https://gpt4.kaylacounts.com/",
      featured: true, // Featured project
    },
    {
      id: 2,
      title: "The King's Quest",
      subtitle: "Snippet",
      categories: ["HTML", "CSS", "JS"],
      image: kingsQuest,
      projectLink: "https://github.com/Kcounts93/kings-quest-cyoa",
      liveLink: "https://kingsquest.kaylacounts.com/",
      featured: true, // Featured project
    },
    {
      id: 3,
      title: "On the Rocks Website",
      subtitle: "Snippet",
      categories: ["Bootstrap", "SASS", "JS"],
      image: otr,
      projectLink: "https://github.com/Kcounts93/on-the-rocks",
      liveLink: "https://ontherocks.counts2six.com/",
      featured: true, // Featured project
    },
    {
      id: 4,
      title: "Chatronix AI Chatbot ",
      subtitle: "Snippet",
      categories: ["Bootstrap", "PHP", "JS"],
      image: chatBot,
      projectLink: "https://github.com/Kcounts93/php-chatbot",
      liveLink: "https://chatronix.kaylacounts.com/",
      featured: false, // Featured project
    },
    {
      id: 5,
      title: "Category Notes App",
      subtitle: "Snippet",
      categories: ["React", "Typescript"],
      image: notesApp,
      projectLink: "https://github.com/Kcounts93/react-category-notes-app",
      liveLink: "https://notes.counts2six.com/",
      featured: false, // Featured project
    },

    {
      id: 6,
      title: "Front End Portfolio",
      subtitle: "Snippet",
      categories: ["HTML", "Tailwind", "React"],
      image: portfolioImg,
      projectLink: "https://example.com/project-link",
      liveLink: "#",
      featured: false, // Featured project
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const allProjects = projects;
  const [activeTab, setActiveTab] = useState("featured");
  const [fadeAllProjects, setFadeAllProjects] = useState(false);

  useEffect(() => {
    setFadeAllProjects(false);
    setTimeout(() => {
      setFadeAllProjects(true);
    }, 100);
  }, [activeTab]);

  const projectsToShow =
    activeTab === "featured" ? featuredProjects : allProjects;

  return (
    <div id="Projects" className="section">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 mt-20 mb-10 flex-row">
        <div className="flex justify-between text-heading-section mb-10">
          <h2 className="text-4xl mb-5 font-light">Projects</h2>
          <div className="flex justify-end mb-4 mx-5">
            <button
              onClick={() => setActiveTab("featured")}
              className={` mr-4 tab-button font-light text-sm md:text-lg ${
                activeTab === "featured" ? "active hover:none underline" : ""
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={` tab-button font-light text-sm md:text-lg ${
                activeTab === "all" ? "active underline" : ""
              }`}
            >
              All projects
            </button>
          </div>
        </div>
        <div
          className={`flex flex-wrap project-list ${
            fadeAllProjects ? "fade-in" : ""
          }`}
        >
          {projectsToShow.map((project) => (
            <div
              key={project.id}
              className="w-full sm:w-1/2 lg:w-1/3 sm:h-[450px] md:h-[400px] lg:h-[425px] p-2 flex flex-col mb-4 hover:scale-105 duration-300"
            >
              {/* Project card content */}
              <div className="mx-2 h-full rounded-xl p-0.5 shadow-lg transition">
                {/* Project details */}
                <div className="flex-col h-full justify-center align-middle rounded-[10px] bg-charcoal p-4 sm:p-6  flex-grow">
                  <div className="overflow-hidden">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="mb-5"
                        src={project.image}
                        alt={project.title}
                      />
                    </a>
                  </div>

                  <h3 className="mt-0.5 text-xl font-medium">
                    {project.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-1">
                    {project.categories.map((category, index) => (
                      <span
                        key={index}
                        className="whitespace-nowrap rounded-full bg-putty px-2 py-1 text-darkgrey mr-1 text-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <div className="my-4">
                    <a
                      href={project.projectLink}
                      className="text-sm underline pointer hover:text-drap hover:pointer hover:duration-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                    <span className="mx-2">•</span>
                    <a
                      href={project.liveLink}
                      className="text-sm underline pointer hover:text-drap hover:pointer hover:duration-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
