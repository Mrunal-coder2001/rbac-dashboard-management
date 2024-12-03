import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" data-aos="fade-down">
      <div className="container">
        <Link className="navbar-brand" to="/">
          RBAC Dashboard
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                User Management
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/roles">
                Role Management
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/permissions">
                Permissions Management
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
