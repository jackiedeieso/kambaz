import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ListGroup, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  setModules,
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "./reducer";
import ModuleControls from "./ModuleControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import * as coursesClient from "../client";
import * as modulesClient from "../client"; 

export default function Modules() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);

  // Load modules from backend
  const fetchModules = async () => {
    try {
      const data = await coursesClient.findModulesForCourse(cid as string);
      dispatch(setModules(data));
    } catch (err) {
      console.error("Failed to fetch modules:", err);
    }
  };

  useEffect(() => {
    if (cid) fetchModules();
  }, [cid]);

  // Create module
  const createModuleForCourse = async () => {
    if (!cid || !moduleName) return;
    try {
      const newModule = await coursesClient.createModuleForCourse(cid, {
        name: moduleName,
        course: cid,
      });
      dispatch(addModule(newModule));
      setModuleName("");
    } catch (err) {
      console.error("Failed to create module:", err);
    }
  };

  // Delete module
  const removeModule = async (moduleId: string) => {
    try {
      await modulesClient.deleteModule(moduleId);
      dispatch(deleteModule(moduleId));
    } catch (err) {
      console.error("Failed to delete module:", err);
    }
  };

  // Save updated module
  const saveModule = async (module: any) => {
    try {
      await modulesClient.updateModule(module);
      dispatch(updateModule(module));
    } catch (err) {
      console.error("Failed to update module:", err);
    }
  };

  return (
    <div className="wd-modules">
      <ModuleControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={createModuleForCourse}
      />

      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <ListGroup.Item
              key={module._id}
              className="wd-module p-0 mb-3 border-gray bg-white text-black"
            >
              <div className="wd-title p-3 d-flex align-items-center justify-content-between bg-white border">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-4" />

                  {!module.editing ? (
                    <span className="fs-5 fw-bold">{module.name}</span>
                  ) : (
                    <FormControl
                      className="w-50 d-inline-block"
                      value={module.name}
                      onChange={(e) =>
                        dispatch(updateModule({ ...module, name: e.target.value }))
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          saveModule({ ...module, editing: false });
                        }
                      }}
                    />
                  )}
                </div>

                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={() => removeModule(module._id)}
                  editModule={() => dispatch(editModule(module._id))}
                />
              </div>

              {module.lessons?.length > 0 && (
                <ListGroup className="wd-lessons">
                  {module.lessons.map((lesson: any) => (
                    <ListGroup.Item
                      key={lesson._id}
                      className="wd-lesson p-3 ps-4 bg-white text-black d-flex align-items-center justify-content-between"
                    >
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
