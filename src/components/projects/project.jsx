import React, { useState } from "react";
import "./project.css";
import { Carousel } from "antd";
import userPage1 from "../../assets/UserManagement/Page-1.png";
import userPage2 from "../../assets/UserManagement/Page-2.png";
import userPage3 from "../../assets/UserManagement/Page-3.png";
import userPage4 from "../../assets/UserManagement/Page-4.png";
import cycle1 from "../../assets/Cycle/cycle-1.png";
import cycle2 from "../../assets/Cycle/cycle-2.png";
import cycle3 from "../../assets/Cycle/cycle-3.png";
import cycle4 from "../../assets/Cycle/cycle-4.png";
import cycle5 from "../../assets/Cycle/cycle-5.png";
import cycle6 from "../../assets/Cycle/cycle-6.png";
import cycle7 from "../../assets/Cycle/cycle-7.png";
import weather1 from "../../assets/Weather-App/weather-1.png";
import weather2 from "../../assets/Weather-App/weather-2.png";
import cookie1 from "../../assets/Cookies/cookies-1.png";
import cookie2 from "../../assets/Cookies/cookies-2.png";
import cookie3 from "../../assets/Cookies/cookies-3.png";

const Project = () => {
  const projects = [
    { name: "User Management System", images: [userPage1, userPage2, userPage3, userPage4], about: " The User Management System is a robust web application crafted to efficiently handle user data. This project developed using React.js and Primereact, offers a seamless user experience by providing features like user registration, data visualization through Pie and BarCharts, user authentication, detailed user information viewing, and the ability to edit and delete records.The application's responsive design ensures a consistentexperience across various devices. Utilizing Axios for requests and a JSON server for backend simulation, the system showcases my proficiency in frontend development, data visualization, and user interface design. This project exemplifies my skills in creating functional and visually appealing web applications with a focus on user-friendly interactions."} ,
    { name: "E-Bike World", images: [cycle1, cycle2, cycle3, cycle4, cycle5, cycle6, cycle7], about: "  I crafted a dynamic and visually compelling website usingHTML and CSS, showcasing my proficiency in front-end web development. The site features a well-structured headerwith a sleek navigation menu, integrated font icons, and a circular slider for added dynamism. The hero section beckons users with a call-to-action button, while the product showcase elegantly presents top accessories and best e-bikes. Each section, meticulously designed and organized, highlights new arrivals, brand logos, and user testimonials. The website is responsive, ensuring seamless user solutions. experience across various devices. Employing a vibrant solutions. color palette, diverse fonts from Google Fonts, and solutions. high-quality images, I aimed to create a modern and solutions. engaging visual identity. The footer provides solutions. comprehensive information about services, support, and solutions. newsletters, completing a cohesive and user-friendly solutions. design. 'Cycles' serves as a testament to my skills insolutions. creating aesthetically pleasing and functional web solutions." },
    { name: "Weather App", images: [weather1, weather2], about: "I developed a Weather App using React that seamlessly integrates with the OpenWeatherMap API to provide users with real-time weather information. The application allows users to input a city name, fetching and displaying current temperature, wind speed, and humidity. The user interface is designed for simplicity, featuring a clean layout with the city name prominently displayed. Additionally, the app includes visual elements such as icons for wind speed and humidity, enhancing the user I employed Axios for efficient API calls and ensured a responsive design using React. The app also showcases the current date, day, and month for comprehensive weather context. This project highlights my proficiency in front-end development, API integration, and creating user-friendly interfaces. Future enhancements could include extended weather forecasts and personalized settings with user authentication. The code is well-structured, utilizing React state management to update and display real-time weather data, making it a valuable addition to my portfolio." },
    { name: "Login Form using cookies", images: [cookie1, cookie2, cookie3], about: "In this React application, I have crafted an elegant and user-friendly login interface. The user input, including the username and password, is managed through state variables, providing a seamless experience. Leveraging the useEffect hook, the application checks for stored credentials, allowing for an efficient and personalized user interaction. The login overlay, activated conditionally, comprises a thoughtfully designed form with intuitive input fields, accompanied by a 'Remember me' checkbox for added convenience. The button's dynamic disabling mechanism ensures data integrity, only enabling submission when all required fields are populated. The visually appealing interface, enriched by carefully applied CSS styling and an embedded image, reflects attention to detail. While the current implementation serves as a robust foundation, future iterations could incorporate advanced features such as authentication logic and backend integration for a comprehensive login system. This project underscores my proficiency in crafting engaging and functional React applications, showcasing a commitment to delivering high-quality user experiences." }

  ];

  const [projectIndex, setProjectIndex] = useState(0);
  const [showAbout, setShowAbout] = useState([false, false, false]);

  const handleProjectChange = (direction) => {
    setShowAbout([false, false, false]);
    setProjectIndex((prevIndex) => {
      let newIndex = prevIndex;

      if (direction === "prev") {
        newIndex = (newIndex - 1 + projects.length) % projects.length;
      } else if (direction === "next") {
        newIndex = (newIndex + 1) % projects.length;
      }
      return newIndex;
    });
  };

  const handleAbout = () => {
    setShowAbout((prevShowAbout) => {
      const newShowAbout = [...prevShowAbout];
      newShowAbout[projectIndex] = !newShowAbout[projectIndex];
      return newShowAbout;
    });
  };

  return (
    <div className="w-full h-[100vh] px-[10px] rounded-2xl project " id="Project">
      <h1 className="text-[#008bc6] inline-block text-[40px] font-semibold border-b-[2px] pt-[30px] border-[#008bc6] ml-[150px] pro">
        Projects
      </h1>
      <div className="w-full h-[85vh] flex justify-center items-center pro-2">
        <span
          className="text-[#008bc6] text-[40px] cursor-pointer"
          title="Previous Project"
          onClick={() => handleProjectChange("prev")}
        >
          <i className="fa-solid fa-chevron-circle-left bg-white rounded-[40px] hover:text-white hover:bg-[#008bc6] active:bg-[black]"></i>
        </span>
        <div className={`${projects[projectIndex] ? "" : "hidden"} w-[80%] h-[80vh] text-center m-5 px-5 rounded-[10px] bg-[#c2ebfeb1] proHead`}>
          <h1 className="text-[#008bc6] text-[35px] inline-block font-medium mt-5 border-2 px-4 border-[#008bc6]">
            {projects[projectIndex].name}
          </h1>
          {showAbout[projectIndex] ? (
            <div className="w-[100%] h-[70vh] flex justify-center items-center flex-col pt-[20px]  p-2 proAbout">
              <span className="bg-[#00000028] w-[90%] h-[60vh] mt-10 p-4 rounded-xl relative cursor-pointer About-pro">
                <h1 className="w-[50%] text-[30px] text-left font-md">About:</h1>
                <p className="w-[100%] text-[18px] text-left indent-10 paraAbout">
                  {projects[projectIndex].about}
                </p>
                <span
                  className="absolute top-[5px] right-[5px]  text-[red] w-[25px] h-[25px] rounded-[30px] flex justify-center items-center cursor-pointer"
                  onClick={handleAbout}
                >
                  <i className="fa-solid fa-xmark cursor-pointer "></i>
                </span>
              </span>
            </div>
          ) : (
            <>
              <Carousel autoplay className="w-[100%] h-[60vh] carousel">
                {projects[projectIndex].images.map((image, imgIndex) => (
                  <div key={imgIndex} className="w-full h-[60vh] !flex justify-center items-center caraImg">
                    <img src={image} className="w-[800px] h-[380px]" />
                  </div>
                ))}
              </Carousel>
              <button
                className="p-2 rounded-md font-semibold text-white bg-[#008bc6] hover:text-[#008bc6] hover:border-2 hover:border-[#008bc6] hover:bg-white"
                onClick={handleAbout}
              >
                About Project
              </button>
            </>
          )}
        </div>
        <span
          className="text-[#008bc6] text-[40px] cursor-pointer"
          title="Next Project"
          onClick={() => handleProjectChange("next")}
        >
          <i className="fa-solid fa-chevron-circle-right bg-white rounded-[40px] hover:text-white hover:bg-[#008bc6] active:bg-[black]"></i>
        </span>
      </div>
    </div>
  );
};

