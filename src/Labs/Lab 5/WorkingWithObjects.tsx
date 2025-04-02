import { useState } from "react";
import { FormControl, FormCheck } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "MOD456",
    name: "Advanced React",
    description: "State management, routing, and hooks",
    course: "CS7890",
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      {/* ASSIGNMENT */}
      <h4>Retrieving Assignment</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}`}
        target="_blank"
      >
        Get Assignment
      </a>
      <hr />

      <h4>Retrieving Assignment Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}/title`}
        target="_blank"
      >
        Get Title
      </a>
      <hr />

      <h4>Modifying Assignment</h4>
      <FormControl
        className="mb-2"
        id="wd-assignment-title"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <a
        id="wd-update-assignment-title"
        className="btn btn-success mb-2"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>

      <FormControl
        className="mb-2"
        value={assignment.score}
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
      />
      <a
        className="btn btn-info mb-2"
        id="wd-update-assignment-score"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>

      <FormCheck
        className="mb-2"
        label="Completed"
        checked={assignment.completed}
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
      />
      <a
        className="btn btn-warning"
        id="wd-update-assignment-completed"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed Status
      </a>

      <hr />

      {/* MODULE */}
      <h4>Retrieving Module</h4>
      <a
        id="wd-retrieve-module"
        className="btn btn-primary"
        href={`${MODULE_API_URL}`}
        target="_blank"
      >
        Get Module
      </a>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-secondary ms-2"
        href={`${MODULE_API_URL}/name`}
        target="_blank"
      >
        Get Module Name
      </a>
      <hr />

      <h4>Modifying Module</h4>
      <FormControl
        className="mb-2"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <a
        className="btn btn-success mb-2"
        id="wd-update-module-name"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Module Name
      </a>

      <FormControl
        className="mb-2"
        value={module.description}
        onChange={(e) =>
          setModule({ ...module, description: e.target.value })
        }
      />
      <a
        className="btn btn-warning"
        id="wd-update-module-description"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Module Description
      </a>

      <hr />
    </div>
  );
}
