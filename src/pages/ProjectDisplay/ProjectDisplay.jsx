import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../../db/ProjectList";
import "./ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList.find((project) => project.id === id);
  return (
    <div className="project1">
      <div className="project1-container">
        <div className="project1-details">
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <p>
            <a href={project.demo} target="_blank">
              &lt; Demo / &gt;
            </a>
          </p>
          <p>
            <a href={project.code} target="_blank">
              &lt; Code / &gt;
            </a>
          </p>
        </div>
        <img src={project.image} alt={project.name} />
      </div>
    </div>
  );
}

export default ProjectDisplay;
