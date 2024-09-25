import React from "react";
import img1 from "../../../assets/image-1.png";
import img2 from "../../../assets/image-2.png";
import img3 from "../../../assets/image.png";
import Section_Header from "../../Section_Header";
import Section_Title from "../../Section_Title";
import Card from "../../Card";
import Button from "../../Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <BsArrowRightShort className="text-5xl text-secondary border-2 border-[#cccccc] absolute  top-[-20%] right-0  hover:bg-primary hover:text-white" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <BsArrowLeftShort className=" text-5xl text-secondary border-2 border-[#cccccc]  absolute  top-[-20%] right-[6%]  hover:bg-primary hover:text-white" />
    </div>
  );
}

const Recent_Projects = () => {
 const settings = {
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 3,
   nextArrow: <SampleNextArrow />,
   prevArrow: <SamplePrevArrow />,
 };
  return (
    <>
      <div className="relative container  py-20">
        <div className='mb-10'>
          <Section_Title text="Recent Projects" className="!gap-10" />
          <Section_Header text="My Recent Projects" />
        </div>
        <Slider {...settings}>
          <Card
            imgSrc={img3}
            text={"Branding & Digital Video Campaign For George’s Cafe"}
            Description={"Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."} 
            Titletext={"Analytics, UI-Ux"} 
            viewText={"View Case Studies"} 
            MainclassName="!pt-0 !pb-[30px] !px-0" 
            BoxclassName="!px-8"
          />
          <Card
            imgSrc={img1}
            text={"Branding & Digital Video Campaign For George’s Cafe"}
            Description={ "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."}
            Titletext={"Mobile App"}
            viewText={"View Case Studies"}
            MainclassName="!pt-0 !pb-[30px] !px-0"
            BoxclassName="!px-8"
          />
          <Card
            imgSrc={img2}
            text={"Branding & Digital Video Campaign For George’s Cafe"}
            Description={"Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."}
            Titletext={"Web Development"}
            viewText={"View Case Studies"}
            MainclassName="!pt-0 !pb-[30px] !px-0"
            BoxclassName="!px-8"
          /> 
          <Card
            imgSrc={img3}
            text={"Branding & Digital Video Campaign For George’s Cafe"}
            Description={"Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."} 
            Titletext={"Analytics, UI-Ux"} 
            viewText={"View Case Studies"} 
            MainclassName="!pt-0 !pb-[30px] !px-0" 
            BoxclassName="!px-8"
          />
          <Card
            imgSrc={img1}
            text={"Branding & Digital Video Campaign For George’s Cafe"}
            Description={ "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."}
            Titletext={"Mobile App"}
            viewText={"View Case Studies"}
            MainclassName="!pt-0 !pb-[30px] !px-0"
            BoxclassName="!px-8"
          />
          <Card
            imgSrc={img2}
            text={"Branding & Digital Video Campaign For George’s Cafe"}
            Description={"Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."}
            Titletext={"Web Development"}
            viewText={"View Case Studies"}
            MainclassName="!pt-0 !pb-[30px] !px-0"
            BoxclassName="!px-8"
          /> 
         
        </Slider>
        <div className="flex justify-center mt-16">
          <Button className="btn" text="Explore More" />
        </div>
      </div>
    </>
  );
};

export default Recent_Projects;
