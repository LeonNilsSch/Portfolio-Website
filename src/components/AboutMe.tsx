//AboutMe.tsx////////////////////////////////////////////////////////////////

"use client";

import { FaArrowDown } from "react-icons/fa";

const AboutMe = () => {
  const scrollToBottom = () => {
    const element = document.getElementById("bottom")!;
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 mb-20">
      <div className="max-w-5xl mx-auto mb-20">
        <h1 className="text-3xl font-bold mb-8">About Me</h1>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
          arcu sit amet turpis elementum bibendum. Ut vel maximus nunc, eu
          dapibus lorem. Nulla facilisi. Mauris ultrices nunc et felis
          ullamcorper, eget lobortis est lacinia. Nulla facilisi. Aliquam erat
          volutpat. Integer eu nunc fermentum, varius odio sit amet, euismod
          libero. Integer scelerisque, libero nec convallis feugiat, odio elit
          rhoncus velit, nec bibendum magna lacus non orci. Suspendisse
          efficitur orci non ligula hendrerit, quis fringilla purus pharetra.
          Nulla non nisi vitae nulla lobortis finibus ut et erat. Suspendisse
          volutpat eleifend mi, vitae interdum sapien faucibus eget. Nam sed
          orci pretium, molestie nisi vitae, interdum sapien.
        </p>
        <p className="text-lg">
          Fusce ut arcu et orci eleifend sollicitudin. Praesent accumsan
          dignissim velit, non lacinia risus venenatis et. Duis et mi vitae nisi
          consectetur posuere. Vivamus id aliquam orci. Morbi nec arcu vel velit
          efficitur condimentum in eget nunc. Curabitur nec tortor quis lorem
          mollis accumsan. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia Curae; Nunc consectetur purus vel arcu
          aliquet, in cursus urna interdum. Integer vestibulum a lorem eget
          volutpat.
        </p>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-lg shadow p-6 mt-8">
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
            <p className="text-sm font-medium text-gray-900">August 2023</p>
            <p className="text-lg font-semibold text-gray-800">
              Joined Fielmann GROUP AG.
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
              arcu sit amet turpis elementum bibendum.
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
            <p className="text-sm font-medium text-gray-900">December 2021</p>
            <p className="text-lg font-semibold text-gray-800">
              Graduated from University
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
              arcu sit amet turpis elementum bibendum.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-10">
        <a
          href="#bottom"
          className="text-white-500 hover:text-gray-500"
          onClick={scrollToBottom}
        >
          <FaArrowDown className="h-6 w-6 mt-20 mb-20" />
        </a>
      </div>

      <div id="bottom"></div>
    </div>
  );
};

export default AboutMe;
