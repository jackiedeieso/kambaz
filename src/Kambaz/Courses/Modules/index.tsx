import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModuleControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Modules() {
  return (
    <div id="wd-modules">
      <ModulesControls />
      <ListGroup className="rounded-0 mt-3">


        <ListGroup.Item className="wd-module p-0 mb-3 border-gray bg-white text-black">
          <div className="wd-title p-3 d-flex align-items-center justify-content-between bg-white border">
            <div className="d-flex align-items-center">
              <GreenCheckmark />
              <BsPlus className="fs-4 ms-2" />
              <IoEllipsisVertical className="fs-4 ms-2" />
              <BsGripVertical className="ms-3 fs-3" />
              <span className="fs-5 fw-bold">Week 1</span>
            </div>

            <ModuleControlButtons />
          </div>

          <ListGroup className="wd-lessons">
            <ListGroup.Item className="wd-lesson p-3 ps-4 bg-white text-black d-flex align-items-center justify-content-between">
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-4 bg-white text-black d-flex align-items-center justify-content-between">
              Introduction to the course
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-4 bg-white text-black d-flex align-items-center justify-content-between">
              Learn what is Web Development
              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        <ListGroup.Item className="wd-module p-0 mb-3 border-gray bg-white text-black">
          <div className="wd-title p-3 d-flex align-items-center justify-content-between bg-white border">
            <div className="d-flex align-items-center">
              <GreenCheckmark />
              <BsPlus className="fs-4 ms-2" />
              <IoEllipsisVertical className="fs-4 ms-2" />
              <BsGripVertical className="ms-3 fs-3" />
              <span className="fs-5 fw-bold">Week 2</span>
            </div>
          </div>

          <ListGroup className="wd-lessons">
            <ListGroup.Item className="wd-lesson p-3 ps-4 bg-white text-black d-flex align-items-center justify-content-between">
              LESSON 1
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-4 bg-white text-black d-flex align-items-center justify-content-between">
              LESSON 2
              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

      </ListGroup>
    </div>
  );
}
