import { Row, Col, InputGroup, FormControl, Button, ListGroup } from "react-bootstrap";
import { FaSearch, FaPlus, FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router";
import * as db from "../../Database"; 

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((assignment: any) => assignment.course === cid); // Filter assignments for the course

  return (
    <div className="container-fluid p-4 bg-white" id="wd-assignments">
      
      <Row className="mb-3 align-items-center">
        <Col md={6}>
          <InputGroup>
            <InputGroup.Text><FaSearch /></InputGroup.Text>
            <FormControl placeholder="Search for Assignments" />
          </InputGroup>
        </Col>

        <Col md={6} className="text-end">
          <Button variant="light" className="border me-2">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </Col>
      </Row>

      <Row className="border-bottom pb-2 mb-3 align-items-center bg-light p-2">
        <Col className="fs-5 fw-bold">ASSIGNMENTS</Col>
        <Col className="text-end">
          <Button variant="light" className="border"><FaEllipsisV /></Button>
        </Col>
      </Row>

      <ListGroup>
        {assignments.length > 0 ? (
          assignments.map((assignment: any) => (
            <ListGroup.Item
              key={assignment._id}
              className="d-flex align-items-center border border-dark border-1 bg-white text-dark position-relative"
            >

              <div className="position-absolute start-0 top-0 bottom-0 bg-success" style={{ width: "5px" }}></div>


              <div className="flex-fill ps-3">
                <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="fw-bold text-dark">
                  {assignment.title}
                </a>
                <div className="text-muted small">
                  <span className="fw-bold text-danger">{assignment.module || "No Module Assigned"}</span> | 
                  Not available until {assignment.available} <br />
                  Due {assignment.due} | {assignment.points} points
                </div>
              </div>

              <FaCheckCircle className="text-success fs-5 me-3" />
              <FaEllipsisV className="text-muted fs-5" />
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item className="text-center text-muted">No assignments available.</ListGroup.Item>
        )}
      </ListGroup>
      
    </div>
  );
}
