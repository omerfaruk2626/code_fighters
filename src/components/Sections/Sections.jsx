import React, { useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import axios from "axios";
const localProjects = require("../../helper/projects.json");

Modal.setAppElement("#root");

const Sections = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState("");
  const [selectedProjectLinks, setSelectedProjectLinks] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("/api/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProjectTitle(project.title);
    setSelectedProjectLinks(project.links);
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  };

  const openModal = async () => {
    const { value: projectName } = await Swal.fire({
      title: "Add Project",
      html: `
      <input placeholder="Project Name" id="swal-input1" class="swal2-input custom-input">
      <input placeholder="Password" id="swal-input2" class="swal2-input custom-input">
    `,
      focusConfirm: false,
      showCloseButton: true,
      customClass: {
        closeButton: "custom-close-button",
      },
      preConfirm: () => {
        return document.getElementById("swal-input1").value;
      },
    });
    if (projectName) {
      try {
        // const newProject = {
        //     title: projectName,
        //     links: []
        // };

        // const response = await axios.post('curl "http://api.scrape.do?token=92b9d8f924f74cddb57a8a1a343ccfce46bccbf7d2c&url=https://httpbin.co/ip"', newProject);
        await fetchProjects();

        Swal.fire({
          title: `Success! <span style="color: green">${projectName}</span> has been added.`,
          icon: "success",
        });
      } catch (error) {
        console.error("Error adding project:", error.response);
        Swal.fire({
          title: "Error",
          text: "Failed to add project.",
          icon: "error",
        });
      }
    }
  };

  return (
    <>
      <div className="h-[80px]"></div>
      <div className="flex relative bg-[rgb(112,158,197)] h-[86vh] rounded-lg shadow-lg overflow-hidden">
        {!isSidebarOpen && (
          <button
            className="absolute top-4 left-4 z-50 bg-gray-800 text-white px-4 py-2 rounded-md shadow-md md:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            ☰ Open Sidebar
          </button>
        )}

        <div
          className={`fixed left-0 w-[350px] h-full overflow-y-auto bg-[rgb(58,120,174)] shadow-lg transition-transform duration-300 z-40
          ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0`}
        >
          <button
            className="absolute top-4 right-4 z-50 bg-red-500 text-white px-3 py-1 rounded-md shadow-md md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✕
          </button>

          <div className="sticky top-0 z-10 bg-light text-center border-b-2 border-gray-600 p-3">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600"
              onClick={openModal}
            >
              + Add Project
            </button>
          </div>
          <ul className="p-4 space-y-3 mb-[100px] md:mb-0">
            {[...projects, ...localProjects.projects]
              .reverse()
              .map((project) => (
                <li
                  key={project._id}
                  className="bg-gray-600 text-white p-3 rounded-md shadow-md cursor-pointer hover:bg-gray-700 transition"
                  onClick={() => handleProjectClick(project)}
                >
                  {project.title}
                </li>
              ))}
          </ul>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center w-[70vw] h-[65vh] m-auto bg-[rgb(58,120,174)] rounded-lg shadow-lg overflow-hidden relative">
          <div className="absolute top-0 left-5 text-white font-bold text-xl">
            <h4>Project: {selectedProjectTitle || "Select a Project"}</h4>
            <hr className="border-white my-2" />
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 pt-5 p-4 w-full max-h-[50vh] overflow-y-auto">
            {selectedProjectLinks.map((link) => (
              <li
                key={link.url}
                className="w-[120px] h-[85px] md:w-[165px] md:h-[115px] bg-gray-700 text-white text-center rounded-[30px] md:rounded-[40px] flex items-center justify-center border-[3px] border-gray-600 hover:bg-gray-600 transition cursor-pointer"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sections;
