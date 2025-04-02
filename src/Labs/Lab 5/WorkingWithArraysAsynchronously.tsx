import { useState, useEffect } from "react";
import * as client from "./client";
import { ListGroup, FormControl } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);

  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };

  const createTodo = async () => {
    const todos = await client.createTodo();
    setTodos(todos);
  };

  const editTodo = (todo: any) => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, editing: true } : t
    );
    setTodos(updatedTodos);
  };

  const updateTodo = async (updated: any) => {
    const saved = await client.updateTodo(updated);
    const updatedTodos = todos.map((t) =>
      t.id === updated.id ? { ...saved, editing: false } : t
    );
    setTodos(updatedTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>

      <h4>
        Todos
        <FaPlusCircle
          onClick={createTodo}
          className="text-success float-end fs-3"
          id="wd-create-todo"
          role="button"
          title="Create Todo"
        />
      </h4>

      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item key={todo.id}>
            <FaPencil
              onClick={() => editTodo(todo)}
              className="text-primary float-end me-2 mt-1"
              role="button"
              title="Edit Todo"
            />

            <input
              type="checkbox"
              className="form-check-input me-2 float-start"
              checked={todo.completed}
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />

            {!todo.editing ? (
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
            ) : (
              <FormControl
                className="w-50 float-start"
                value={todo.title}
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }}
                onChange={(e) =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id ? { ...t, title: e.target.value } : t
                    )
                  )
                }
              />
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <hr />
    </div>
  );
}
