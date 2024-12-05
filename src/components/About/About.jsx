import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typewriter from "typewriter-effect";
import { Links } from "../../db/Links";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h2>
        Hi there!
        <Typewriter
          options={{
            strings: ["I'm a Frontend Developer", "I'm Naaz"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <div className="prompt">
        <LinkedInIcon
          onClick={() => window.open(Links[0].linkedin, "_blank")}
        />
        <EmailIcon onClick={() => window.open(`mailto:${Links[0].email}`)} />
        <GitHubIcon onClick={() => window.open(Links[0].github, "_blank")} />
      </div>
      <a className="link-btn">Download CV</a>
      <a
        href="#projects"
        className="link-btn"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("projects").scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Check out my projects
      </a>
    </div>
  );
}

export default About;
