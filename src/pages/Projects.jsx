import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { ProjectList } from "../db/ProjectList";
import "../styles/Projects.css";
import Contact from "../components/Contact";
// import { useSearchParams } from "react-router-dom";

function Projects() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const filterTabs = ["all", "base", "game", "api"];
  const [selectedFilter, setSelectedFilter] = useState(
    // searchParams.get("type") || filterTabs[0]
    filterTabs[0]
  );
  const [searchQuery, setSearchQuery] = useState(
    // searchParams.get("search") || ""
    ""
  );
  const [projects, setProjects] = useState(ProjectList);

  useEffect(() => {
    setProjects(
      ProjectList.filter((project) => {
        const matchesFilter =
          selectedFilter !== "all" ? project.type === selectedFilter : true;
        const matchesSearch = project.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
      })
    );
    // setSearchParams({ type: selectedFilter, search: searchQuery });
    window.scrollTo(0, 0);
  }, [selectedFilter, searchQuery]);

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
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value.toLowerCase());
          }}
          className="search-input"
        />
        <span className="projects-count-value">{projects.length}</span>
        <span className="projects-count-parameter">
          {projects.length === 1 ? "project" : "projects"}
        </span>
      </div>

      {projects.length === 0 ? (
        <div className="no-projects">No projects found</div>
      ) : (
        <div
          className={`${
            projects.length <= 2
              ? "projects-list-less-2-elements"
              : "projects-list"
          }`}
        >
          {projects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      )}
      <Contact />
    </div>
  );
}

export default Projects;
