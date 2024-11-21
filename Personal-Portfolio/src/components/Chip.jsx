import React from 'react';

const Chip = ({ text }) => {
  return (
    <div className="px-4 py-1 rounded-3xl border-1.5 border-white hover:bg-stone-900 transition-colors duration-300 ease-in-out select-none text-center">
      <p>{text}</p>
    </div>
  );
};

export default Chip;
