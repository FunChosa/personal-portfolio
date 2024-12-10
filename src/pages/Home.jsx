import React, { useEffect } from "react";
import "../styles/Home.css";
import Main from "../components/Main";
import FeaturedProjects from "../components/FeaturedProjects";
import Contacts from "../components/Contacts";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <Main />
      <FeaturedProjects />
      <Contacts />
    </div>
  );
}

export default Home;
