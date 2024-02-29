const Header = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-white font-bold text-lg">Leon Schwinkendorf</div>
        <nav className="space-x-4">
          {/* Scroll to sections on click */}
          <button
            className="text-white hover:text-gray-300"
            onClick={() => scrollTo("about")}
          >
            About
          </button>
          <button
            className="text-white hover:text-gray-300"
            onClick={() => scrollTo("projects")}
          >
            Projects
          </button>
          <button
            className="text-white hover:text-gray-300"
            onClick={() => scrollTo("contact")}
          >
            Contact
          </button>
          <button
            className="bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
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
