import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { ProjectList } from "../db/ProjectList";
import "../styles/Projects.css";
import Contact from "../components/Contact";

function Projects() {
  const filterTabs = ["all", "base", "game", "api"];
  const [selectedFilter, setSelectedFilter] = useState(filterTabs[0]);
  const [projects, setProjects] = useState(ProjectList);

  useEffect(() => {
    setProjects(ProjectList);
    window.scrollTo(0, 0);
  }, [selectedFilter]);

  useEffect(() => {
    setProjects(
      ProjectList.filter((project) =>
        selectedFilter !== "all" ? project.type === selectedFilter : true
      )
    );
  }, [selectedFilter]);

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <ul className="filter-tabs">
          {filterTabs.map((tab) => (
            <li
              key={tab}
              className={`selectedTab ${
                selectedFilter === tab ? "active" : ""
              }`}
              onClick={() => setSelectedFilter(tab)}
            >
              {tab.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>

      <div className="projects-count">
        <span className="projects-count-value">{projects.length}</span>
        <span className="projects-count-parameter">projects</span>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
      <Contact />
    </div>
  );
}

export default Projects;
