import React from 'react';
import photo from './../brendanmoorehead.jpg';
const PrimarySection = () => {
  return (
    <div className="py-36 px-56 flex">
      <div className="flex-1 px-36 content-center">
        <h1 className="primary__name leading-tight select-none">
          BRENDAN<br></br> MOOREHEAD
        </h1>
        <h3 className="primary__title select-none"> Software Developer</h3>
      </div>
      <div className="flex-1 pr-36 content-center">
        <img src={photo} className="rounded-3xl object-contain select-none" />
      </div>
    </div>
  );
};

export default PrimarySection;
