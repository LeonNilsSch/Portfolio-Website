import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-scroll";
import SchuleImage from "../assets/schule.png";
import BrilleImage from "../assets/brille.png";
import PapierImage from "../assets/papier.png";

const AboutMe = () => {
  const [isTimelineVisible, setIsTimelineVisible] = useState(true);

  const toggleTimelineVisibility = () => {
    setIsTimelineVisible(!isTimelineVisible);
  };

  return (
    <div
      id="aboutme"
      className="min-h-screen flex flex-col justify-between pt-20"
    >
      <div className="container mx-auto p-20 lg:px-8">
        <div className="max-w-3xl text-center mx-auto mb-10">
          <h1 className="text-2xl font-bold mb-8 text-center">About Me</h1>
          <p className="text-base mb-4">
            As a 21 year old Computer Scientist Trainee at Fielmann Group AG, I
            blend my passion for technology with a keen sense of organization
            and productivity. Following my completion of a "Fachabitur" in
            Germany, I deliberately chose this path to further cultivate my
            skills in a dynamic environment like Fielmann. In my professional
            routine, I advocate for efficient processes and strive for optimal
            outcomes on a daily basis. These principles not only guide me in my
            job but also extend to my personal life.
          </p>
          <p className="text-lg">
            Outside of work, I am an avid basketball player, cherishing the team
            spirit and challenges of the sport. My love for technology is also
            evident in my leisure time, where I am always on the lookout for new
            gadgets and innovations. As a hobbyist graphic designer, I find an
            outlet for my creative side while simultaneously deepening my
            technical skills. Overall, I aspire to harmonize my passions and
            abilities in a balanced lifestyle and contribute to the development
            of innovative solutions at Fielmann.
            <br />
            <br />
            View my Timeline! :)
          </p>
        </div>

        {/* Toggle button for Timeline */}
        <div className="flex justify-center mb-4 ">
          <div
            className="hover:bg-yellow-500 hover:text-white rounded-full border animate-pulse border-gray-500 p-4 cursor-pointer transition-max-height duration-300 ease-in-out"
            onClick={toggleTimelineVisibility}
          >
            <SlArrowDown
              className={`h-6 w-6 ${
                isTimelineVisible ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>

        {/* Timeline */}
        {isTimelineVisible && (
          <div
            className={`max-w-4xl mx-auto bg-white rounded-lg shadow p-10 mt-8 mb-10 transition-max-h duration-300 ${
              isTimelineVisible ? "max-h-full" : "max-h-0 overflow-hidden"
            }`}
          >
            <h2 className="text-3xl 1rem font-bold">My Timeline</h2>
            <p className="text-gray-300 py-4 mb-10">// A short overview</p>
            {/* MSA Abschluss */}
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <img className="h-12 w-12 " src={SchuleImage} alt="Profile" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">2010-2014</p>
                <p className="text-lg font-semibold text-gray-800">
                  Elementary School
                </p>
                <p className="text-gray-700">had my first years in school</p>
              </div>
            </div>
            {/* MSA Abschluss */}
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <img className="h-12 w-12 " src={PapierImage} alt="Profile" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">June 2019</p>
                <p className="text-lg font-semibold text-gray-800">
                  Achieving my "MSA Abschluss"
                </p>
                <p className="text-gray-700">
                  had my MSA Exam/Presentations and got my "mittleren
                  Schulabschluss"
                </p>
              </div>
            </div>
            {/* Beginning of the Oberstufe */}
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <img className="h-12 w-12 " src={SchuleImage} alt="Profile" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">August 2019</p>
                <p className="text-lg font-semibold text-gray-800">
                  Beginning of the Abitur
                </p>
                <p className="text-gray-700">
                  I started my Abitur on the Stadteilschule-Richard-Linde-Weg
                </p>
              </div>
            </div>
            {/* End of my academic part of my "Fachabitur" */}
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <img className="h-12 w-12 " src={SchuleImage} alt="Profile" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">
                  February 2023
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  Ending of the academic part of my "Fachabitur"
                </p>
                <p className="text-gray-700">
                  Choose the way of the "Fachabitur" and began to start look for
                  an apprenticeship
                </p>
              </div>
            </div>
            {/* Beginning of my apprenticeship at Fielmann */}
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full"
                  src={BrilleImage}
                  alt="Profile"
                />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">August 2023</p>
                <p className="text-lg font-semibold text-gray-800">
                  Joined FIELMANN GROUP AG.
                </p>
                <p className="text-gray-700">
                  My first day as a System Administration Trainee at FIELMANN
                  GROUP AG.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center mb-80 mt-80">
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="hover:bg-yellow-500 hover:border-yellow-500 cursor-pointer flex items-center rounded-full border border-gray-500 p-2 animate-bounce"
          style={{ width: "fit-content" }}
        >
          <div className=" p-2">
            <FaArrowDown className="h-6 w-6" />
          </div>
        </Link>
        <p className="text-xl  ml-4 mb-4">...Click Me :D</p>
      </div>

      <div id="bottom"></div>
    </div>
  );
};

export default AboutMe;
