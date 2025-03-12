import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./reducer";
import { v4 as uuidv4 } from "uuid";
import { Form, Button, Container, Card } from "react-bootstrap";

export default function Signup() {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state: any) => state.accountReducer); // Get users from Redux

  const signup = () => {
    if (!newUser.username || !newUser.password || !newUser.email) {
      alert("All fields are required!");
      return;
    }

    const userExists = users.find((u: any) => u.username === newUser.username);
    if (userExists) {
      alert("Username already exists!");
      return;
    }

    const createdUser = { ...newUser, _id: uuidv4() };

    dispatch(setCurrentUser(createdUser)); // Store in Redux

    navigate("/Kambaz/Dashboard");
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
