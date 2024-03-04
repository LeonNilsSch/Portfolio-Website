import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import ProfilePicture from "../assets/profilePic.jpg";

const Home: React.FC = () => {
  return (
    <div id="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-40">
        <div className="flex items-center mb-8">
          <div className="relative">
            <img
              src={ProfilePicture}
              alt="Profile Picture"
              className="h-auto w-[240px] sm:w-[300px] rounded-full mr-10 sm:mr-20"
            />
            <div className="absolute bottom-0 right-0 h-10 w-10 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <p className="text-yellow-600 ml-5">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-white ml-5 ">
              Leon Schwinkendorf
            </h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] ml-5">
              Im a Computing Scientist Trainee.
            </h2>
          </div>
        </div>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack Computing Scientist Trainee. Currently, I’m focused
          on building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 rounded flex items-center hover:bg-yellow-500 hover:border-yellow-500">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
