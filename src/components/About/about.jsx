import React from "react";
import "../About/about.css";
import me from "../../assets/me.png";
import resumee from "../../assets/Ajay.M__Resume.pdf";

const About = () => {
  return (
    <div
      className="w-[100%] h-[90vh] flex mb-6 rounded-b-2xl about "
      id="About"
    >
      <div className="w-[40%] h-[90vh] flex justify-center items-center rotate-[43deg] leftAbout">
        <div className="w-[300px] h-[300px] bg-[#c2ebfe] relative outerAboutSquare">
          <div className=" w-[250px] h-[250px] overflow-hidden bg-[#4ac1eb] absolute top-[50px] left-[0px] innerAboutSquare">
            <img src={me} className="w-[250px] rotate-[-40deg]" />
          </div>
        </div>
      </div>
      <div className="w-[60%] h-[90vh] flex justify-center items-start flex-col pl-[120px] pr-[20px] rightAbout">
        <h1 className="text-[40px] text-[#008bc6] border-b-[2px] border-[#008bc6] mb-4">
          About Me
        </h1>
        <p className="text-[20px] tracking-wider break-words para pb-1 indent-10 leading-10">
          I'm a dynamic front-end developer deeply immersed in the realms of
          technology, design, and art. With a keen eye for detail and a passion
          for web development, I've dedicated my career to sculpting immersive
          online spaces. My expertise lies in the seamless translation of design
          concepts into captivating and functional websites. Through the synergy
          of code, creativity, and functionality, I thrive at the crossroads of
          technology and visual aesthetics.
        </p>
        <div className="flex ">
          <button className="mt-6 bg-[#008bc6] px-[15px] py-[10px] font-semibold text-[18px] text-white mr-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#008bc6] duration-300 download hover:border hover:border-[#008bc6] hover:bg-[white] hover:text-[#008bc6]">
            <a href={resumee} download="Resume.pdf">
              Download CV
            </a>
          </button>
          <button className="mt-6 bg-[#008bc6] px-[15px] py-[10px] font-semibold text-[18px] text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#008bc6] duration-300 view hover:border hover:border-[#008bc6] hover:bg-[white] hover:text-[#008bc6]">
            <a href={resumee} target="_blank">
              View CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
