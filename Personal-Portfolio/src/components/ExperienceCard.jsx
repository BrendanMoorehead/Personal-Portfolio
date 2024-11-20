import React, { useState, useRef, useEffect } from 'react';
import TermChip from './TermChip';
import { motion } from 'framer-motion';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const ExperienceCard = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    // Measure the content's height whenever `expanded` or `data.details` changes
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [expanded, data.details]);

  return (
    <motion.div
      className="relative max-w-2xl mx-auto flex flex-col bg-neutral-800 p-6 rounded-3xl overflow-hidden"
      animate={{ height: expanded ? contentHeight + 220 : '220px' }} // Adjust height based on content and padding
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
        delay: expanded ? 0 : 0.2,
      }}
    >
      <p className="employer-title">{data.jobTitle}</p>
      <p className="job-title pb-2">{data.employer}</p>
      <div className="flex gap-2">
        {data.terms.map((term) => (
          <TermChip key={term} term={term} />
        ))}
      </div>
      <div ref={contentRef} className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: expanded ? 1 : 0 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: expanded ? 0.3 : 0,
          }}
        >
          {data.details.map((det, index) => (
            <p key={index} className="my-4 text-white">
              {det}
            </p>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full px-6 py-5">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full py-2 rounded-3xl bg-[#2b3752] text-white flex items-center justify-center"
        >
          {!expanded ? (
            <IoIosArrowDown style={{ fontSize: '1.5rem' }} />
          ) : (
            <IoIosArrowUp style={{ fontSize: '1.5rem' }} />
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
