import React from "react";


const Footer = () => {
  return (
    <>
    <div className="w-full h-auto bg-[#c2ebfe] ">
    <div className=" w-full h-5 bg-[#008bc6]"></div>
      <div className="flex justify-center items-center flex-col h-auto p-5 flex-wrap">
        <h1 className="text-[30px] text-[#008bc6]">MyFolio</h1>
        <div>
          <a href="https://www.linkedin.com/in/ajay-m-7408a4291/" target="_blank">
            <i className="fa-brands fa-linkedin text-[30px] p-5 text-[#008bc6]"></i>
          </a>
          <a href="https://www.instagram.com/_ajx.y?igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
            <i className="fa-brands fa-instagram text-[30px] p-5 text-[#008bc6]"></i>
          </a>
          <a href="https://github.com/Ajaym1618" target="_blank">
            <i className="fa-brands fa-github text-[30px] p-5 text-[#008bc6]"></i>
          </a>
        </div>
        <div className="text-[#008bc6]">CopyRight &#169; 2023</div>
      </div>
    </div>
    
    </>
  );
};

export default Footer;
