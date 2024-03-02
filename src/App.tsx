import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectPage from "./pages/ProjectPage";
import "./index.css"; // Import your global Tailwind CSS file

const App = () => {
  return (
    <Router>
      <div className="bg-cover bg-center min-h-screen bg-wallpaper">
        {" "}
        {/* Apply the Tailwind CSS classes here */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project-page" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
