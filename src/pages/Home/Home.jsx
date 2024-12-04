import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typewriter from "typewriter-effect";
import "./Home.css";
import { Links } from "../../db/Links";

function Home() {
  return (
    <>
      <div className="home">
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
              onClick={() => window.open(Links.linkedin, "_blank")}
            />
            <EmailIcon onClick={() => window.open(`mailto:${Links.email}`)} />
            <GitHubIcon onClick={() => window.open(Links.github)} />
          </div>
          <a
            c
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "gray",
              marginTop: "30px",
              fontSize: "20px",
            }}
          >
            <i className="ri-file-download-line"></i>
            <span>Download CV </span>
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth",
              });
            }}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "gray",
              marginTop: "30px",
              fontSize: "20px",
            }}
          >
            Check out my projects
          </a>
        </div>
        <div className="skills" id="projects">
          <h1>Skills</h1>
          <ol className="list">
            <li className="item">
              <h2>Lorem Ipsum</h2>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </li>
            <li className="item">
              <h2>Lorem Ipsum</h2>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </li>
            <li className="item">
              <h2>Lorem Ipsum</h2>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Home;
