import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ProjectPageButton from "../components/ProjectPageButton";
import BackgroundImage from "../assets/pf-wallpaper.jpg"; // Import your background image

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
        <Header />
        <AboutMe />
        <Projects />
        <ProjectPageButton />
      </div>
    </div>
  );
};

export default MainPage;
