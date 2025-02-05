import { Form, Row, Col, Button, Container } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <Container fluid className="p-4">
      <Form className="bg-white p-4 shadow-sm">
        <Form.Group controlId="wd-name" className="mb-3">
          <Form.Label className="fw-bold">Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
        </Form.Group>

        <Form.Group controlId="wd-description" className="mb-3">
          <Form.Label className="fw-bold">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            defaultValue={`The assignment is available online! 
                           Submit a link to the landing page of your web application running on Netlify.
                           The landing page should include the following:
                           - Your full name and section
                           - Links to each of the lab assignments
                           - Links to the Kanbaz application... etc. etc.`}
          />
        </Form.Group>

        <Form.Group controlId="wd-points" className="mb-3">
          <Form.Label className="fw-bold">Points</Form.Label>
          <Form.Control type="number" defaultValue={100} />
        </Form.Group>

        <Form.Group controlId="wd-group" className="mb-3">
          <Form.Label className="fw-bold">Assignment Group</Form.Label>
          <Form.Select>
            <option>ASSIGNMENTS</option>
            <option>Group 1</option>
            <option>Group 2</option>
            <option>Group 3</option>
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
            <option>Jackie Cool</option>
          </Form.Control>
        </Form.Group>

        <Row>
          <Col md={4}>
            <Form.Group controlId="wd-due-date" className="mb-3">
              <Form.Label className="fw-bold">Due</Form.Label>
              <Form.Control type="date" defaultValue="2025-01-01" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="wd-available-from" className="mb-3">
              <Form.Label className="fw-bold">Available From</Form.Label>
              <Form.Control type="date" defaultValue="2025-01-01" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="wd-available-until" className="mb-3">
              <Form.Label className="fw-bold">Available Until</Form.Label>
              <Form.Control type="date" defaultValue="2025-01-01" />
            </Form.Group>
          </Col>
        </Row>

        <hr />

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </Container>
  );
}
