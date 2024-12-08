import React from "react";
import "./NoPage.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="no-page">
      <h2>
        <Typewriter
          options={{
            strings: ["Error 404", "Page Not Found"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <Link to="/" className="back-home">
        ← Go Back Home
      </Link>
    </div>
  );
}

export default NoPage;
