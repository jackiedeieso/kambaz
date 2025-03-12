import { useState } from "react";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

interface DashboardProps {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: DashboardProps) {
  const [showAllCourses, setShowAllCourses] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);

  // Toggle between showing all courses vs. enrolled courses
  const handleToggleEnrollments = () => {
    setShowAllCourses(!showAllCourses);
  };

  // Handle enrolling/unenrolling in a course
  const handleEnrollToggle = (courseId: string) => {
    setEnrolledCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  // Determine what courses to display
  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((course) => enrolledCourses.includes(course._id));

  return (
    <div id="wd-dashboard" className="p-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <Button
          className="btn btn-info"
          id="wd-enrollments-button"
          onClick={handleToggleEnrollments}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </Button>
      </div>
      <hr />
      <h5>
        New Course
        <Button className="btn btn-primary float-end" onClick={addNewCourse}>
          Add
        </Button>
        <Button className="btn btn-warning float-end me-2" onClick={updateCourse}>
          Update
        </Button>
      </h5>
      <br />
      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        as="textarea"
        value={course.description}
        rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <h2 id="wd-dashboard-published">Courses ({displayedCourses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {displayedCourses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course">
              <Card>
                <Card.Img variant="top" src="/images/luck.jpg" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {course.name}
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    {course.description}
                  </Card.Text>

                  <div className="d-grid gap-2">
                    <Link
                      to={`/Kambaz/Courses/${course._id}/Home`}
                      className="btn btn-primary"
                    >
                      Go
                    </Link>

                    <Button
                      variant={enrolledCourses.includes(course._id) ? "danger" : "success"}
                      onClick={() => handleEnrollToggle(course._id)}
                      className="w-100"
                    >
                      {enrolledCourses.includes(course._id) ? "Unenroll" : "Enroll"}
                    </Button>

                    <div className="d-flex justify-content-between">
                      <Button
                        className="btn btn-warning"
                        onClick={() => setCourse(course)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => deleteCourse(course._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
