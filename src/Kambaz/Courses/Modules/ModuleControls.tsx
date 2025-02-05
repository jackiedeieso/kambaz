import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";
import { FaRegCircleXmark } from "react-icons/fa6";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap d-flex gap-2 mb-3">
      <Button variant="secondary" size="lg" id="wd-collapse-all">
        Collapse All
      </Button>
      <Button variant="secondary" size="lg" id="wd-view-progress">
        View Progress
      </Button>

      {/* Dark Grey Publish All Dropdown */}
      <Dropdown>
        <Dropdown.Toggle variant="dark" size="lg" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <GreenCheckmark /> Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item>
            <GreenCheckmark /> Publish modules only
          </Dropdown.Item>
          <Dropdown.Item>
            <FaRegCircleXmark className="text-danger" /> Unpublish all modules and items
          </Dropdown.Item>
          <Dropdown.Item>
            <FaRegCircleXmark className="text-danger" /> Unpublish modules only
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button variant="danger" size="lg" id="wd-add-module">
        <FaPlus className="me-2" /> Module
      </Button>
    </div>
  );
}
