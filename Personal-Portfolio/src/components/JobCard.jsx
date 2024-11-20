import React from 'react';
import Chip from './Chip';
const JobCard = ({ jobData }) => {
  return (
    <div className="flex-1 rounded-3xl bg-neutral-800 min-h-96 p-12 hover:drop-shadow-lg duration-300 ease-in-out">
      <h3>{jobData.employer}</h3>
      <h4 className="job__title pb-2">{jobData.jobTitle}</h4>
      <div className="flex">
        <div className="flex gap-3 py-3 flex-col">
          {jobData.terms.map((term) => (
            <Chip key={term} text={term} />
          ))}
        </div>
        <div className="flex-1 pt-3 px-8">
          {jobData.details.map((detail) => (
            <p className="detail pb-4">- {detail}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
