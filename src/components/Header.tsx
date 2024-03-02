import { useState } from "react";
import profilePic from "../assets/profilePic.jpg";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsNavOpen(false); // Close the navigation on click
    }
  };

  return (
    <header className="relative py-4">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      {/* Header content */}
      <div className="container mx-auto relative z-10 flex justify-between items-center px-4">
        {/* Icon button for mobile */}
        <div className="md:hidden">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Profile picture and name */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={profilePic}
              alt="Profile"
              className="w-24 h-24 rounded-full shadow-md"
            />
            <div className="absolute bottom-0 right-0 bg-green-400 rounded-full border-2 border-white w-5 h-5"></div>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">
              Leon Schwinkendorf
            </h1>
            <p className="text-sm text-gray-600">Web Developer</p>
          </div>
        </div>

        {/* Navigation links */}
        <nav className={`md:flex space-x-4 ${isNavOpen ? "block" : "hidden"}`}>
          {/* Scroll to sections on click */}
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => scrollTo("about")}
          >
            About
          </button>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => scrollTo("projects")}
          >
            Projects
          </button>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => scrollTo("contact")}
          >
            Contact
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
            onClick={() => scrollTo("login")}
          >
            Login
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
