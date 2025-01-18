import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />

      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1227/Home"
                className="wd-dashboard-course-link" >
            <img src="FILL THIS IN PLEASE" width={200} />
            <div>
              <h5> CS1227 Luck </h5>
              <p className="wd-dashboard-course-title">
                  The class of luck </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link" >
            <img src="FILL THIS IN PLEASE" width={200} />
            <div>
              <h5> CALM1234 Meditaion </h5>
              <p className="wd-dashboard-course-title"> 
                Chill yourself out </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/7891/Home"
                  className="wd-dashboard-course-link" >
            <img src="FILL THIS IN PLEASE" width={200} />
            <div>
              <h5> SILY7891 Silly </h5>
              <p className="wd-dashboard-course-title"> 
                Master of Sillyness </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/4545/Home"
                  className="wd-dashboard-course-link" >
            <img src="FILL THIS IN PLEASE" width={200} />
            <div>
              <h5> YAY4545 Partying </h5>
              <p className="wd-dashboard-course-title"> 
                Intro to Partying </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1001/Home"
                  className="wd-dashboard-course-link" >
            <img src="FILL THIS IN PLEASE" width={200} />
            <div>
              <h5> MUSC1001 Bob Dylan </h5>
              <p className="wd-dashboard-course-title"> 
                Intro to Bob Dylan </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/4000/Home"
                  className="wd-dashboard-course-link" >
            <img src="FILL THIS IN PLEASE" width={200} />
            <div>
              <h5> TIM4000 Tim Chal </h5>
              <p className="wd-dashboard-course-title"> 
                History of Timothee Chalamet </p>
              <button> Go </button>
            </div>
          </Link>
        </div>


        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/3500/Home"
                  className="wd-dashboard-course-link" >
            <img src="FILL THIS IN PLEASE" width={200} />
            <div>
              <h5> MOON3500 Moon </h5>
              <p className="wd-dashboard-course-title"> 
                The Moon and life on Mars </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>

  
    </div>
);}
