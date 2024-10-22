import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="fixed w-full z-50 bg-gray-900">
      <div className="mr-10 mx-auto flex justify-end items-center h-[70px] text-gray-300">
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:bg-gray-700 rounded-lg cursor-pointer p-2 "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="aboutme"
              smooth={true}
              duration={500}
              className="hover:bg-gray-700 rounded-lg cursor-pointer p-2"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:bg-gray-700 rounded-lg cursor-pointer p-2"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:bg-gray-700 rounded-lg cursor-pointer p-2"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:bg-gray-700 rounded-lg cursor-pointer p-2"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button onClick={toggleNav}>
            {navOpen ? (
              <FaTimes className="text-gray-300" />
            ) : (
              <FaBars className="text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <ul
        className={`md:hidden ${
          navOpen ? "block" : "hidden"
        } absolute top-[70px] left-0 w-full bg-gray-900 text-center text-gray-300`}
      >
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="block py-2 hover:bg-gray-700 cursor-pointer"
            onClick={toggleNav}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="aboutme"
            smooth={true}
            duration={500}
            className="block py-2 hover:bg-gray-700 cursor-pointer"
            onClick={toggleNav}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="block py-2 hover:bg-gray-700 cursor-pointer"
            onClick={toggleNav}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="block py-2 hover:bg-gray-700 cursor-pointer"
            onClick={toggleNav}
          >
            Projects
          </Link>
        </li>
        <li className="mb-10">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block py-2 hover:bg-gray-700 cursor-pointer"
            onClick={toggleNav}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 mr-2 cursor-pointer"
              href="https://www.linkedin.com/in/leon-nils-schwinkendorf-492782251/"
            >
              <span className="hover:text-gray-100 ml-8">LinkedIn</span>{" "}
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between  ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700">
            <a
              className="flex justify-between items-center w-full text-gray-300 mr-2 cursor-pointer"
              href="https://github.com/LeonNilsSch"
            >
              <span className="hover:text-gray-100 ml-8">GitHub</span>{" "}
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-500">
            <a
              className="flex justify-between items-center w-full text-gray-300 mr-2 cursor-pointer"
              href="mailto:ln.schwinkendorf@gmail.com"
            >
              <span className="hover:text-gray-100 ml-8">Mail</span>{" "}
              <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
