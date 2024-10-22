import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProjectPageButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/project-page");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-6 text-center">
      <Button
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded mb-20"
        onClick={handleButtonClick}
      >
        More Project Details
      </Button>
    </div>
  );
};

export default ProjectPageButton;
