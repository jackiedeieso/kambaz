import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const { cid } = useParams();

  console.log("✅ Users component mounted");

  const fetchUsers = async (role = "", name = "") => {
    const queryParams = new URLSearchParams();
    if (role) queryParams.append("role", role);
    if (name) queryParams.append("name", name);

    try {
      const users = await client.findUsersWithQuery(queryParams.toString());
      console.log("Fetched users:", users);
      setUsers(users);
    } catch (err) {
      console.error("Failed to fetch users:", err);
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers(role, name);
  }, [cid]);

  console.log("📡 Fetching users for course:", cid);

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    fetchUsers(selectedRole, name);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchName = e.target.value;
    setName(searchName);
    fetchUsers(role, searchName);
  };

  return (
    <div className="p-3">
      <h3>Users</h3>

      <div className="d-flex gap-3 mb-3">
        <select
          value={role}
          onChange={handleRoleChange}
          className="form-select w-25"
        >
          <option value="">All Roles</option>
          <option value="STUDENT">Students</option>
          <option value="TA">Assistants</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Administrators</option>
        </select>

        <input
          value={name}
          onChange={handleNameChange}
          className="form-control w-50"
          placeholder="Search by name..."
        />
      </div>

      {users.length === 0 ? (
        <p className="text-muted">No users found for current filters.</p>
      ) : (
        <PeopleTable users={users} />
      )}
    </div>
  );
}
