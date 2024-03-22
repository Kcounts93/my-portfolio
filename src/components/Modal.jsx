import { FiX } from "react-icons/fi";

const Modal = ({ project, isOpen, onRequestClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
        <div className="relative bg-charcoal p-4 rounded-lg max-w-lg w-full">
          {/* Close Icon in the top-right corner */}
          <button onClick={onRequestClose} className="absolute top-0 right-0 mt-2 mr-2 text-white text-lg leading-none z-50">
            <FiX className="text-2xl"/>
          </button>
          <h2 className="text-xl font-medium">{project.title}</h2>
          <img src={project.image} alt={project.title} className="my-2"/>
          <p className="my-2">{project.subtitle}</p>
          <p className="text-xs mb-2">{project.categories.join(', ')}</p>
          <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="mr-2 underline hover:text-drap transition duration-500">Code</a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="ml-2 underline hover:text-drap transition duration-500">Live Project</a>
        </div>
      </div>
    );
  };
  
  export default Modal;