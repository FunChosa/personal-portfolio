import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../../db/ProjectList.ts";
import "./ProjectPage.css";
import NoPage from "../NoPage/NoPage.jsx";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function ProjectPage() {
  const { id } = useParams();
  const project = ProjectList.find((project) => project.id === id);

  if (!project) {
    return <NoPage />;
  }
  return (
    <div className="project1">
      <div className="project1-container">
        <div className="project1-details">
          <h1>
            {project.name}
            <GitHubIcon
              className="project1 svg"
              onClick={() => window.open(project.code, "_blank")}
            />
            <PlayCircleIcon
              className="project1 svg"
              onClick={() => window.open(project.demo, "_blank")}
            />
          </h1>
          <p>{project.description}</p>
        </div>
        <img src={project.image} alt={project.name} />
      </div>
    </div>
  );
}

export default ProjectPage;
