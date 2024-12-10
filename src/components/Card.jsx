import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Card.css";

function Card({ project }) {
  const { cover, name, id, desc, type, level } = project;
  const navigate = useNavigate();
  return (
    <div className="project-item" onClick={() => navigate("/project/" + id)}>
      <img src={cover} alt={name} />
      <div className="project-details">
        <div className="small-details">
          <span className="category">{type}</span>
          <span className={`${level}`}>{level}</span>
        </div>
        <h4 className="project-title">{name}</h4>
        <p className="project-summary">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
