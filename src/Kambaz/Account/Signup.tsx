import { Link } from "react-router-dom";
import { Form, Button, Container, Card } from "react-bootstrap";

export default function Signup() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ width: "350px" }}>
        <Card.Body>
          <h3 className="text-center mb-4">Sign Up</h3>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="verify-password">
              <Form.Label>Verify Password</Form.Label>
              <Form.Control type="password" placeholder="Re-enter password" />
            </Form.Group>

            <Link to="/Kambaz/Account/Profile" className="d-block">
              <Button variant="danger" className="w-100">
                Sign Up
              </Button>
            </Link>
          </Form>

          <div className="text-center mt-3">
            <span>Already have an account? </span>
            <Link to="/Kambaz/Account/Signin" className="text-danger fw-bold">
              Sign in
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
