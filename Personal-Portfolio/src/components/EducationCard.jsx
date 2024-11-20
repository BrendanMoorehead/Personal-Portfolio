import React, { useState, useRef, useEffect } from 'react';
import Chip from './Chip';
const EducationCard = ({ data }) => {
  return (
    <div className="relative mx-auto flex flex-col bg-neutral-800 p-6 rounded-3xl overflow-hidden">
      <div className="flex justify-between">
        <p className="employer-title">Bachelor of Computing</p>
        <p className="job-title">2020 - 2025</p>
      </div>
      <div>
        <p className="job-title">Computer Science</p>
        <p className="pb-8">University of Guelph</p>
      </div>
      <p className="relevant-studies">Relevant Studies</p>
      <div className="flex flex-wrap gap-2">
        <Chip text="Software Testing" />
        <Chip text="Human Computer Interaction" />
        <Chip text="Database Systems" />
        <Chip text="Computer Networks" />
      </div>
    </div>
  );
};

export default EducationCard;
