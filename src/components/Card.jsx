import React from 'react'
import { GoArrowRight } from "react-icons/go";

const Card = ({
  text,
  imgSrc,
  Titletext,
  Description,
  HclassName,
  MainclassName,
  BoxclassName,
  spanclassName,
  viewText,
  ...props
}) => {
  return (
    <>
      <div className={`py-[50px] my-5 px-8 shadow-md w-[370px] ${MainclassName}`}>
        <img src={imgSrc} alt="icon" />
        <div className={BoxclassName}>
          <h5 className={`text-primary  font-medium font-vellkorn mt-5`}>{Titletext}</h5>
          <h4 className={`pt-3 pb-[15px] text-secondary text-2xl font-medium font-vellkorn ${HclassName}`}>
            {text}
          </h4>
          <p className="text-[#00413db5]">{Description}</p>
          <span className={`text-secondary hover:text-primary text-lg mt-8 flex items-center gap-x-2 ${spanclassName}`}>
            {viewText}
            <GoArrowRight />
          </span>
        </div>
      </div>
    </>
  );
};

export default Card