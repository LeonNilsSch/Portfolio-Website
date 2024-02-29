import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ProjectPageButton from "../components/ProjectPageButton";

const MainPage = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
      <ProjectPageButton />
    </div>
  );
};

export default MainPage;
