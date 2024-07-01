import React from "react";
import "./skill.css";
import tailwind from "../../assets/tailwind-css-icon.png";
import python from "../../assets/python-logo.png";

const Skill = () => {
  return (
    <div className="w-full h-auto p-5 border-2 border-[#ffffff] rounded-2xl skill">
      <h1 className="text-[40px] text-[#008bc6] border-b-2 border-[#008bc6] inline-block ml-10 font-semibold">
        Skills
      </h1>
      <div className="w-full h-auto p-8 grid grid-cols-3 gap-10 justify-center items-center skill-part">
        <div className="w-[100%] h-[250px] p-4 bg-[#c2ebfe] flex flex-col justify-center items-center rounded shadow-lg shadow-zinc-700 hover:scale-110 hover: transition-all hover: ease-in-out">
          <i className="fa-brands fa-html5 text-[100px] text-[#e34c26]"></i>
          <h2 className=" font-semibold">HTML</h2>
          <p className="text-center">
            I used HTML to create a user-friendly web application, showcasing my
            skill in designing responsive and visually appealing interfaces for
            a better user experience.
          </p>
        </div>
        <div className="w-[100%] h-[250px] bg-[#c2ebfe] flex flex-col justify-center items-center p-4 rounded shadow-lg shadow-zinc-700 hover:scale-110 hover: transition-all hover: ease-in-out">
          <i className="fa-brands fa-css3-alt text-[100px] text-[#264de4]"></i>
          <h2 className=" font-semibold">CSS</h2>
          <p className="text-center">
            I adeptly employed CSS to style web applications, ensuring visually
            appealing and responsive interfaces for an enhanced user experience.
          </p>
        </div>
        <div className="w-[100%] h-[250px] bg-[#c2ebfe] flex flex-col justify-center items-center p-4 rounded shadow-lg shadow-zinc-700 hover:scale-110 hover: transition-all hover: ease-in-out">
          <i className="fa-brands fa-js text-[100px] text-[#F0DB4F]"></i>
          <h2 className=" font-semibold">Javascript</h2>
          <p className="text-center">
            I effectively utilized JavaScript for dynamic web content, enhancing
            user interactions and contributing to seamless, client-side
            scripting in various projects.
          </p>
        </div>
        <div className="w-[100%] h-[250px]  flex flex-col justify-center items-center bg-[#c2ebfe] p-4 rounded shadow-lg shadow-zinc-700 hover:scale-110 hover: transition-all hover: ease-in-out">
          <img src={tailwind} className="w-[100px]"/>
          <h2 className=" font-semibold pt-4 mb-2">Tailwind Css</h2>
          <p className="text-center ">
            I effectively utilized Tailwind CSS to optimize styling in web
            applications, showcasing proficiency in visually and responsive
            interfaces for an enhanced user experience.
          </p>
        </div>
        <div className="w-[100%] h-[250px] flex flex-col justify-center items-center bg-[#c2ebfe] p-4 rounded shadow-lg shadow-zinc-700 hover:scale-110 hover: transition-all hover: ease-in-out">
          <i className="fa-brands fa-react text-[100px] text-[#61dbfb]"></i>
          <h2 className=" font-semibold">React</h2>
          <p className="text-center">
            With React, I expertly developed modular and scalable single-page
            applications, showcasing proficiency in state management for optimal
            user experiences.
          </p>
        </div>
        <div className="w-[100%] h-[250px]  flex flex-col justify-center items-center bg-[#c2ebfe] p-4 rounded shadow-lg shadow-zinc-700 hover:scale-110 hover: transition-all hover: ease-in-out">
          <img src={python} className="w-[90px]" />
          <h2 className=" font-semibold pt-2">Python</h2>
          <p className="text-center  ">
            In Python, I crafted robust back-end solutions, displaying
            versatility in server-side scripting, data manipulation, and
            efficient algorithm implementation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
