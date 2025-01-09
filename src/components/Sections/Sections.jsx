import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import axios from "axios";
const localProjects = require("../../helper/projects.json"); // Yerel depolama için projeleri içe aktar

Modal.setAppElement("#root");

const Sections = () => {
  const [projects, setProjects] = useState([]); // Sunucudan alınan projeler
  const [selectedProjectTitle, setSelectedProjectTitle] = useState("");
  const [selectedProjectLinks, setSelectedProjectLinks] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

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
  };

  const openModal = async () => {
    const { value: projectName } = await Swal.fire({
      title: "Add Project",
      html: '<input placeholder="Project Name" id="swal-input1" class="swal2-input"><input placeholder="Password" id="swal-input2" class="swal2-input">',
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
    <div className="sidebarArea">
      <div className="sections">
        <div className="bg-light addProjectBtnArea">
          <button className="btn-79" onClick={openModal}>
            <span>
              {" "}
              + <span>Add</span>Project
            </span>
          </button>
        </div>
        <ul className="list-group">
          {[...projects, ...localProjects.projects].reverse().map((project) => (
            <li
              className="list-group-item list-group-item-action carousel-dark"
              key={project._id}
              onClick={() => handleProjectClick(project)}
            >
              <span className="dropdown-item">{project.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="resultArea">
        <div className="title">
          <h4>Project: {selectedProjectTitle}</h4>
          <hr />
        </div>
        <hr />
        <ul className="linkler">
          {selectedProjectLinks.map((link) => (
            <li key={link.url}>
              <a className="link" href={link.url} target="_blank">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sections;
