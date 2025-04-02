import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./reducer";
import { v4 as uuidv4 } from "uuid";
import { Form, Button, Container, Card } from "react-bootstrap";
import * as client from "./client";

export default function Signup() {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state: any) => state.accountReducer); // Optional: used for duplicate check

  const signup = async () => {
    if (!newUser.username || !newUser.password || !newUser.email) {
      alert("All fields are required!");
      return;
    }

    const userExists = users?.find((u: any) => u.username === newUser.username);
    if (userExists) {
      alert("Username already exists!");
      return;
    }

    try {
      const currentUser = await client.signup({ ...newUser, _id: uuidv4() });
      dispatch(setCurrentUser(currentUser));
      navigate("/Kambaz/Account/Profile");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ width: "350px" }}>
        <Card.Body>
          <h3 className="text-center mb-4">Sign Up</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              />
            </Form.Group>

            <Button variant="danger" className="w-100" onClick={signup}>
              Sign Up
            </Button>
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
