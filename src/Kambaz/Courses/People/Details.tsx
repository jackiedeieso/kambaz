import { useEffect, useState } from "react";
import { FaUserCircle, FaCheck, FaEdit } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import * as client from "../../Account/client";
import { FormControl, FormSelect } from "react-bootstrap";

export default function PeopleDetails({ fetchUsers }: { fetchUsers?: () => void }) {
    

  const { uid } = useParams();
  const [user, setUser] = useState<any>({});
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  console.log("🧑‍💻 PeopleDetails mounted for UID:", uid);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await client.profile();
        setCurrentUser(profile);
      } catch (err) {
        console.error("Not logged in.");
      }
    };
    fetchProfile();
  }, []);

  

  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
    setName(`${user.firstName} ${user.lastName}`);
    setEmail(user.email);
    setRole(user.role);
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);

  const handleDelete = async () => {
    if (!uid) return;
    await client.deleteUser(uid);
    if (fetchUsers) fetchUsers(); // Optional callback to refresh user list
    navigate(-1);
  };

  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName, email, role };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    if (fetchUsers) fetchUsers(); // Refresh list
    navigate(-1);
  };

  if (!uid) return null;


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await client.profile();
        setCurrentUser(profile);
        console.log("Current user in PeopleDetails:", profile); // <--- Add this
      } catch (err) {
        console.error("Not logged in.");
      }
    };
    fetchProfile();
  }, []);

  console.log("PeopleDetails mounted for UID:", uid);

  return (
    <div
  className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow"
  style={{ width: "400px", zIndex: 1050 }}
    >
      <button
        onClick={() => navigate(-1)}
        className="btn position-absolute top-0 start-0 wd-close-details"
      >
        <IoCloseSharp className="fs-1" />
      </button>

      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />
      

      <div className="text-danger fs-4 wd-name">
        {currentUser && !editing && (
          <>
            <FaEdit
              onClick={() => setEditing(true)}
              className="float-end fs-5 mt-2 wd-edit"
            />
            <div onClick={() => setEditing(true)}>
              {user.firstName} {user.lastName}
            </div>
          </>
        )}

        {editing && (
          <>
            <FaCheck
              onClick={saveUser}
              className="float-end fs-5 mt-2 me-2 wd-save"
            />
            <FormControl
              className="w-100 mb-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && saveUser()}
            />
            <FormControl
              className="w-100 mb-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <FormSelect
              className="w-100 mb-2"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="STUDENT">STUDENT</option>
              <option value="TA">TA</option>
              <option value="FACULTY">FACULTY</option>
              <option value="ADMIN">ADMIN</option>
            </FormSelect>
          </>
        )}
      </div>

      {!editing && (
        <>
          <b>Roles:</b> <span className="wd-roles">{user.role}</span> <br />
          <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span> <br />
          <b>Section:</b> <span className="wd-section">{user.section}</span> <br />
          <b>Total Activity:</b> <span className="wd-total-activity">{user.totalActivity}</span>
        </>
      )}

      <hr />
      <div className="d-flex justify-content-between mt-3">
        <button onClick={() => navigate(-1)} className="btn btn-secondary wd-cancel">
          Cancel
        </button>
        <button onClick={handleDelete} className="btn btn-danger wd-delete">
          Delete
        </button>
      </div>
      
    </div>
    
  );
}
