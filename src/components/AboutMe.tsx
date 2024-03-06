import { FaArrowDown } from "react-icons/fa";

const AboutMe = () => {
  const scrollToBottom = () => {
    const element = document.getElementById("bottom")!;
    element.scrollIntoView({ behavior: "smooth" });
  };

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
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">Februar 2023</p>
              <p className="text-lg font-semibold text-gray-800">
                Ending of the academical part of my "Fachabitur"
              </p>
              <p className="text-gray-700">
                The beginning of my application phase for an apprenticeship
              </p>
            </div>
          </div>

          {/* Additional Timeline Entries */}
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src="https://via.placeholder.com/150"
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

      <div className="flex justify-center mb-8">
        <a
          href="#bottom"
          className="text-white-500 hover:text-gray-500"
          onClick={scrollToBottom}
        >
          <FaArrowDown className="h-6 w-6" />
        </a>
      </div>

      <div id="bottom"></div>
    </div>
  );
};

export default AboutMe;
