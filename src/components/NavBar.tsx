import { useState, useRef } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      ref={navbarRef}
      className="fixed w-full h-[60px] flex justify-end items-center px-4 text-gray-300 bg-gray-100 mb-20"
    >
      {/* menu */}
      <ul
        className={`hidden md:flex space-x-6 ${
          nav ? "justify-center" : "justify-end"
        }`}
      >
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="aboutme"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gray-100 flex flex-col justify-center items-center bg-cover"
        }
      >
        <li className="py-6 text-4xl cursor-pointer">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer">
          {" "}
          <Link onClick={handleClick} to="aboutme" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer">
          {" "}
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 mr-2 cursor-pointer"
              href="https://www.linkedin.com/in/leon-nils-schwinkendorf-492782251/"
            >
              <span className="hover:text-gray-100 ml-10">LinkedIn</span>{" "}
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300 mr-2 cursor-pointer"
              href="https://github.com/LeonNilsSch"
            >
              <span className="hover:text-gray-100 ml-10">GitHub</span>{" "}
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300 mr-2 cursor-pointer"
              href="mailto:ln.schwinkendorf@gmail.com"
            >
              <span className="hover:text-gray-100 ml-10">Mail</span>{" "}
              <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
