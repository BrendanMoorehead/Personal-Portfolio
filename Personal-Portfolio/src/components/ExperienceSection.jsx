import React from 'react';
import { jobData } from '../data/jobDetails';
import JobCard from './JobCard';
const ExperienceSection = () => {
  return (
    <div id="experience" className="h-screen px-56">
      <h2>experience</h2>
      <div className="flex gap-24">
        {jobData.map((data) => (
          <JobCard key={data.id} jobData={data} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
