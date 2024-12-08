import React from "react";
import "./Home.css";
import Main from "../../components/Main/Main";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import About from "../About/About";

function Home() {
  return (
    <div className="home">
      <Main />
      <FeaturedProjects />
    </div>
  );
}

export default Home;
