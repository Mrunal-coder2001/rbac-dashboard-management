import React from "react";

const Dashboard = () => {
  return (
    <div className="container-fluid text-center mt-5" data-aos="fade-up">
      <h1 className = "mt-5">Welcome to the RBAC Dashboard</h1>
      <p className="lead mt-3">
        Manage users, roles, and permissions efficiently and securely.
      </p>
      <div className="row mt-4">
        <div className="col-12 col-md-4 mb-3" data-aos="zoom-in">
          <button
            className="btn btn-primary btn-lg w-100"
            onClick={() => (window.location.href = "/users")}
          >
            Manage Users
          </button>
        </div>
        <div className="col-12 col-md-4 mb-3" data-aos="zoom-in">
          <button
            className="btn btn-secondary btn-lg w-100"
            onClick={() => (window.location.href = "/roles")}
          >
            Manage Roles
          </button>
        </div>
        <div className="col-12 col-md-4 mb-3" data-aos="zoom-in">
          <button
            className="btn btn-success btn-lg w-100"
            onClick={() => (window.location.href = "/permissions")}
          >
            Manage Permissions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
