import React from "react";

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
    categories: ["HTML", "React", "CSS"],
    image: gpt4,
    projectLink: "https://github.com/Kcounts93/gpt4-react-landing",
    liveLink: "https://kcounts93.github.io/gpt4-react-landing/",
    featured: true, // Featured project
  },
  {
    id: 2,
    title: "The King's Quest",
    subtitle: "Snippet",
    categories: ["HTML", "CSS", "JS"],
    image: kingsQuest,
    projectLink: "https://github.com/Kcounts93/kings-quest-cyoa",
    liveLink: "https://kcounts93.github.io/kings-quest-cyoa//",
    featured: true, // Featured project
  },
  {
    id: 3,
    title: "On the Rocks Website",
    subtitle: "Snippet",
    categories: ["Bootstrap", "SASS", "JS"],
    image: otr,
    projectLink: "https://github.com/Kcounts93/on-the-rocks",
    liveLink: "https://ontherocksmixology.netlify.app/",
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
    categories: ["React", "Typescript"],
    image: notesApp,
    projectLink: "https://github.com/Kcounts93/react-notes-app",
    liveLink: "https://kcounts93.github.io/react-notes-app/",
    featured: false, // Featured project
  },

  {
    id: 6,
    title: "Front End Portfolio",
    subtitle: "Snippet",
    categories: ["HTML", "Tailwind", "React"],
    image: portfolioImg,
    projectLink: "#",
    liveLink: "#",
    featured: false, // Featured project
  },
];

const Projects = () => {
  const projectClasses = [
    "col-span-1 row-span-2", // First project: 1 column, 2 rows
    "col-span-2 row-span-1", // Second project: 2 columns, 1 row
    "col-span-1 row-span-1", // Third project: 1 column, 1 row
    "col-span-1 row-span-2", // Fourth project: 1 column, 2 rows
    "col-span-2 row-span-1", // Fifth project: 2 columns, 1 row
  ];

  return (
    <div id="Projects" className="section">
    <div className="container mx-auto px-4 py-8 h-[90vh]">
      <div className="grid grid-cols-3 gap-4 h-full">
        {projectsData.map((project, index) => (
          <div key={project.id} className={`${projectClasses[index % projectClasses.length]} shadow-lg overflow-hidden`}>
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
export default Projects;
