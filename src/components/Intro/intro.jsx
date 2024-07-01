import "../Intro/intro.css";
import profileImg from '../../assets/for_portfolio__1_-removebg-preview.png'
function Intro(){

    return(
        <>
            <div className="w-[100%] h-[90vh] flex overflow-hidden mt-[90px] intro" id="Home">
                <div className="w-[50%] h-[85vh] flex flex-col justify-center items-start pl-[100px] leftContent max-sm:p-[40px] main">
                    <h3 className="text-black text-[25px] mb-[5px]">Welcome,</h3>
                    <h1 className="text-[80px] text-[#008bc6] mb-[5px]">I'm Ajay,</h1><span><h2 className="text-[40px] mb-[10px] font-light">FRONTEND Developer</h2></span>
                    <span className="text-[18px] text-black">A expert in web design and responsive web applications!</span>
                </div>
                <div className="w-[50%] h-[85vh] flex justify-center items-center rightContent">
                    <div className="relative w-[400px] h-[400px] bg-[#4ac1eb] z-0 rotate-[43deg] shadow-[20px_0px_60px_40px_rgba(128, 210, 244,0.8)] outerSquare ">
                    <div className="w-[350px] h-[350px] bg-[#c2ebfe] overflow-hidden absolute top-[50px] right-[84px] innerSquare">
                        <img src={profileImg} className="w-[320px] rotate-[-40deg] translate-x-[60px] z-1"/>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;