export default Project;





















// import React, { useState } from "react";
// import "./project.css";
// import { Carousel } from "antd";
// import userPage1 from "../../assets/UserManagement/Page-1.png";
// import userPage2 from "../../assets/UserManagement/Page-2.png";
// import userPage3 from "../../assets/UserManagement/Page-3.png";
// import userPage4 from "../../assets/UserManagement/Page-4.png";
// import cycle1 from "../../assets/Cycle/cycle-1.png";
// import cycle2 from "../../assets/Cycle/cycle-2.png";
// import cycle3 from "../../assets/Cycle/cycle-3.png";
// import cycle4 from "../../assets/Cycle/cycle-4.png";
// import cycle5 from "../../assets/Cycle/cycle-5.png";
// import cycle6 from "../../assets/Cycle/cycle-6.png";
// import cycle7 from "../../assets/Cycle/cycle-7.png";
// import weather1 from "../../assets/Weather-App/weather-1.png";
// import weather2 from "../../assets/Weather-App/weather-2.png";

// const Project = () => {
//   const [about1, setAbout1] = useState(false);
//   const [about2, setAbout2] = useState(false);
//   const [about3, setAbout3] = useState(false);
//   const [user, setUser] = useState(true);
//   const [cycle, setCycle] = useState(false);
//   const [weather, setWeather] = useState(false);

