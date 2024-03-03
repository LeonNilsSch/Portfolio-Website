import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ProjectPageButton from "../components/ProjectPageButton";
import BackgroundImage from "../assets/pf-wallpaper.jpg"; // Import your background image
import Contact from "../components/Contact";
import Navbar from "../components/NavBar";
import Skills from "../components/Skills";

const MainPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image with black overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          opacity: 0.6, // Adjust the opacity value to make it less bright
        }}
      ></div>
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <ProjectPageButton />
        <Contact />
      </div>
    </div>
  );
};

export default MainPage;
