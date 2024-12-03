const mockUsers = [
    { id: 1, name: "John Doe", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Editor", status: "Inactive" },
  ];
  
  const mockRoles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ];
  
  export const fetchUsers = async () => Promise.resolve(mockUsers);
  
  export const addUser = async (user) => Promise.resolve(user);
  
  export const updateUser = async (id, updatedUser) => Promise.resolve(updatedUser);
  
  export const deleteUser = async (id) => Promise.resolve(id);
  
  export const fetchRoles = async () => Promise.resolve(mockRoles);
  
  export const addRole = async (role) => Promise.resolve(role);
  
  export const updateRole = async (id, updatedRole) => Promise.resolve(updatedRole);
  
  export const deleteRole = async (id) => Promise.resolve(id);
  
  export const updateRolePermissions = async (id, permissions) => Promise.resolve(permissions);
  