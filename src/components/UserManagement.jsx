import React, { useState, useEffect } from "react";
import { fetchUsers, addUser, updateUser, deleteUser } from "../services/api";


const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", role: "", status: "Active" });

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      updateUser(form.id, form).then(() => {
        setUsers(users.map((u) => (u.id === form.id ? form : u)));
        setForm({ name: "", role: "", status: "Active" });
      });
    } else {
      addUser({ ...form, id: Date.now() }).then((newUser) => {
        setUsers([...users, newUser]);
        setForm({ name: "", role: "", status: "Active" });
      });
    }
  };

  const handleEdit = (user) => setForm(user);

  const handleDelete = (id) => {
    deleteUser(id).then(() => setUsers(users.filter((u) => u.id !== id)));
  };

  return (
    <div className="container-fluid mt-5"  data-aos="fade-right">
      <h2>User Management</h2>
      <form onSubmit={handleSubmit} className="mb-4" data-aos="fade-left">
        <div className="row">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Role"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              required
            />
          </div>
          <div className="col-md-2">
            <select
              className="form-select"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
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
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(user.id)}
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

export default UserManagement;
