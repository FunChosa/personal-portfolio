import React, { useEffect } from "react";
import "./Home.css";
import Main from "../../components/Main/Main";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import Contacts from "../../components/Contacts/Contacts";

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
