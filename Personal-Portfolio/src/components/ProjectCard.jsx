import React from 'react';
import Chip from './Chip';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ data }) => {
  return (
    <div id="project-card" className="flex flex-grow flex-col w-xl">
      <p id="project-img" className="gradient rounded-t-3xl h-80"></p>
      <div
        id="project-content"
        className="rounded-b-3xl flex-1 bg-neutral-800 p-6"
      >
        <div id="project-content__headers">
          <h3>{data.name}</h3>
        </div>
        <div id="project-content__chip-wrapper" className="flex gap-2 pt-4">
          {data.technologies.map((tech) => (
            <Chip text={tech} />
          ))}
        </div>
        <p className="project-desc py-4">{data.desc}</p>
        <div id="project-content__footer-wrapper">
          {data.weblink && <button>web link</button>}
          {data.gitlink && (
            <a
              href={data.gitlink}
              target="_blank"
              className="text-2xl text-white"
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
