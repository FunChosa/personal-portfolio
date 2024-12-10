import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="contacts">
      <p>Let's get to know each other.</p>
      <p>
        <a href="mailto:6n9Wv@example.com" className="link-btn">
          Get in touch.
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
