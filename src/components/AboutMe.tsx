import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";
import SchuleImage from "../assets/schule.png";
import BrilleImage from "../assets/brille.png";
import PapierImage from "../assets/papier.png";

const AboutMe = () => {
  return (
    <div
      id="aboutme"
      className="min-h-screen flex flex-col justify-between pt-20"
    >
      <div className="container mx-auto p-20 lg:px-8">
        <div className="max-w-5xl mx-auto mb-20">
          <h1 className="text-3xl font-bold mb-8 text-center">About Me</h1>
          <p className="text-lg mb-4">
            As a 21 year old Computer Scientist Trainee at Fielmann Group AG, I
            blend my passion for technology with a keen sense of organization
            and productivity. Following my completion of a "Fachabitur" in
            Germany, I deliberately chose this path to further cultivate my
            skills in a dynamic environment like Fielmann. In my professional
            routine, I advocate for efficient processes and strive for optimal
            outcomes on a daily basis. These principles not only guide me in my
            job but also extend to my personal life.
          </p>
          <p className="text-lg mb-20">
            Outside of work, I am an avid basketball player, cherishing the team
            spirit and challenges of the sport. My love for technology is also
            evident in my leisure time, where I am always on the lookout for new
            gadgets and innovations. As a hobbyist graphic designer, I find an
            outlet for my creative side while simultaneously deepening my
            technical skills. Overall, I aspire to harmonize my passions and
            abilities in a balanced lifestyle and contribute to the development
            of innovative solutions at Fielmann.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-10 mt-8 mb-10 ">
          <h2 className="text-xl font-bold mb-4">My Timeline</h2>
          {/* MSA Abschluss */}
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0">
              <img className="h-12 w-12 " src={PapierImage} alt="Profile" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">Juni 2019</p>
              <p className="text-lg font-semibold text-gray-800">
                Achieving my "MSA Abschluss"
              </p>
              <p className="text-gray-700">
                had my MSA Exam/Presentations and got my "mittleren
                Schulabschluss"
              </p>
            </div>
          </div>
          {/* MSA Abschluss */}
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0">
              <img className="h-12 w-12 " src={PapierImage} alt="Profile" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">Juni 2019</p>
              <p className="text-lg font-semibold text-gray-800">
                Achieving my "MSA Abschluss"
              </p>
              <p className="text-gray-700">
                had my MSA Exam/Presentations and got my "mittleren
                Schulabschluss"
              </p>
            </div>
          </div>
          {/* Anfang der Oberstufe */}
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
          {/* Ende meiner Schullaufbahn */}
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0">
              <img className="h-12 w-12 " src={SchuleImage} alt="Profile" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">Februar 2023</p>
              <p className="text-lg font-semibold text-gray-800">
                Ending of the academical part of my "Fachabitur"
              </p>
              <p className="text-gray-700">
                Choose the way of the "Fachabitur" and began to start look for
                an Appreticeship
              </p>
            </div>
          </div>
          {/* Anfang meiner Ausbildung bei Fielmann */}
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
                My first day as an Systemadministration Trainee at FIELMANN
                GROUP AG.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mb-80">
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className=" hover:bg-yellow-500 hover:border-yellow-500 cursor-pointer flex items-center rounded-full border border-gray-500 p-2 animate-bounce"
          style={{ width: "fit-content" }}
        >
          <div className="rounded-full border border-gray-500 p-2">
            <FaArrowDown className="h-6 w-6" />
          </div>
          <p className="ml-2">Click Me :D</p>
        </Link>
      </div>

      <div id="bottom"></div>
    </div>
  );
};

export default AboutMe;
