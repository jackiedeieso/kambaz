import { ListGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: { todo: { id: string; title: string } }) {
  const dispatch = useDispatch(); // ✅ Correct placement inside function body

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center bg-white border">
      <span className="fw-bold">{todo.title}</span>
      <div>
        <Button
          variant="danger"
          className="me-2"
          onClick={() => dispatch(deleteTodo(todo.id))} // ✅ Dispatching action correctly
          id="wd-delete-todo-click"
        >
          Delete
        </Button>
        <Button
          variant="primary"
          onClick={() => dispatch(setTodo(todo))} // ✅ Dispatching action correctly
          id="wd-set-todo-click"
        >
          Edit
        </Button>
      </div>
    </ListGroup.Item>
  );
}
