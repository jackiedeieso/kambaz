import { useState } from "react";
import { AiOutlineDashboard, AiOutlineMenu } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import { Link } from "react-router-dom";

export default function KambazNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="btn text-white bg-black position-fixed top-0 start-0 m-2 d-md-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineMenu size={24} />
      </button>

      <div 
        id="wd-kambaz-navigation"
        className={`list-group rounded-0 position-fixed bottom-0 top-0 bg-black z-2 
        ${isOpen ? "d-block" : "d-none"} d-md-block`}
        style={{ width: 120 }}
      >
        <a id="wd-neu-link" target="_blank" rel="noopener noreferrer"
          href="https://www.northeastern.edu/"
          className="list-group-item bg-black border-0 text-center"
        >
          <img src="/images/NEU.png" width="75px" alt="NEU Logo" />
        </a>

        <Link to="/Kambaz/Account" id="wd-account-link"
          className="list-group-item text-center border-0 bg-black text-white"
        >
          <FaRegCircleUser className="fs-1 text-white" /><br />
          Account
        </Link>

        <Link to="/Kambaz/Dashboard" id="wd-dashboard-link"
          className="list-group-item text-center border-0 bg-white text-danger"
        >
          <AiOutlineDashboard className="fs-1 text-danger" /><br />
          Dashboard
        </Link>

        <Link to="/Kambaz/Courses" id="wd-courses-link"
          className="list-group-item text-white bg-black text-center border-0"
        >
          <LiaBookSolid className="fs-1 text-danger" /><br />
          Courses
        </Link>

        <Link to="/Kambaz/Calendar" id="wd-calendar-link"
          className="list-group-item text-white bg-black text-center border-0"
        >
          <IoCalendarOutline className="fs-1 text-danger" /><br />
          Calendar
        </Link>

        <Link to="/Kambaz/Inbox" id="wd-inbox-link"
          className="list-group-item text-white bg-black text-center border-0"
        >
          <FaInbox className="fs-1 text-danger" /><br />
          Inbox
        </Link>

        <Link to="/Kambaz/Labs" id="wd-labs-link"
          className="list-group-item text-white bg-black text-center border-0"
        >
          <ImLab className="fs-1 text-danger" /><br />
          Labs
        </Link>

        <Link to="/Kambaz/Settings" id="wd-settings-link"
          className="list-group-item text-white bg-black text-center border-0"
        >
          <LiaCogSolid className="fs-1 text-danger" /><br />
          Settings
        </Link>
      </div>
    </>
  );
}
