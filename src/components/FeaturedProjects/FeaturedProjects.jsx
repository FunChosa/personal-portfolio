import React from "react";
import { ProjectList } from "../../db/ProjectList";
import Card from "../../components/Card/Card";
import "./FeaturedProjects.css";
import { Link } from "react-router-dom";

function FeaturedProjects() {
  const featuredProjectsIdList = [
    "tic-tac-toe-game",
    "wordle-game",
    "pomodoro-timer",
    "hangman-game",
    "password-generator",
  ];
  const featuredProjects = featuredProjectsIdList.map((project) =>
    ProjectList.find((p) => p.id === project)
  );
  return (
    <div className="featured-projects">
      <div style={{ height: "100px" }} id="projects" />
      <div className="featured-projects-container">
        {featuredProjects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>

      <Link to="/projects" className="link-btn">
        See All Projects →
      </Link>
    </div>
  );
}

export default FeaturedProjects;
