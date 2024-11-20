import React from 'react';
import EducationCard from './EducationCard';
const EducationSection = () => {
  return (
    <div id="projects" className="py-36 mx-auto">
      <h2 className="section__header text-center select-none">EDUCATION</h2>
      <div className="flex flex-wrap sm:px-12 gap-24 justify-center border-1">
        <EducationCard />
      </div>
    </div>
  );
};

export default EducationSection;
