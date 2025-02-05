import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
        <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>

    <tbody>
     <tr>
        <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Tony</span>{" "}
          <span className="wd-last-name">Stark</span>
        </td>
        <td className="wd-login-id">001234561S</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-10-01</td>
        <td className="wd-total-activity">10:21:32</td>
      </tr>

      <tr>
      <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Jackie</span>{" "}
          <span className="wd-last-name">D</span>
        </td>
        <td className="wd-login-id">002717465</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">TEACHER</td>
        <td className="wd-last-activity">2021-10-01</td>
        <td className="wd-total-activity">06:21:33</td>
      </tr>


      <tr>
      <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Benny</span>{" "}
          <span className="wd-last-name">Bates</span>
        </td>
        <td className="wd-login-id">002847281</td>
        <td className="wd-section">S404</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2025-05-01</td>
        <td className="wd-total-activity">05:22:33</td>
      </tr>



      <tr>
      <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Silly</span>{" "}
          <span className="wd-last-name">Goose</span>
        </td>
        <td className="wd-login-id">0007842521</td>
        <td className="wd-section">S393</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2021-10-01</td>
        <td className="wd-total-activity">06:21:33</td>
      </tr>
    </tbody>
   </Table>
  </div> );}