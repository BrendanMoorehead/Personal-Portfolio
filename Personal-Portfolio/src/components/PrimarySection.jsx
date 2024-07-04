import React from 'react';
import photo from '../../public/brendanmoorehead.jpg';
const PrimarySection = () => {
  return (
    <div className="h-screen px-56 flex">
      <div className="flex-1 px-36  content-center">
        <h1 className="primary__name">
          Brendan<br></br> Moorehead
        </h1>
        <h3 className="primary__title"> Software Developer</h3>
      </div>
      <div className="flex-1 px-36 content-center">
        <img src={photo} className="rounded-3xl object-contain" />
      </div>
    </div>
  );
};

export default PrimarySection;
