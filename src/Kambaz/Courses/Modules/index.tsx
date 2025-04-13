import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";

import ModuleControls from "./ModuleControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

import {
  setModules,
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "./reducer";

import * as modulesClient from "../Modules/client"; // ✅ Updated path

export default function Modules() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);

  // Load modules for a course
  const fetchModulesForCourse = async () => {
    try {
      const data = await modulesClient.findModulesForCourse(cid as string);
      console.log("📦 Modules from backend:", data); // <-- Add this
      dispatch(setModules(data));
    } catch (err) {
      console.error("❌ Failed to fetch modules:", err);
    }
  };

  useEffect(() => {
    if (cid) fetchModulesForCourse();
  }, [cid]);

  // Create new module
  const addModuleHandler = async () => {
    if (!cid || !moduleName) return;
    const newModule = await modulesClient.createModuleForCourse(cid, {
      name: moduleName,
      course: cid,
    });
    dispatch(addModule(newModule));
    setModuleName("");
  };

  // Update existing module
  const updateModuleHandler = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  // Delete module
  const deleteModuleHandler = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  return (
    <div className="wd-modules">
      <ModuleControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModuleHandler}
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
                          updateModuleHandler({ ...module, editing: false });
                        }
                      }}
                    />
                  )}
                </div>

                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={() => deleteModuleHandler(module._id)}
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
