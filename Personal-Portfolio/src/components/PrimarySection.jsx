import React from 'react';
import photo from '../../public/brendanmoorehead.jpg';
const PrimarySection = () => {
  return (
    <div className="h-screen px-56 flex gap-40 py-24 flex ">
      <div className="pl-60 content-center">
        <h1 className="primary__name">
          Brendan<br></br> Moorehead
        </h1>
        <h3 className="primary__title"> Software Developer</h3>
      </div>
      <div className="pr-60">
        <img src={photo} className="rounded-3xl object-contain" />
      </div>
    </div>
  );
};

export default PrimarySection;
