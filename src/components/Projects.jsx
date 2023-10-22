import React, { useState, useEffect } from "react";
import Project1 from "../assets/project_1.jpeg";
import notesApp from "../assets/notes-app.png";
import otr from "../assets/ontherocks.png";
import cursor from "../assets/cursor.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  // eslint-disable-next-line
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "On the Rocks Mixology Website",
      subtitle: "Snippet",
      categories: ["Bootstrap", "HTML", "CSS", "SASS", "Javascript"],
      image: otr,
      projectLink: "https://example.com/project-link",
      liveLink: "https://ontherocks.counts2six.com/",
      featured: true, // Featured project
    },
    {
      id: 2,
      title: "Cursor.io Landing Page",
      subtitle: "Snippet",
      categories: ["JavaScript", "React"],
      image: cursor,
      projectLink: "https://example.com/project-link",
      liveLink: "https://example.com/live-link",
      featured: true, // Featured project
    },
    {
      id: 3,
      title: "Category Notes App",
      subtitle: "Snippet",
      categories: ["React", "Typescript"],
      image: notesApp,
      projectLink: "https://example.com/project-link",
      liveLink: "https://notes.counts2six.com/",
      featured: true, // Featured project
    },
    {
      id: 4,
      title: "How to center an element using JavaScript and jQuery",
      subtitle: "Snippet",
      date: "10th Oct 2022",
      categories: ["JavaScript"],
      image: Project1,
      projectLink: "https://example.com/project-link",
      liveLink: "https://example.com/live-link",
      featured: false, // Featured project
    },
    // Add more project objects here as needed
  ]);

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
    <div name="project" className="w-full px-5 lg:px-20 mt-20 mb-20 flex-row">
      <div className="flex justify-between text-heading-section mb-10">
        <h2 className="text-[3.5rem] mb-5 font-light">Projects</h2>
        <div className="flex justify-end mb-4 mx-5">
          <button
            onClick={() => setActiveTab("featured")}
            className={`mr-4 tab-button font-light text-lg ${
              activeTab === "featured" ? "active underline" : ""
            }`}
          >
            Featured
          </button>
          <button
            onClick={() => setActiveTab("all")}
            className={`tab-button font-light text-lg ${
              activeTab === "all" ? "active underline" : ""
            }`}
          >
            All Projects
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
            onClick={() => setSelectedProject(project)}
            className="w-full sm:w-1/2 sm:h-[400px] lg:w-1/3 lg:h-[500px]   p-2 flex flex-col"
          >
            {/* Project card content */}
            <div className="mx-3 h-full rounded-xl bg-gradient-to-br from-putty to-charcoal p-0.5 shadow-xl transition hover:scale-105 duration-300">
              {/* Project details */}
              <div className="flex-col h-full justify-center align-middle rounded-[10px] bg-darkgrey p-4 sm:p-6 flex-grow">
                <div className="overflow-hidden">
                  <img
                    className="mb-5"
                    src={project.image}
                    alt={project.title}
                  />
                </div>

                <h3 className="mt-0.5 text-xl font-medium">{project.title}</h3>
                <div className="mt-4 flex flex-wrap gap-1">
                  {project.categories.map((category, index) => (
                    <span
                      key={index}
                      className="whitespace-nowrap rounded-full bg-charcoal px-2.5 py-0.5 text-s"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href={project.projectLink}
                    className="text-blue-500 text-sm hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Link
                  </a>
                  <span className="mx-2">•</span>
                  <a
                    href={project.liveLink}
                    className="text-blue-500 text-sm hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="selected-project">
          {/* Project details */}
          <div className="rounded-[10px] bg-darkgrey p-4 sm:p-6">
            <img src={selectedProject.image} alt={selectedProject.title} />
            <time className="block text-xs">{selectedProject.date}</time>
            <a
              href={selectedProject.projectLink}
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="mt-0.5 text-lg font-medium">
                {selectedProject.title}
              </h3>
            </a>
            <div className="mt-4 flex flex-wrap gap-1">
              {selectedProject.categories.map((category, index) => (
                <span
                  key={index}
                  className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                >
                  {category}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <a
                href={selectedProject.projectLink}
                className="text-blue-500 text-sm hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project Link
              </a>
              <span className="mx-2">•</span>
              <a
                href={selectedProject.liveLink}
                className="text-blue-500 text-sm hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
            </div>
          </div>
          <button
            onClick={() => setSelectedProject(null)}
            className="close-button"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