//   const handleUser = () => {
//     setUser(!user);
//   };
//   const handleCycle = () => {
//     setUser(!user);
//     setCycle(!cycle);
//     setAbout1(false);
//     setAbout2(false);
//   };

//   const handleWeather = () => {
//     setCycle(!cycle);
//     setWeather(true);
//     setAbout1(false);
//     setAbout2(false);
//   };

//   const handlePrev1 = () => {
//     setUser(false);
//     setWeather(true);
//     setAbout1(false);
//     setAbout2(false);
//   };

//   const handlePrev2 = () => {
//     setCycle(!cycle);
//     setUser(!user);
//     setAbout1(false);
//     setAbout2(false);
//   };

//   const handlePrev3 = () => {
//     setWeather(!weather);
//     setCycle(!cycle);
//     setAbout1(false);
//     setAbout2(false);
//     setAbout3(false)
//   };

//   const handleAbout1 = () => {
//     setAbout1(!about1);
//   };
//   const handleAbout2 = () => {
//     setAbout2(!about2);
//   };
//   const handleAbout3 = () => {
//     setAbout3(!about3);
//   };

//   return (
//     <div className="w-full h-[100vh] px-[10px] project ">
//       <h1 className="text-[#008bc6]  text-[40px] font-semibold border-b-[2px] pb-2 pt-[30px] border-[#008bc6] ml-[150px]">
//         Projects
//       </h1>
//       <div className="w-full h-[85vh] flex justify-center items-center">
//         {user === true ? (
//           <>
//             <span
//               className="text-[#008bc6] text-[40px] cursor-pointer"
//               title="Previous Project "
//             >
//               <i
//                 className="fa-solid fa-chevron-circle-left"
//                 onClick={handlePrev1}
//               ></i>
//             </span>
//             <div className="w-[80%] h-[80vh] text-center  m-5 px-5 rounded-[10px] bg-[#c2ebfeb1]">
//               <h1 className="text-[#008bc6] text-[30px] inline-block font-medium  mt-5 border-2 p-1 border-[#008bc6]">
//                 User Management System
//               </h1>

