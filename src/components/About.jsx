import React from "react";
import icon from "../assets/icon.jpg"

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col  justify-center h-full px-4   items-center md:flex-row">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="max-w-screen-lg  flex  items-center justify-center md:flex-row ">
        <div>
          <p className="text-xl  text-transform: capitalize px-3">
            <span>Hy My Name is Vikas Chand</span> And Iam Front-End Devloper. I
            can provide clean code and pixel with  perfect design also make the
            website more &more interactive with web perfect design. I also make the website more
            interactive with web animation A responsive design makes your
            website accessible to all users, reqarding of their device
          </p>
          </div>
          <div>
            <img src={icon} alt=""  
            className="rounded-l-full rounded-r-full   w-2/3 md:w-full shadow-lg  hover:shadow-blue-500/80 cursor-pointer duration-200"
            />
          </div>
          </div>
      </div>
    </div>
  );
};

export default About;
