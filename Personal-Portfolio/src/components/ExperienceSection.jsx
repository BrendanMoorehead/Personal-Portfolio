import React from 'react';
import { jobData } from '../data/jobDetails';
import JobCard from './JobCard';
import ExperienceCard from './ExperienceCard';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-36 ">
      <h2 className="section__header text-center select-none">EXPERIENCE</h2>
      <div className="flex grow flex-col gap-24 my-12   ">
        {jobData.map((data) => (
          <ExperienceCard key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
