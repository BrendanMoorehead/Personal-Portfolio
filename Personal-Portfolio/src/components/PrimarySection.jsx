import React from 'react';
import photo from './../brendanmoorehead.jpg';
const PrimarySection = () => {
  return (
    <div className="py-36 md:px-56 mx-40 gap-60 flex items-center">
      <div >
        <h1 className="primary__name leading-tight select-none">
          BRENDAN<br></br> MOOREHEAD
        </h1>
        <h3 className="primary__title select-none"> Software Developer</h3>
      </div>
      <div className="hidden md:block">
        <img src={photo} className="rounded-3xl object-contain select-none" />
      </div>
    </div>
  );
};

export default PrimarySection;
