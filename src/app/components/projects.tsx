// @ts-nocheck
// @use-react

"use client";

import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  w,
} from "@nextui-org/react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null); // State to manage active project for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Open modal for the selected project
  const openModal = (project) => {
    console.log("Opening modal for project:", project); // Debugging
    setActiveProject(project);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    console.log("Closing modal"); // Debugging
    setActiveProject(null);
    setIsModalOpen(false);
  };

  // Define project data
  const projects = [
    {
      id: 1,
      name: "LearnifyXCode",
      description:
        "a App to help structure your Code-Projects, maybe also learn how to code (its not finished...)",
    },
    {
      id: 2,
      name: "Tasklist App",
      description:
        "just a simple Tasklist that you can edit and delete tasks from lmao",
    },
    {
      id: 3,
      name: "This Portfolio",
      description:
        "this Portfolio that you are on right now just to showcase my goofy lookin ass :D ",
    },
  ];

  return (
    <main className="container mx-auto p-3">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Render project cards */}
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-md p-7 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p>{project.description}</p>
            <Button
              className="mt-4"
              variant="shadow"
              onClick={() => openModal(project)}
            >
              View Details
            </Button>{" "}
            {/* Button to open modal for this project */}
          </div>
        ))}
      </div>
      {/* Modal popup */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ModalHeader>Project Details</ModalHeader>
          <ModalBody>
            {/* Display active project details */}
            <p>Project Name: {activeProject.name}</p>
            <p>Description: {activeProject.description}</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={closeModal} variant="flat">
              Close
            </Button>{" "}
            {/* Button to close modal */}
          </ModalFooter>
        </Modal>
      )}
    </main>
  );
};

export default Projects;
