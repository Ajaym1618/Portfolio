import React from "react";
import "./internship.css";
import illus from "../../assets/illus-removebg-preview.png";

const Internship = () => {
  return (
    <div className="w-full h-auto p-10 border-t-4 border-[white] rounded-2xl mb-6 intern">
      <h1 className=" text-[#008bc6] border-b-2 ml-6 inline-block border-[#008bc6] text-[40px] font-semibold ">
        Internship
      </h1>
      <div className="flex m-4 rounded-2xl w-full h-auto bg-[#c2ebfe] overflow-hidden">
        <div className="w-[40%] internImg">
          <img src={illus} className="object-cover h-[400px] w-full"/>
        </div>
        <div className="w-[60%] p-5 h-auto inContent">
          <h2 className=" text-[25px] p-4 font-semibold text-[#008bc6]">
            <span>FrontEnd Development Intern at</span>
            <span className="pl-2">
              CRUD Operations Private Limited (July 2023 - October 2023)
            </span>
          </h2>
          <ul className="list-disc list-inside pl-12">
            <li className="text-[#008bc6] text-[18px]">
              <span className="text-black">
                Contributed to the development of a dynamic web application by
                implementing CRUD operations.
              </span>
            </li>
            <li className="text-[#008bc6] text-[18px]">
              <span className="text-black">
                Gained hands-on experience in HTML, CSS, and JavaScript,
                contributing to the front-end design and user interface.
              </span>
            </li>
            <li className="text-[#008bc6] text-[18px]">
              <span className="text-black">
                Implemented responsive design principles to enhance the
                application's user experience across various devices.
              </span>
            </li>
            <li className="text-[#008bc6] text-[18px]">
              <span className="text-black">
                Acquired proficiency in React.js, utilizing its components and
                state management for efficient data rendering.
              </span>
            </li>
            <li className="text-[#008bc6] text-[18px]">
              <span className="text-black">
                Successfully completed tasks as mentioned above, demonstrating
                problem-solving skills and attention to detail.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Internship;
