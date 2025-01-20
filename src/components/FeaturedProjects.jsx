import React from "react";
import { ProjectList } from "../db/ProjectList";
import Card from "./Card";
import { Link } from "react-router-dom";
import "../styles/FeaturedProjects.css";

function FeaturedProjects() {
  const featuredProjectsIdList = [
    "memory-cards-app",
    "stellar-burger",
    "pomodoro-timer",
    "hangman-game",
    "wordle-game",
    "tic-tac-toe-game",
  ];
  const featuredProjects = featuredProjectsIdList.map((project) =>
    ProjectList.find((p) => p.id === project)
  );
  return (
    <>
      <div className="featured-projects-title" id="projects" />
      <div className="featured-projects-container">
        {featuredProjects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>

      <Link to="/projects" className="link-btn">
        See All Projects →
      </Link>
    </>
  );
}

export default FeaturedProjects;
