import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const ProjectPageHomeButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="p-6 text-center">
      <Button
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded mb-20"
        onClick={handleButtonClick}
      >
        Back to Main Page
      </Button>
    </div>
  );
};

export default ProjectPageHomeButton;
