import React from 'react';

const JobCard = ({ jobData }) => {
  return (
    <div className="flex-1 my-36 rounded-3xl bg-neutral-700 min-h-96 p-12">
      <h3>{jobData.employer}</h3>
      <h4>{jobData.jobTitle}</h4>
      <div className="flex">
        <div className="flex flex-col border-1.5 justify-center rounded-3xl">
          {jobData.terms.map((term) => (
            <div
              key={term.index}
              className="hover:bg-neutral-600 transition-colors duration-300 ease-in-out p-3 rounded-3xl"
            >
              <p className="text-white">{term.season}</p>
              <p className="blue">{term.year}</p>
            </div>
          ))}
        </div>
        <div>details</div>
      </div>
    </div>
  );
};

export default JobCard;
