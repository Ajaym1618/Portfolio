import React from "react";
import "./education.css";
import arunachala from "../../assets/arunachala-school.avif";
import bapuji from "../../assets/babuji-school.avif";
import amrita from "../../assets/amrita-college.JPG";

const Education = () => {
  return (
    <div
      className={`w-full h-[90vh] border-t-2 border-[white] rounded-2xl mb-6 education`}
    >
      <h1 className="text-[40px] text-[#008bc6] font-semibold inline-block mt-8 border-b-2 ml-16 border-[#008bc6] drop-shadow-[4px_8px_3px_#c2ebfe]">
        Education
      </h1>
      <div className="w-full h-[80vh] flex flex-wrap justify-around gap-8 p-6  edu">
        <div className="w-[420px] h-[62vh] bg-[#ffffffc0] rounded-lg overflow-hidden hover:scale-110 hover: transition-all hover: ease-in-out shadow-xl shadow-zinc-700 ">
          <div className="flex justify-center p-4">
            <img src={arunachala} className="w-[400px] h-[250px] rounded-2xl" />
          </div>
          <h2 className="font-semibold text-lg text-center pb-2">
            Arunachala matric higher secondary school
          </h2>
          <ul className="list-disc list-inside pl-8">
            <li className="text-[17px] font-semibold">SSLC (10 std)</li>
            <li className="text-[17px] font-semibold">Graduate: 2017</li>
            <li className="text-[17px] font-semibold">Percentage: 88%</li>
            <span className="font-semibold">
              <i className="fa-solid fa-location-dot pr-2 "></i>Manavilai
              Vellichanthai, Nagercoil.
            </span>
          </ul>
        </div>
        <div className="w-[420px] h-[62vh] bg-[#ffffffc0] rounded-lg overflow-hidden hover:scale-110 hover: transition-all hover: ease-in-out shadow-xl shadow-zinc-700 ">
          <div className="flex justify-center p-4">
            <img src={bapuji} className="w-[400px] h-[250px] rounded-2xl" />
          </div>
          <h2 className="font-semibold text-lg text-center pb-2">
            Bapuji memorial higher secondary school
          </h2>
          <ul className="list-disc list-inside pl-8">
            <li className="text-[17px] font-semibold">HSC (12 std)</li>
            <li className="text-[17px] font-semibold">Graduate: 2019</li>
            <li className="text-[17px] font-semibold">Percentage: 67%</li>
            <span className="font-semibold">
              <i className="fa-solid fa-location-dot pr-2 "></i> Chinnavilai
              Manavalakurichi.
            </span>
          </ul>
        </div>
        <div className="w-[420px] h-[62vh] bg-[#ffffffc0] rounded-lg overflow-hidden hover:scale-110 hover: transition-all hover: ease-in-out shadow-xl shadow-zinc-700 ">
          <div className="flex justify-center p-4">
            <img src={amrita} className="w-[400px] h-[250px] rounded-2xl" />
          </div>
          <h2 className="font-semibold text-lg text-center pb-2">
            Amrita College of Engineering and Technology
          </h2>
          <ul className="list-disc list-inside pl-8">
            <li className="text-[17px] font-semibold">
              BE Computer Science and Engineering
            </li>
            <li className="text-[17px] font-semibold">Graduate: 2023</li>
            <li className="text-[17px] font-semibold">CGPA: 77%</li>
            <span className="font-semibold">
              <i className="fa-solid fa-location-dot pr-2 "></i>Erachakulam,
              Nagercoil.
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Education;
