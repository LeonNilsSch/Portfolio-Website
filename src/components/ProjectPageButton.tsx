import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const ProjectPageButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to ProjectPage component
    navigate("/project-page");
  };

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
