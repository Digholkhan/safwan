import React from "react";
import Human from "../../../assets/human.png";
import Button from "../../Button";

const Banner = () => {
  return (
    <>
      <div className="bg-Banner bg-cover bg-center">
        <div className="container flex justify-between items-center h-[800px]">
          <div className="z-10 ">
            <h1 className="text-[100px] font-bold text-white font-vellkorn"><span className="block">Hello!</span> I’m Zarror Nibors</h1>
            <p className="text-[#ffffff96] text-xl font-Jost w-[670px]">
              I’am freelance  <span className='font-semibold text-white'>UI/UX Designer</span> based in Indonesia who loves to
              craft attractive design experiences for the web.
            </p>
            <Button text="Contact Me" className='btn mt-12'/>
          </div>
          <div className="absolute right-0 ">
            <img src={Human} alt="" className="h-[800px]"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
