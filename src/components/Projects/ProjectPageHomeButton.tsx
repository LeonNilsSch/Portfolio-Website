import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const ProjectPageHomeButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the main page
    navigate("/");
  };

  return (
    <div className="p-10 text-center">
      <Button
        className="bg-gray-200 hover:bg-gray-300 text-white font-bold py-3 px-6 rounded mb-20"
        onClick={handleButtonClick}
      >
        Back to Main Page
      </Button>
    </div>
  );
};

export default ProjectPageHomeButton;
