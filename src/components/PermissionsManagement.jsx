import React, { useState, useEffect } from "react";
import { fetchRoles, updateRolePermissions } from "../services/api";

const PermissionsManagement = () => {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [permissions, setPermissions] = useState("");

  useEffect(() => {
    fetchRoles().then(setRoles);
  }, []);

  const handleUpdatePermissions = (e) => {
    e.preventDefault();
    if (selectedRole) {
      updateRolePermissions(selectedRole.id, permissions.split(",").map((perm) => perm.trim())).then(() => {
        setRoles(
          roles.map((role) =>
            role.id === selectedRole.id ? { ...role, permissions: permissions.split(",").map((perm) => perm.trim()) } : role
          )
        );
        setSelectedRole(null);
        setPermissions("");
      });
    }
  };

  return (
    <div className="container-fluid mt-5" data-aos="fade-right">
      <h2>Permissions Management</h2>
      <form onSubmit={handleUpdatePermissions} className="mb-4" data-aos="fade-left">
        <div className="row">
          <div className="col-md-4">
            <select
              className="form-select"
              onChange={(e) => {
                const role = roles.find((r) => r.id === parseInt(e.target.value, 10));
                setSelectedRole(role);
                setPermissions(role.permissions.join(", "));
              }}
              value={selectedRole?.id || ""}
            >
              <option value="">Select a Role</option>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4" data-aos="fade-up">
            <input
              type="text"
              className="form-control"
              placeholder="Permissions (comma-separated)"
              value={permissions}
              onChange={(e) => setPermissions(e.target.value)}
              disabled={!selectedRole}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary" type="submit" disabled={!selectedRole}>
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PermissionsManagement;
