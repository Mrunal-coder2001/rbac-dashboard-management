import React, { useState, useEffect } from "react";
import { fetchRoles, addRole, updateRole, deleteRole } from "../services/api";

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [form, setForm] = useState({ name: "", permissions: [] });

  useEffect(() => {
    fetchRoles().then(setRoles);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      updateRole(form.id, form).then(() => {
        setRoles(roles.map((r) => (r.id === form.id ? form : r)));
        setForm({ name: "", permissions: [] });
      });
    } else {
      addRole({ ...form, id: Date.now() }).then((newRole) => {
        setRoles([...roles, newRole]);
        setForm({ name: "", permissions: [] });
      });
    }
  };

  const handleEdit = (role) => setForm(role);

  const handleDelete = (id) => {
    deleteRole(id).then(() => setRoles(roles.filter((r) => r.id !== id)));
  };

  return (
    <div className="container-fluid mt-5" data-aos="fade-right">
      <h2>Role Management</h2>
      <form onSubmit={handleSubmit} className="mb-4" data-aos="fade-left">
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Role Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Permissions (comma-separated)"
              value={form.permissions.join(", ")}
              onChange={(e) =>
                setForm({
                  ...form,
                  permissions: e.target.value.split(",").map((perm) => perm.trim()),
                })
              }
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary" type="submit">
              {form.id ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </form>
      <table className="table table-striped" data-aos="fade-up">
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(role)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(role.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
