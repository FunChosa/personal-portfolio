import React, { useEffect } from "react";
import "./Home.css";
import Main from "../../components/Main/Main";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <Main />
      <FeaturedProjects />
    </div>
  );
}

export default Home;
