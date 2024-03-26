import React, { useState } from "react";
import Modal from "./Modal";

// Project data
import notesApp from "../assets/notes-app.png";
import otr from "../assets/ontherocks.png";
import gpt4 from "../assets/gpt4.png";
import portfolioImg from "../assets/portfolio.png";
import kingsQuest from "../assets/kings-quest.png";

const projectsData = [
  {
    id: 1,
    title: "GPT-4 Landing Page",
    subtitle:
      "The ChatGPT-4 Landing Page is a testament to my front-end development journey with NuCamp's React course, showcasing mastery in React, BEM for CSS organization, and custom styling without reliance on frameworks. This project highlights my dedication to learning and excellence in web development, embodying core React principles, personalized UI design, and a clean, systematic file structure for optimal code readability and scalability.",
    categories: ["HTML", "CSS", "JS", "React"],
    image: gpt4,
    projectLink: "https://github.com/Kcounts93/gpt4-react-landing",
    liveLink: "https://kcounts93.github.io/gpt4-react-landing/",
  },

  {
    id: 2,
    title: "On the Rocks",
    subtitle:
      "The On The Rocks Mixology Academy Website showcases my first fully functional web app, leveraging Bootstrap 5.3 and SASS/SCSS for responsive design. This project was a hands-on learning experience in employing modern, basic technologies to build a mixology education platform, blending my passion for bartending with skills in creating engaging, custom web components.",
    categories: ["HTML", "CSS", "JS", "Bootstrap", "SASS"],
    image: otr,
    projectLink: "https://github.com/Kcounts93/on-the-rocks",
    liveLink: "https://ontherocksmixology.netlify.app/",
  },
  {
    id: 3,
    title: "The King's Quest",
    subtitle:
      "The King's Quest is a choose-your-own-adventure game crafted with vanilla HTML, CSS, and JavaScript. Emphasizing decision-driven narratives, it leverages structured object-oriented programming for dynamic story progression, offering players a unique, interactive storytelling experience.",
    categories: ["HTML", "CSS", "JS"],
    image: kingsQuest,
    projectLink: "https://github.com/Kcounts93/kings-quest-cyoa",
    liveLink: "https://kcounts93.github.io/kings-quest-cyoa//",
  },
  {
    id: 5,
    title: "Category Notes App",
    subtitle:
      "The React Category Notes App is a testament to my growing expertise in React and state management, enriched by integrating Bootstrap 5.3 for a responsive layout. This project was a deep dive into utilizing local storage for data persistence and advancing my understanding of state management techniques. Through developing functionalities to filter, search, and tag notes, I gained valuable insights into creating more organized and user-friendly applications. This experience has significantly bolstered my skills and enthusiasm for tackling more complex projects in the future.",
    categories: ["HTML", "CSS", "JS", "Bootstrap", "React"],
    image: notesApp,
    projectLink: "https://github.com/Kcounts93/react-notes-app",
    liveLink: "https://kcounts93.github.io/react-notes-app/",
  },

  {
    id: 6,
    title: "Front End Portfolio",
    subtitle:
      "My personal portfolio website has been one of the biggest sources of learning. It has gone through many iterations and so much growth. I have learned from this more than anything so far. It has challenged me to try new things, read an un-godly amount of documentation and expand my horizons on what I can do. I built this using Tailwind and React. I never used Tailwind before this and now I love it. I've learned state management and more on React hooks. It's been such a fun journey that will truly never end.",
    categories: ["HTML", "CSS", "JS", "Tailwind", "React"],
    image: portfolioImg,
    projectLink: "https://github.com/Kcounts93/my-portfolio",
    liveLink: "#",
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
    <div id='Projects' className='section'>
      <div className='container mx-auto px-5 mb-28 md:mb-28 md:px-10 lg:px-20 mt-20 h-[80vh]'>
        <h2 className='text-4xl mb-10 font-light'>Projects</h2>
        <div className='grid grid-cols-3 gap-4 h-full'>
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`${
                projectClasses[index % projectClasses.length]
              } shadow-lg rounded-md overflow-hidden group relative`}
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-charcoal backdrop-filter backdrop-blur-md bg-opacity-60 opacity-0 group-hover:opacity-100 flex justify-center items-center duration-500 ease-in-out'>
                <div className='text-center text-putty'>
                  <p className='text-sm md:text-xl font-medium'>
                    {project.title}
                  </p>
                  <p className='mt-2 text-xs md:textlg'>
                    {project.categories.join(", ")}
                  </p>
                </div>
              </div>
              <button
                onClick={() => openModal(project)}
                className='absolute inset-0 w-full h-full z-10 focus:outline-none transition duration-700'
              ></button>
            </div>
          ))}
        </div>
        {selectedProject && (
          <Modal
            project={selectedProject}
            isOpen={!!selectedProject}
            onRequestClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
