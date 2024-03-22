import { FiX } from "react-icons/fi";

const Modal = ({ project, isOpen, onRequestClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="relative bg-charcoal p-4 rounded-lg max-w-lg w-full">
        {/* Close Icon in the top-right corner */}
        <button
          onClick={onRequestClose}
          className="absolute top-0 right-0 mt-2 mr-2 text-white text-lg leading-none z-50"
        >
          <FiX className="text-2xl" />
        </button>
        <div className="flex flex-col">
          <h2 className="text-xl font-medium">{project.title}</h2>
          <div className="h-[300px] overflow-hidden flex justify-center items-center">
            <img src={project.image} alt={project.title} className="my-2 h-100 w-100" />
          </div>
          <p className="my-2 text-lg">About the project:</p>
          <p className="my-2 font-light">{project.subtitle}</p>
          <p className="my-2 text-lg ">Technologies used:</p>
          <p className="text-lg mb-2">{project.categories.join(" | ")}</p>
          <div className="flex">
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 underline hover:text-drap transition duration-500"
          >
            Code
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 underline hover:text-drap transition duration-500"
          >
            Live Project
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
