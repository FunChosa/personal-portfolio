import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Card.css";

function Card({ project }) {
  const { cover, name, id, desc, type, level, demo } = project;
  const navigate = useNavigate();
  return (
    <div className="project-item" onClick={() => navigate("/project/" + id)}>
      <img src={cover} alt={name} />
      <span
        className="demo-btn"
        onClick={(e) => {
          e.stopPropagation();
          window.open(demo, "_blank");
        }}
      >
        Live Demo
      </span>
      <div className="project-details">
        <h4 className="project-title">{name}</h4>
        <p className="project-summary">{desc}</p>
        <div className="tags-details">
          <span className="category">{type}</span>
          <span className={`${level}`}>{level}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
