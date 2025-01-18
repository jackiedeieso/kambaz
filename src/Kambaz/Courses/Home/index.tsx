import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div id="wd-home">
        
    <button id="wd-collapse-all">Collapse All</button>
    <button id="wd-view progress">View Progress</button>

        <select id="wd-select-publish-dropdown">
            <option value=""></option>
            <option value=""></option>
            <option selected value="wd-publish-all">Publish All</option>
            <option value=""></option>
        </select>
            
    <button id="wd-add module">+ Module</button>
    
        <table id="wd-home-table">
        <tr>
            <td valign="top">
            <Modules />
            </td>
            <td valign="top">
            <CourseStatus />
            </td>
        </tr>
        </table>
    </div>
);}
