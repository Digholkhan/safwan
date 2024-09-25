import React from 'react'
const Work_Box = ({ ImgSrc, text,ptext, ...props }) => {
  return (
    <>
      <div className="bg-secondary w-[570px]">
        <img src={ImgSrc} alt="" />
        <div className="p-5">
          <h3 className="text-white text-2xl font-semibold  font-vellkorn">{text}</h3>
          <p className="text-white  font-Jost">{ptext}</p>
        </div>
      </div>
    </>
  );
};

export default Work_Box