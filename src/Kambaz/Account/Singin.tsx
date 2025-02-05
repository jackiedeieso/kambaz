import { Link } from "react-router-dom";
import { Form, Button, Container, Card } from "react-bootstrap";

export default function Signin() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ width: "350px" }}>
        <Card.Body>
          <h3 className="text-center mb-4">Sign In</h3>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>

            <Link to="/Kambaz/Dashboard" className="d-block">
              <Button variant="danger" className="w-100">
                Sign In
              </Button>
            </Link>
          </Form>

          <div className="text-center mt-3">
            <span>Don't have an account? </span>
            <Link to="/Kambaz/Account/Signup" className="text-danger fw-bold">
              Sign up
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
