const Projects = () => {
  // Define project data
  const projects = [
    {
      id: 1,
      name: "LearnifyXCode",
      description:
        "An app to help structure your code projects, maybe also learn how to code (it's not finished...)",
      additionalInfo: "Additional information about LearnifyXCode project.",
    },
    {
      id: 2,
      name: "Tasklist App",
      description:
        "Just a simple tasklist that you can edit and delete tasks from lmao",
      additionalInfo: "Additional information about Tasklist App project.",
    },
    {
      id: 3,
      name: "This Portfolio",
      description:
        "This portfolio that you are on right now just to showcase my goofy lookin ass :D ",
      additionalInfo: "Additional information about This Portfolio project.",
    },
  ];

  return (
    <main
      id="projects"
      className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-40 mt-20"
      style={{ maxWidth: "1000px" }}
    >
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Render project cards */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md p-7 rounded-lg hover:scale-110 duration-500"
          >
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
