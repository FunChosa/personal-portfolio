import React, { useState, useEffect } from "react";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import "./Projects.css";
import { ProjectList } from "../../db/ProjectList";

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [projects, setProjects] = useState(ProjectList);

  useEffect(() => {
    setProjects(ProjectList);
  }, []);

  useEffect(() => {
    setProjects(
      ProjectList.filter((project) =>
        selectedFilter !== "all" ? project.type === selectedFilter : true
      )
    );
  }, [selectedFilter]);

  return (
    <div className="projects">
      <div className="projectsHeader">
        <h1 className="projectTitle">Projects</h1>
        <ul className="filter-tabs">
          <li
            className={`selectedTab ${
              selectedFilter === "all" ? "active" : ""
            }`}
            onClick={() => setSelectedFilter("all")}
          >
            All
          </li>
          <li
            className={`selectedTab ${
              selectedFilter === "base" ? "active" : ""
            }`}
            onClick={() => setSelectedFilter("base")}
          >
            Base
          </li>
          <li
            className={`selectedTab ${
              selectedFilter === "game" ? "active" : ""
            }`}
            onClick={() => setSelectedFilter("game")}
          >
            Game
          </li>
        </ul>
      </div>

      <div className="count">
        <span className="project-count-value">{projects.length}</span>
        <span className="project-count-parameter">Projects showing</span>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            id={project.id}
            name={project.name}
            image={project.image}
            desc={project.description}
            type={project.type}
            level={project.level}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