//               <>
//                 {about1 === true ? (
//                   <div className="w-[100%] h-[65vh] flex justify-center items-center flex-col pt-[20px]">
//                     <span className="bg-[#00000028] w-[80%] p-10 rounded-xl relative cursor-pointer">
//                       <h1 className="w-[60%] text-[30px] text-left font-md">
//                         About:
//                       </h1>
//                       <p className="w-[100%] text-[18px] text-left indent-10 pb-4">
//                         The User Management System is a robust web application
//                         crafted to efficiently handle user data. This project,
//                         developed using React.js and Primereact, offers a
//                         seamless user experience by providing features like user
//                         registration, data visualization through Pie and Bar
//                         Charts, user authentication, detailed user information
//                         viewing, and the ability to edit and delete records.
//                       </p>
//                       <p className="w-[100%] text-[18px] text-left indent-10">
//                         The application's responsive design ensures a consistent
//                         experience across various devices. Utilizing Axios for
//                         HTTP requests and a JSON server for backend simulation,
//                         the system showcases my proficiency in frontend
//                         development, data visualization, and user interface
//                         design. This project exemplifies my skills in creating
//                         functional and visually appealing web applications with
//                         a focus on user-friendly interactions.
//                       </p>
//                       <span className="absolute top-[5px] right-[5px] text-[24px] text-[red] w-[25px] h-[25px] rounded-[30px] flex justify-center items-center cursor-pointer">
//                         <i
//                           className="fa-solid fa-xmark cursor-pointer"
//                           onClick={handleAbout1}
//                         ></i>
//                       </span>
//                     </span>
//                   </div>
//                 ) : (
//                   <>
//                     <Carousel autoplay className="w-[100%] h-[60vh]">
//                       <div className="w-full h-[60vh] !flex justify-center items-center">
//                         <img src={userPage1} className="w-[800px] h-[380px]" />
//                       </div>
//                       <div className="w-full h-[60vh] !flex justify-center items-center">
//                         <img src={userPage2} className="w-[800px] h-[380px]" />
//                       </div>
//                       <div className="w-full h-[60vh] !flex justify-center items-center">
//                         <img src={userPage3} className="w-[800px] h-[380px]" />
//                       </div>
//                       <div className="w-full h-[60vh] !flex justify-center items-center">
//                         <img src={userPage4} className="w-[800px] h-[380px]" />
//                       </div>
//                     </Carousel>
//                     <button
//                       className="p-2 rounded-md font-semibold text-white bg-[#008bc6]"
//                       onClick={handleAbout1}
//                     >
//                       About Project
//                     </button>
//                   </>
//                 )}
//               </>
//             </div>
//             <span
//               className="text-[#008bc6] text-[40px] cursor-pointer"
//               title="Next Project"
//             >
//               <i
//                 className="fa-solid fa-chevron-circle-right"
//                 onClick={handleCycle}
//               ></i>
//             </span>
//           </>
//         ) : cycle === true ? (
//           <>
//             <span
//               className="text-[#008bc6] text-[40px] cursor-pointer"
//               title="Previous Project "
//             >
//               <i
//                 className="fa-solid fa-chevron-circle-left"
//                 onClick={handlePrev2}
//               ></i>
//             </span>
//             <div className="w-[80%] h-[80vh] text-center  m-5 px-5  rounded-[10px] bg-[#c2ebfeb1]">
//               <h1 className="text-[#008bc6] text-[35px] inline-block font-medium mt-5 border-2 px-4 border-[#008bc6]">
//                 E-Bike World
//               </h1>

//               {about2 === true ? (
//                 <div className="w-[100%] h-[60vh] flex justify-center items-center flex-col pt-[20px]">
//                   <span className="bg-[#00000028] w-[80%] h-[70vh] mt-10 p-5 rounded-xl relative cursor-pointer">
//                     <h1 className="w-[50%] text-[30px] text-left font-md">
//                       About:
//                     </h1>
                    // <p className="w-[100%] text-[18px] text-left indent-10 pb-4">
                    //   I crafted a dynamic and visually compelling website using
                    //   HTML and CSS, showcasing my proficiency in front-end web
                    //   development. The site features a well-structured header
                    //   with a sleek navigation menu, integrated font icons, and a
                    //   circular slider for added dynamism. The hero section
                    //   beckons users with a call-to-action button, while the
                    //   product showcase elegantly presents top accessories and
                    //   best e-bikes. Each section, meticulously designed and
                    //   organized, highlights new arrivals, brand logos, and user
                    //   testimonials.
                    // </p>
//                     <p className="w-[100%] text-[18px] text-left indent-10">
//                       The website is responsive, ensuring seamless user
//                       experience across various devices. Employing a vibrant
//                       color palette, diverse fonts from Google Fonts, and
//                       high-quality images, I aimed to create a modern and
//                       engaging visual identity. The footer provides
//                       comprehensive information about services, support, and
//                       newsletters, completing a cohesive and user-friendly
//                       design. "Cycles" serves as a testament to my skills in
//                       creating aesthetically pleasing and functional web
//                       solutions.
//                     </p>
//                     <span
//                       className="absolute top-[5px] right-[5px] text-[24px] text-[red] w-[25px] h-[25px] rounded-[30px] flex justify-center items-center cursor-pointer"
//                       onClick={handleAbout2}
//                     >
//                       <i className="fa-solid fa-xmark cursor-pointer"></i>
//                     </span>
//                   </span>
//                 </div>
//               ) : (
//                 <>
//                   <Carousel autoplay className="w-[100%] h-[60vh]">
//                     <div className="w-full h-[60vh] !flex justify-center items-center">
//                       <img src={cycle1} className="w-[800px] h-[380px] " />
//                     </div>
//                     <div className="w-full h-[60vh] !flex justify-center items-center">
//                       <img src={cycle2} className="w-[800px] h-[380px]" />
//                     </div>
//                     <div className="w-full h-[60vh] !flex justify-center items-center">
//                       <img src={cycle3} className="w-[800px] h-[380px]" />
//                     </div>
//                     <div className="w-full h-[60vh] !flex justify-center items-center">
//                       <img src={cycle4} className="w-[800px] h-[380px]" />
//                     </div>
//                     <div className="w-full h-[60vh] !flex justify-center items-center">
//                       <img src={cycle5} className="w-[800px] h-[380px]" />
//                     </div>
//                     <div className="w-full h-[60vh] !flex justify-center items-center">
//                       <img src={cycle6} className="w-[800px] h-[380px]" />
//                     </div>
//                     <div className="w-full h-[60vh] !flex justify-center items-center">
//                       <img src={cycle7} className="w-[800px] h-[380px]" />
//                     </div>
//                   </Carousel>

