import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";
import * as client from "./client"; // ✅ Axios API client

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const existingAssignment = assignments.find((a: any) => a._id === aid);

  const [assignment, setAssignment] = useState<any>(
    existingAssignment || {
      _id: uuidv4(),
      name: "",
      description: "",
      points: "",
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
      course: cid,
    }
  );

  const handleSave = async () => {
    if (!existingAssignment) {
      const newAssignment = await client.createAssignment(assignment);
      dispatch(addAssignment(newAssignment));
    } else {
      const updated = await client.updateAssignment(assignment);
      dispatch(updateAssignment(updated));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <Container fluid className="p-4">
      <Form className="bg-white p-4 shadow-sm">
        <Form.Group controlId="wd-name" className="mb-3">
          <Form.Label className="fw-bold">Assignment Name</Form.Label>
          <Form.Control
            type="text"
            value={assignment.name}
            onChange={(e) => setAssignment({ ...assignment, name: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="wd-description" className="mb-3">
          <Form.Label className="fw-bold">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="wd-points" className="mb-3">
          <Form.Label className="fw-bold">Points</Form.Label>
          <Form.Control
            type="number"
            value={assignment.points}
            onChange={(e) => setAssignment({ ...assignment, points: e.target.value })}
          />
        </Form.Group>

        <Row>
          <Col md={4}>
            <Form.Group controlId="wd-due-date" className="mb-3">
              <Form.Label className="fw-bold">Due Date</Form.Label>
              <Form.Control
                type="date"
                value={assignment.dueDate}
                onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="wd-available-from" className="mb-3">
              <Form.Label className="fw-bold">Available From</Form.Label>
              <Form.Control
                type="date"
                value={assignment.availableFrom}
                onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="wd-available-until" className="mb-3">
              <Form.Label className="fw-bold">Available Until</Form.Label>
              <Form.Control
                type="date"
                value={assignment.availableUntil}
                onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>

        <hr />

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </Container>
  );
}
