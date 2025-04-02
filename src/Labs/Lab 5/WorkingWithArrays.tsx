import { useState } from "react";
import { FormControl } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithArrays() {
  const API = `${REMOTE_SERVER}/lab5/todos`;

  const [todoId, setTodoId] = useState(1);
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  return (
    <div id="wd-working-with-arrays">
      <h2>Working with Arrays</h2>

      {/* Retrieve All */}
      <h4>Retrieving Arrays</h4>
      <a
        id="wd-retrieve-todos"
        className="btn btn-primary mb-3"
        href={API}
        target="_blank"
      >
        Get Todos
      </a>

      {/* Retrieve by ID */}
      <h4>Retrieving a Todo by ID</h4>
      <FormControl
        className="w-25 mb-2"
        type="number"
        value={todoId}
        onChange={(e) => setTodoId(parseInt(e.target.value))}
      />
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-secondary mb-3"
        href={`${API}/${todoId}`}
        target="_blank"
      >
        Get Todo #{todoId}
      </a>

      {/* Filtering */}
      <h4>Filtering Array Items</h4>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-info mb-3"
        href={`${API}?completed=true`}
        target="_blank"
      >
        Get Completed Todos
      </a>

      {/* Create */}
      <h4>Creating New Items in an Array</h4>
      <a
        id="wd-create-todo"
        className="btn btn-success mb-3"
        href={`${API}/create`}
        target="_blank"
      >
        Create Todo
      </a>

      {/* Delete */}
      <h4>Deleting from an Array</h4>
      <FormControl
        className="w-25 mb-2"
        type="number"
        value={todo.id}
        onChange={(e) =>
          setTodo({ ...todo, id: e.target.value })
        }
      />
      <a
        id="wd-delete-todo"
        className="btn btn-danger mb-3"
        href={`${API}/${todo.id}/delete`}
        target="_blank"
      >
        Delete Todo with ID = {todo.id}
      </a>

      {/* Update Title */}
      <h4>Updating an Item in an Array</h4>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary float-end"
        target="_blank"
      >
        Update Title
      </a>
      <FormControl
        defaultValue={todo.id}
        className="w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <FormControl
        defaultValue={todo.title}
        className="w-50 float-start"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br /><br /><hr />

      {/* Update Description and Completed */}
      <h4>Editing Description & Completed</h4>
      <FormControl
        className="w-50 mb-2"
        type="text"
        placeholder="New description"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <a
        className="btn btn-warning mb-2 ms-2"
        href={`${API}/${todo.id}/description/${encodeURIComponent(todo.description)}`}
        target="_blank"
      >
        Describe Todo ID = {todo.id}
      </a>

      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) =>
            setTodo({ ...todo, completed: e.target.checked })
          }
        />
        <label className="form-check-label">
          Completed
        </label>
      </div>

      <a
        className="btn btn-dark"
        href={`${API}/${todo.id}/completed/${todo.completed}`}
        target="_blank"
      >
        Complete Todo ID = {todo.id}
      </a>
    </div>
  );
}
