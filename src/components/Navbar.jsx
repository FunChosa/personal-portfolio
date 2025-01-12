import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const links = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "About", link: "/about" },
  ];

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => setExpandNavbar((prev) => !prev)}>
          <ReorderIcon />
        </button>
      </div>

      <div className="navbar-links">
        {links.map((link) => (
          <Link
            to={link.link}
            style={{
              color:
                location.pathname === link.link
                  ? "var(--secondary-color)"
                  : "white",
            }}
            className="navbar-link"
            key={link.name}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
