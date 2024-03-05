
import React, { useState } from "react";
import ProjectCard from "./ProjectCard"; // Assuming you extract the project card

// Project data
import notesApp from "../assets/notes-app.png";
import otr from "../assets/ontherocks.png";
import gpt4 from "../assets/gpt4.png";
import chatBot from "../assets/chatronix.png";
import portfolioImg from "../assets/portfolio.png";
import kingsQuest from "../assets/kings-quest.png";

const projectsData = [
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
  

const Projects = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const filteredProjects = activeTab === "featured"
    ? projectsData.filter(project => project.featured)
    : projectsData;

  return (
    <div id="Projects" className="section">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 mt-20 mb-10 flex-row">
        <div className="flex justify-between text-heading-section mb-10">
          <h2 className="text-4xl mb-5 font-light">Projects</h2>
          {/* Tab Buttons */}
          <div className="flex justify-end mb-4 mx-5">
            <TabButton isActive={activeTab === "featured"} onClick={() => setActiveTab("featured")}>Featured</TabButton>
            <TabButton isActive={activeTab === "all"} onClick={() => setActiveTab("all")}>All projects</TabButton>
          </div>
        </div>
        <div className="flex flex-wrap project-list">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

// TabButton component for better readability
const TabButton = ({ isActive, onClick, children }) => (
  <button
    onClick={onClick}
    className={`mr-4 tab-button font-light text-sm md:text-lg ${isActive ? "active hover:none underline" : ""}`}
  >
    {children}
  </button>
);

export default Projects;