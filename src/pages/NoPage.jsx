import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "../styles/NoPage.css";

function NoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="no-page">
      <h2 className="no-page-title">
        <Typewriter
          options={{
            strings: ["Error 404", "Page Not Found"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <Link to="/" className="link-btn">
        ← Go Back Home
      </Link>
    </div>
  );
}

export default NoPage;
