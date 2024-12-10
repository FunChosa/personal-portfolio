import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Contacts.css";

function Contacts() {
  return (
    <div className="contacts">
      <p className="contacts-title">Let's get to know each other</p>
      <p className="contacts-desc">
        <a href="" className="link-btn">
          Get in touch
        </a>
      </p>
      <div className="socialMedia">
        <LinkedInIcon />
        <GitHubIcon />
        <EmailIcon />
      </div>
    </div>
  );
}

export default Contacts;
