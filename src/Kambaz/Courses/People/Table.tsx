import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

interface PeopleTableProps {
  users: any[];
}

export default function PeopleTable({ users }: PeopleTableProps) {
  const { cid } = useParams();
  const [enrollments, setEnrollments] = useState<any[]>([]);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/enrollments`, {
          withCredentials: true,
        });
        setEnrollments(res.data || []);
      } catch (err) {
        console.error("Failed to fetch enrollments:", err);
        setEnrollments([]);
      }
    };

    fetchEnrollments();
  }, []);

  const enrolledUsers = (users || []).filter((user) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === user._id && enrollment.course === cid
    )
  );

  console.log("👥 cid in PeopleTable:", cid);
  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolledUsers.length > 0 ? (
            enrolledUsers.map((user) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <Link
                    to={`/Kambaz/Courses/${cid}/People/${user._id}`}
                    className="text-decoration-none text-dark"
                  >
                    <span className="wd-first-name">{user.firstName}</span>{" "}
                    <span className="wd-last-name">{user.lastName}</span>
                  </Link>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">
                  {user.lastActivity?.substring(0, 10)}
                </td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center text-muted">
                No users enrolled in this course.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
