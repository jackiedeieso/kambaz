import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import ModuleEditor from "./ModuleEditor";

interface ModuleControlsProps {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}

export default function ModuleControls({ moduleName, setModuleName, addModule }: ModuleControlsProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Button variant="danger" onClick={handleShow}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>

      <ModuleEditor
        show={show}
        handleClose={handleClose}
        dialogTitle="Add Module"
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </div>
  );
}
