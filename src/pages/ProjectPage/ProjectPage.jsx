import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../../db/ProjectList.ts";
import "./ProjectPage.css";
import NoPage from "../NoPage/NoPage.jsx";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

function ProjectPage() {
  const { id } = useParams();
  const project = ProjectList.find((project) => project.id === id);
  const { name, desc, cover, code, demo } = project;
  if (!project) {
    return <NoPage />;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="project1">
      <div className="project1-container">
        <Link to="/projects" className="back">
          ← Back to Projects
        </Link>
        <div className="project1-details">
          <h1>{name}</h1>
          <p>{desc}</p>
        </div>
        <img src={cover} alt={name} />
        <Link to={code} target="_blank" className="">
          View Code <GitHubIcon />
        </Link>
        <Link to={demo} target="_blank" className="">
          Live Demo <LaunchIcon />
        </Link>
      </div>
    </div>
  );
}

export default ProjectPage;
