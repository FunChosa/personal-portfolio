import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../db/ProjectList.ts";
import NoPage from "../pages/NoPage.jsx";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import "../styles/ProjectPage.css";

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
    <div className="project-page-container">
      <Link to="/projects" className="link-btn">
        ← Back to Projects
      </Link>
      <div className="project-page-details">
        <h1 className="project-page-title">{name}</h1>
        <p className="project-page-desc">{desc}</p>
      </div>
      <img src={cover} alt={name} className="project-page-cover" />
      <Link to={code} target="_blank" className="link-btn">
        View Code <GitHubIcon />
      </Link>
      <Link to={demo} target="_blank" className="link-btn">
        Live Demo <LaunchIcon />
      </Link>
    </div>
  );
}

export default ProjectPage;
