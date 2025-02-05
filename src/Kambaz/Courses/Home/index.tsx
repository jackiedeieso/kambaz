import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div className="container-fluid" id="wd-home">
      <div className="row">
        <div className="col-xl-9 col-lg-12">
          <Modules />
        </div>

        <div className="col-xl-3 d-none d-xl-block">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
