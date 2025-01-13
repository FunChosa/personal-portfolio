import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Contact.css";
import { Links } from "../db/Links";

function Contact() {
  return (
    <div className="contacts">
      <p className="contacts-title">Let's get to know each other</p>
      <p className="contacts-desc">
        <a href={Links[0].linkedin} target="_blank" className="link-btn">
          Get in touch
        </a>
      </p>
      <div className="socialMedia">
        <LinkedInIcon
          onClick={() => window.open(Links[0].linkedin, "_blank")}
        />
        <EmailIcon onClick={() => window.open(`mailto:${Links[0].email}`)} />
        <GitHubIcon onClick={() => window.open(Links[0].github, "_blank")} />
      </div>
    </div>
  );
}

export default Contact;
