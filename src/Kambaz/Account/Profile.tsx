import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
        <input defaultValue="jacksterisilly" placeholder="username" className="wd-username"/><br/>
        <input defaultValue="sillygoose"  placeholder="password" type="password" className="wd-password" /><br/>
        <input defaultValue="jackie" placeholder="First Name" id="wd-firstname" /><br/>
        <input defaultValue="cool" placeholder="Last Name" id="wd-lastname" /><br/>
        <input defaultValue="2002-27-12" type="date" id="wd-dob" /><br/>
        <input defaultValue="jackiesocool@neu.com" type="email" id="wd-email" /><br/>

        <select defaultValue="USER" id="wd-role">
            <option value="USER">User</option>       
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option> 
            <option value="STUDENT">Student</option>
        </select> <br/>

        <Link to="/Kambaz/Account/Signin" >Sign out</Link>
    </div>
);}
