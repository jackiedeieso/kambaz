import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="border p-3 bg-light rounded">
      <h2>Course Status</h2>

      <div className="d-flex mb-3">
        <Button variant="secondary" className="w-50 me-2">
          <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
        </Button>
        <Button variant="success" className="w-50">
          <FaCheckCircle className="me-2 fs-5" /> Publish
        </Button>
      </div>

      <Button variant="secondary" className="w-100 mb-2 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </Button>
      <Button variant="secondary" className="w-100 mb-2 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
      </Button>
    </div>
  );
}
