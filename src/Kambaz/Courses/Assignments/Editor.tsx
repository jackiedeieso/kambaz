import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database"; 

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); 
  const assignment = db.assignments.find((a: any) => a._id === aid); 

  if (!assignment) {
    return (
      <Container fluid className="p-4 text-center">
        <h3 className="text-danger">Assignment not found.</h3>
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary mt-3">
          Back to Assignments
        </Link>
      </Container>
    );
  }

  return (
    <Container fluid className="p-4">
      <Form className="bg-white p-4 shadow-sm">

        <Form.Group controlId="wd-name" className="mb-3">
          <Form.Label className="fw-bold">Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue={assignment.title} />
        </Form.Group>

        <Form.Group controlId="wd-description" className="mb-3">
          <Form.Label className="fw-bold">Description</Form.Label>
          <Form.Control as="textarea" rows={5} defaultValue={assignment.description} />
        </Form.Group>

        <Form.Group controlId="wd-points" className="mb-3">
          <Form.Label className="fw-bold">Points</Form.Label>
          <Form.Control type="number" defaultValue={assignment.points} />
        </Form.Group>

        <Form.Group controlId="wd-group" className="mb-3">
          <Form.Label className="fw-bold">Assignment Group</Form.Label>
          <Form.Select>
            <option>ASSIGNMENTS</option>
            <option>Group 1</option>
            <option>Group 2</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="wd-display-grade-as" className="mb-3">
          <Form.Label className="fw-bold">Display Grade as</Form.Label>
          <Form.Select>
            <option>Percentage</option>
            <option>Decimal</option>
            <option>Points</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="wd-submission-type" className="mb-3">
          <Form.Label className="fw-bold">Submission Type</Form.Label>
          <Form.Select>
            <option>Online</option>
            <option>In Person</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="wd-online-entry" className="mb-3">
          <Form.Label className="fw-bold">Online Entry Options</Form.Label>
          <div>
            <Form.Check type="checkbox" label="Text Entry" />
            <Form.Check type="checkbox" label="Website URL" defaultChecked />
            <Form.Check type="checkbox" label="Media Recordings" />
            <Form.Check type="checkbox" label="Student Annotation" />
            <Form.Check type="checkbox" label="File Uploads" />
          </div>
        </Form.Group>

        <Form.Group controlId="wd-assign-to" className="mb-3">
          <Form.Label className="fw-bold">Assign to</Form.Label>
          <Form.Control as="select" multiple>
            <option>Everyone</option>
            <option>Group 1</option>
            <option>Group 2</option>
          </Form.Control>
        </Form.Group>

        <Row>
          <Col md={4}>
            <Form.Group controlId="wd-due-date" className="mb-3">
              <Form.Label className="fw-bold">Due</Form.Label>
              <Form.Control type="date" defaultValue={assignment.due} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="wd-available-from" className="mb-3">
              <Form.Label className="fw-bold">Available From</Form.Label>
              <Form.Control type="date" defaultValue={assignment.available} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="wd-available-until" className="mb-3">
              <Form.Label className="fw-bold">Available Until</Form.Label>
              <Form.Control type="date" defaultValue={assignment.availableUntil || ""} />
            </Form.Group>
          </Col>
        </Row>

        <hr />

        <div className="d-flex justify-content-end">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
            Cancel
          </Link>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-danger">
            Save
          </Link>
        </div>
      </Form>
    </Container>
  );
}
