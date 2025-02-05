import { Link } from "react-router-dom";
import { Form, Button, Container, Card } from "react-bootstrap";

export default function Profile() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
        <Card.Body>
          <h3 className="text-center mb-4">Profile</h3>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" defaultValue="jackied123" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="first-name">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" defaultValue="Jackie" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="last-name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" defaultValue="Deieso" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" defaultValue="jackie@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Select>
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Link to="/Kambaz/Dashboard">
                <Button variant="secondary">Cancel</Button>
              </Link>
              <Button variant="danger">Save</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
