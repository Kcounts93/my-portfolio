const ProjectCard = ({ project }) => (
  <div className="w-full sm:w-1/2 lg:w-1/3 sm:h-[450px] md:h-[400px] lg:h-[425px] p-2 flex flex-col mb-4 hover:scale-105 duration-300">
    {/* Project card content */}
    <div className="mx-2 h-full rounded-xl p-0.5 shadow-lg transition">
      {/* Project details */}
      <div className="flex-col h-full justify-center align-middle rounded-[10px] bg-charcoal p-4 sm:p-6 flex-grow">
        <div className="overflow-hidden">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <img className="mb-5" src={project.image} alt={project.title} />
          </a>
        </div>
        <h3 className="mt-0.5 text-xl font-medium">{project.title}</h3>
        <div className="mt-4 flex flex-wrap gap-1">
          {project.categories.map((category, index) => (
            <span key={index} className="whitespace-nowrap rounded-full bg-putty px-2 py-1 text-darkgrey mr-1 text-sm">
              {category}
            </span>
          ))}
        </div>
        <div className="my-4">
          <a href={project.projectLink} className="text-sm underline pointer hover:text-drap hover:pointer hover:duration-500" target="_blank" rel="noopener noreferrer">
            Code
          </a>
          <span className="mx-2">•</span>
          <a href={project.liveLink} className="text-sm underline pointer hover:text-drap hover:pointer hover:duration-500" target="_blank" rel="noopener noreferrer">
            Live project
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
