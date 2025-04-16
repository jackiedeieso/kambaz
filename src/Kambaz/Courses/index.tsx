import { useState } from "react";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";

import CourseNavigation from "./Navigation";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleDetails from "./People/Details";
import Users from "../Account/Users";
import Quizzes from "./Quizzes";

interface CoursesProps {
  courses: any[];
}

export default function Courses({ courses }: CoursesProps) {
  const { cid } = useParams();
  console.log("cid from useParams:", cid);
  const { pathname } = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);

  const course = courses.find((c) => c._id === cid);
  const currentPage = pathname.split("/")[4]?.toUpperCase() || "HOME";

  return (
    <div id="wd-courses" className="position-relative">
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="text-danger mb-0">
          <FaAlignJustify
            className="me-3 fs-4 mb-1"
            role="button"
            onClick={() => setShowSidebar(!showSidebar)}
          />
          {course ? course.name : "Course"} {">"} {currentPage}
        </h2>
      </div>
      <hr />

      {showSidebar && (
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 0,
            width: 250,
            height: "100%",
            backgroundColor: "#fff",
            zIndex: 999,
            boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
            padding: "1rem",
          }}
        >
          <div className="text-end mb-2">
            <button className="btn btn-sm btn-outline-secondary" onClick={() => setShowSidebar(false)}>
              ✕
            </button>
          </div>
          <CourseNavigation />
        </div>
      )}

      <div className="d-flex">
        {/* Main Content */}
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<Users />} />
            <Route path="People/:uid" element={<PeopleDetails />} />
            <Route path="Quizzes/*" element={<Quizzes />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
