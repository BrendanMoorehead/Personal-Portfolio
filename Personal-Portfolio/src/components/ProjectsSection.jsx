import { projectDetails } from '../data/projectDetails';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  return (
    <div id="projects" className="py-36">
      <h2 className="section__header text-center select-none">PROJECTS</h2>
      <div className="flex flex-wrap sm:px-12 gap-24 justify-center my-12">
        {projectDetails.map((data) => (
          <div key={data.id} className="w-96 h-full">
            <ProjectCard data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
