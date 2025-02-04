import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProjectPageButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to ProjectPage component
    navigate("/project-page");
  };

  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-10 text-center">
      <Button
        className="bg-gray-200 hover:bg-gray-300 text-white font-bold py-3 px-6 rounded mb-20"
        onClick={handleButtonClick}
      >
        More Project Details
      </Button>
    </div>
  );
};

export default ProjectPageButton;
