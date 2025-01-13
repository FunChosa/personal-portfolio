import React, { useEffect } from "react";
import "../styles/About.css";
import avatar from "../images/avatar.jpeg";
import Contact from "../components/Contact";
import { FaReact, FaFigma, FaGitAlt } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      <img src={avatar} alt="avatar" className="avatar" />
      <h2>Hi there, I`m Naaz</h2>
      <div className="skills">
        <SiJavascript />
        <SiTypescript />
        <FaReact />
        <SiRedux />
        <FaFigma />
        <SiTailwindcss />
        <FaGitAlt />
      </div>
      <a className="link-btn">Download CV</a>
      <p>
        I`m a highly motivated and results-oriented React developer with 2 years
        of experience building and maintaining dynamic web applications. My
        expertise lies in crafting clean, efficient, and scalable code using
        modern JavaScript frameworks and libraries. I thrive in collaborative
        environments and enjoy tackling complex challenges. My passion is
        creating intuitive and user-friendly interfaces. I`m eager to contribute
        my skills to a challenging and innovative project. My portfolio
        showcases a range of projects demonstrating my abilities. Let`s connect
        and discuss how I can help you achieve your goals.
      </p>
      <Contact />
    </div>
  );
}

export default About;
