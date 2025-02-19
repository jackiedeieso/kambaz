import { useParams } from "react-router";
import { ListGroup } from "react-bootstrap";
import * as db from "../../Database"; 
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Modules() {
  const { cid } = useParams(); 
  const modules = db.modules.filter((module: any) => module.course === cid); 

  return (
    <div id="wd-modules">
      <ListGroup className="rounded-0 mt-3">
        {modules.map((module: any) => (
          <ListGroup.Item key={module._id} className="wd-module p-0 mb-3 border-gray bg-white text-black">
            <div className="wd-title p-3 d-flex align-items-center justify-content-between bg-white border">
              <div className="d-flex align-items-center">
                <GreenCheckmark />
                <BsPlus className="fs-4 ms-2" />
                <IoEllipsisVertical className="fs-4 ms-2" />
                <BsGripVertical className="ms-3 fs-3" />
                <span className="fs-5 fw-bold">{module.name}</span>
              </div>
              <ModuleControlButtons />
            </div>

            <div className="p-3 text-secondary">{module.description}</div>

            {module.lessons && module.lessons.length > 0 && (
              <ListGroup className="wd-lessons">
                {module.lessons.map((lesson: any) => (
                  <ListGroup.Item key={lesson._id} className="wd-lesson p-3 ps-4 bg-white text-black d-flex align-items-center justify-content-between">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    <LessonControlButtons />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
