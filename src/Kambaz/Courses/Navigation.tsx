import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import * as db from "../Database"; 
import "./CourseNavigation.css";

export default function CourseNavigation() {
  const location = useLocation(); 
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  const courseId = location.pathname.split("/")[3]; 

  const course = db.courses.find((c) => c._id === courseId);

  if (!course) return null;

  return (
    <div id="wd-courses-navigation">
      <h2>Courses</h2>
      <ListGroup>
        <ListGroup.Item key={course._id} className="wd-course-nav-item bg-white text-black border-0">
          <h4 className="text-danger fw-bold">{course.name}</h4>
          <ListGroup variant="flush">
            {links.map((name) => (
              <ListGroup.Item key={`${course._id}-${name}`} className="wd-course-sub-nav bg-white">
                <Link to={`/Kambaz/Courses/${course._id}/${name}`} className="text-decoration-none text-danger">
                  {name}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>

        
      </ListGroup>
    </div>
  );
}
