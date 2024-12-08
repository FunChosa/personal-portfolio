import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => setExpandNavbar((prev) => !prev)}>
          <ReorderIcon />
        </button>
      </div>

      <div className="links">
        <Link
          to="/"
          style={{
            color: location.pathname === "/" ? "#00bcd4" : "white",
          }}
        >
          Home
        </Link>
        <Link
          to="/projects"
          style={{
            color: location.pathname === "/projects" ? "#00bcd4" : "white",
          }}
        >
          Projects
        </Link>
        <Link
          to="/about"
          style={{
            color: location.pathname === "/about" ? "#00bcd4" : "white",
          }}
        >
          About
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
