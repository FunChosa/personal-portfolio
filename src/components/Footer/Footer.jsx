import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <EmailIcon />
        <GitHubIcon />
      </div>
      <p>&copy; {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;
