import LearnifyXCodeIMG from "../assets/LearnifyxCode-Screenshot.png";
import TaskListIMG from "../assets/TaskList Screenshot.png";
import PortfolioIMG from "../assets/Portfolio-WebsiteIMG.png";
import BackgroundWallpaper from "../assets/pf-wallpaper.jpg"; // Import the background wallpaper

const projects = [
  {
    id: 1,
    name: "LearnifyXCode",
    description: (
      <>
        An app to help structure your code projects, maybe also learn how to
        code (it's not finished...).
        <br />
        <br />
        - Tools: Visual Studio Code, Node.js, React, NextUI
        <br />
        - Programming Language: Typescript, HTML, CSS
        <br />
        <br />- Intention: Struggling with project organization and
        brainstorming, I often forgot important details. This inspired me to
        create a web app to tackle this issue, leading to improved routine and
        productivity as I built it.
      </>
    ),
    image: LearnifyXCodeIMG,
    githubLink: "https://github.com/LeonNilsSch/LearnifyXCode-React-old",
  },
  {
    id: 2,
    name: "Tasklist App",
    description: (
      <>
        description: Just a simple tasklist that you can edit and delete tasks
        from lmao, but it looks cool though...
        <br />
        <br />
        - Tools: Visual Studio Code, Node.js, React, StyledComponents
        <br />
        - Programming Language: JavaScript, HTML, CSS
        <br />
        <br />
        Intension: this was my very first project that I created, it had the
        goal to get more into JavaScript, HTML and CSS. Ive learned that its
        normal to encounter "evil" errors sometimes that will try to break you,
        and to be patient with my own learningcurve.
      </>
    ),
    image: TaskListIMG,
    githubLink: "https://github.com/LeonNilsSch/tasklist-webapp",
  },
  {
    id: 3,
    name: "This Portfolio",
    description: (
      <>
        This portfolio that you are on right now just to showcase my goofy
        lookin ass :D
        <br />
        <br />
        - Tools: Visual Studio Code / Zed, Vite, Node.js., NextUI, TailwindCSS
        <br />
        - Programming Language: JavaScript, HTML, CSS
        <br />
        <br />
        Intension: I wanted to elevate my Web Engineering by using new and cool
        UI Libraries. Ive tried to create a Portfolio website many times but
        wasnt really happy with what I build with my beginner knowledge so I did
        my research and then go for a Website that looks good and is well
        developed.
      </>
    ),
    image: PortfolioIMG,
    githubLink: "https://github.com/LeonNilsSch/portfolio-website",
  },
];

const ProjectPage = () => {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${BackgroundWallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        aria-hidden="true"
      ></div>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-3xl font-bold mb-3 text-white">My Projects</h1>
        <h2 className="text-1xl mb-20 text-white opacity-80">
          These are some more details to my own Projects
        </h2>
        <div className="space-y-20">
          {projects.map((project) => (
            <div key={project.id} className="max-w-3xl mx-auto">
              <img
                className="w-full rounded-lg"
                src={project.image}
                alt={project.name}
              />
              <div className="bg-white p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.githubLink}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
