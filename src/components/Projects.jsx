import React, { useState } from "react";
import Modal from "./Modal"; // Assuming you have a Modal component

// Project data
import notesApp from "../assets/notes-app.png";
import otr from "../assets/ontherocks.png";
import gpt4 from "../assets/gpt4.png";
// import chatBot from "../assets/chatronix.png";
import portfolioImg from "../assets/portfolio.png";
import kingsQuest from "../assets/kings-quest.png";

const projectsData = [
  {
    id: 1,
    title: "GPT-4 Landing Page",
    subtitle: "Snippet",
    categories: ["HTML", "CSS", "JS", "React"],
    image: gpt4,
    projectLink: "https://github.com/Kcounts93/gpt4-react-landing",
    liveLink: "https://kcounts93.github.io/gpt4-react-landing/",
    featured: true, // Featured project
  },

  {
    id: 2,
    title: "On the Rocks",
    subtitle: "Snippet",
    categories: ["HTML", "CSS", "JS", "Bootstrap", "SASS"],
    image: otr,
    projectLink: "https://github.com/Kcounts93/on-the-rocks",
    liveLink: "https://ontherocksmixology.netlify.app/",
    featured: true, // Featured project
  },  
  {
    id: 3,
    title: "The King's Quest",
    subtitle: "Snippet",
    categories: ["HTML", "CSS", "JS"],
    image: kingsQuest,
    projectLink: "https://github.com/Kcounts93/kings-quest-cyoa",
    liveLink: "https://kcounts93.github.io/kings-quest-cyoa//",
    featured: true, // Featured project
  },
  // {
  //   id: 4,
  //   title: "Chatronix AI Chatbot ",
  //   subtitle: "Snippet",
  //   categories: ["Bootstrap", "PHP", "JS"],
  //   image: chatBot,
  //   projectLink: "https://github.com/Kcounts93/php-chatbot",
  //   liveLink: "https://chatronix.kaylacounts.com/",
  //   featured: false, // Featured project
  // },
  {
    id: 5,
    title: "Category Notes App",
    subtitle: "Snippet",
    categories: ["HTML", "CSS", "JS", "Bootstrap", "React"],
    image: notesApp,
    projectLink: "https://github.com/Kcounts93/react-notes-app",
    liveLink: "https://kcounts93.github.io/react-notes-app/",
    featured: false, // Featured project
  },

  {
    id: 6,
    title: "Front End Portfolio",
    subtitle: "Snippet",
    categories: ["HTML", "CSS", "JS", "Tailwind", "React"],
    image: portfolioImg,
    projectLink: "#",
    liveLink: "#",
    featured: false, // Featured project
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectClasses = [
    "col-span-1 row-span-2",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-1",
  ];

  // Function to open modal with project details
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="Projects" className="section" >
    <div className="container mx-auto px-5 md:px-10 lg:px-20 mt-20 mb-10 h-[80vh]">
      <div className="grid grid-cols-3 gap-4 h-full">
        {projectsData.map((project, index) => (
          <div key={project.id} className={`${projectClasses[index % projectClasses.length]} shadow-lg rounded-lg overflow-hidden group relative`}>
            <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-charcoal backdrop-filter backdrop-blur-md bg-opacity-60 opacity-0 group-hover:opacity-100 flex justify-center items-center duration-500 ease-in-out">
              <div className="text-center text-putty">
                <p className="text-xl font-medium">{project.title}</p>
                <p className="mt-2">{project.categories.join(', ')}</p>
              </div>
            </div>
            <button onClick={() => openModal(project)} className="absolute inset-0 w-full h-full z-10 focus:outline-none"></button>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal project={selectedProject} isOpen={!!selectedProject} onRequestClose={closeModal} />
      )}
    </div>
    </div>
  );
};

export default Projects;