//                   <button
//                     className="p-2 rounded-md font-semibold text-white bg-[#008bc6]"
//                     onClick={handleAbout2}
//                   >
//                     About Project
//                   </button>
//                 </>
//               )}
//             </div>
//             <span
//               className="text-[#008bc6] text-[40px] cursor-pointer"
//               title="Next Project "
//             >
//               <i
//                 className="fa-solid fa-chevron-circle-right"
//                 onClick={handleWeather}
//               ></i>
//             </span>
//           </>
//         ) : weather === true ? (
//           <>
//             <span
//               className="text-[#008bc6] text-[40px] cursor-pointer"
//               title="Previous Project "
//             >
//               <i
//                 className="fa-solid fa-chevron-circle-left"
//                 onClick={handlePrev3}
//               ></i>
//             </span>
//             <div className="w-[80%] h-[80vh] text-center  m-5 px-5  rounded-[10px] bg-[#c2ebfeb1]">
//               <h1 className="text-[#008bc6] text-[35px] inline-block font-medium mt-5 border-2 px-4 border-[#008bc6]">
//                 Weather App
//               </h1>

//               {about3 === true ? (
//                 <div className="w-[100%] h-[50vh] flex justify-center items-center flex-col pt-[20px]">
//                   <span className="bg-[#00000028] w-[80%] h-[70vh] mt-10 p-5 rounded-xl relative cursor-pointer">
//                     <h1 className="w-[50%] text-[30px] text-left font-md">
//                       About:
//                     </h1>
//                     <p className="w-[100%] text-[18px] text-left indent-10 pb-4">
//                       I developed a Weather App using React that seamlessly
//                       integrates with the OpenWeatherMap API to provide users
//                       with real-time weather information. The application allows
//                       users to input a city name, fetching and displaying
//                       current temperature, wind speed, and humidity. The user
//                       interface is designed for simplicity, featuring a clean
//                       layout with the city name prominently displayed.
//                       Additionally, the app includes visual elements such as
//                       icons for wind speed and humidity, enhancing the user
//                       experience.
//                     </p>
//                     <p className="w-[100%] text-[18px] text-left indent-10">
//                       I employed Axios for efficient API calls and ensured a
//                       responsive design using React. The app also showcases the
//                       current date, day, and month for comprehensive weather
//                       context. This project highlights my proficiency in
//                       front-end development, API integration, and creating
//                       user-friendly interfaces. Future enhancements could
//                       include extended weather forecasts and personalized
//                       settings with user authentication. The code is
//                       well-structured, utilizing React state management to
//                       update and display real-time weather data, making it a
//                       valuable addition to my portfolio.
//                     </p>
//                     <span className="absolute top-[5px] right-[5px] text-[24px] text-[red] w-[25px] h-[25px] rounded-[30px] flex justify-center items-center cursor-pointer"  onClick={handleAbout3}>
//                       <i className="fa-solid fa-xmark cursor-pointer" ></i>
//                     </span>
//                   </span>
//                 </div>
//               ) : (
//                 <>
//                   <Carousel autoplay className="w-[100%] h-[60vh]">
//                     <div className="w-full h-[60vh] !flex justify-center items-center">
//                       <img src={weather1} className="w-[800px] h-[380px] " />
//                     </div>
//                     <div className="w-full h-[60vh] !flex justify-center items-center">
//                       <img src={weather2} className="w-[800px] h-[380px]" />
//                     </div>
//                   </Carousel>

//                   <button
//                     className="p-2 rounded-md font-semibold text-white bg-[#008bc6]"
//                     onClick = {handleAbout3}
//                   >
//                     About Project
//                   </button>
//                 </>
//               )}
//             </div>
//             <span
//               className="text-[#008bc6] text-[40px] cursor-pointer"
//               title="Next Project"
//               onClick={handleUser}
//             >
//               <i className="fa-solid fa-chevron-circle-right"></i>
//             </span>
//           </>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default Project;