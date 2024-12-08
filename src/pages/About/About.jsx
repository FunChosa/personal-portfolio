import React from "react";
import "./About.css";
import avatar from "../../images/avatar.jpeg";

function About() {
  return (
    <div className="aboutMe-container">
      <div className="info">
        <div className="aboutMe">
          <img src={avatar} className="avatar" />
          <div className="aboutMe-info">
            <h2>Naaz</h2>
            <p>Frontend Developer</p>
            <p className="aboutMe-link">Download CV</p>
          </div>
        </div>
        <h3>✨ Hi there!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          fuga ipsum maxime possimus exercitationem, totam officiis optio omnis?
          Praesentium quaerat consequuntur itaque nam provident sapiente eaque
          deserunt consequatur dolorem aliquam.
        </p>
      </div>
    </div>
  );
}

export default About;
