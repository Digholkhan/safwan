import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Box_Heading from "../../Box_Heading";

const Skills = () => {
  const percentage = 50;
  return (
    <>
      <div className="container flex justify-between items-center  py-20">
        <div className="w-[270px] h-[282px] shadow-md text-center pt-7">
          <CircularProgressbar
            value={70}
            text={`${70}%`}
            className="w-[167px] h-[167px]"
          />
          <Box_Heading text="Graphic Design" className="pt-6" />
        </div>
        <div className="w-[270px] h-[282px] shadow-md  text-center pt-7">
          <CircularProgressbar
            value={50}
            text={`${50}%`}
            className="w-[167px] h-[167px]"
          />
          <Box_Heading text="Web Designing " className="pt-6" />
        </div>
        <div className="w-[270px] h-[282px]  shadow-md  text-center pt-7">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            className="w-[167px] h-[167px]"
          />
          <Box_Heading text="Brand Design" className="pt-6" />
        </div>
        <div className="w-[270px] h-[282px] shadow-md text-center pt-7">
          <CircularProgressbar
            value={40}
            text={`${40}%`}
            styles={buildStyles({
              pathColor: `#E5745D`,
              textColor: "#E5745D",
            })}
            className="w-[167px] h-[167px] "
          />
          <Box_Heading text="Web Development" className="pt-6" />
        </div>
      </div>
    </>
  );
};

export default Skills;
