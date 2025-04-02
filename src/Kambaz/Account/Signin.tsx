import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Button, Container, Card } from "react-bootstrap";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) {
        alert("Invalid username or password");
        return;
      }
      dispatch(setCurrentUser(user));
      navigate("/Kambaz/Dashboard");
    } catch (error) {
      console.error("Signin failed:", error);
      alert("Signin failed. Please try again.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ width: "350px" }}>
        <Card.Body>
          <h3 className="text-center mb-4">Sign In</h3>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </Form.Group>

            <Button variant="danger" className="w-100" onClick={signin}>
              Sign In
            </Button>
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
