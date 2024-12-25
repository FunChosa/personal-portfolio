import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../db/ProjectList.ts";
import NoPage from "../pages/NoPage.jsx";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import "../styles/ProjectPage.css";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
function ProjectPage() {
  const { id } = useParams();
  const project = ProjectList.find((project) => project.id === id);
  const { name, desc, cover, code, demo, type, level, features } = project;
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
        <div className="project-page-links">
          <a href={demo} target="_blank" className="link-btn live-demo">
            Live Demo <RadioButtonCheckedIcon />
          </a>
          <a href={code} target="_blank" className="link-btn">
            View Code <GitHubIcon />
          </a>
        </div>
      </div>
      <img src={cover} alt={name} className="project-page-cover" />
      {features && (
        <>
          <h2 className="project-page-title">Features</h2>
          <ul className="project-page-features">
            {features?.map((feature, index) => (
              <li key={index} className="project-page-feature">
                {feature}
              </li>
            ))}
          </ul>
        </>
      )}
      <div className="project-page-tags">
        <span className={`${level}`}>#{level}</span>
        <span>#{type}</span>
      </div>
    </div>
  );
}

export default ProjectPage;
