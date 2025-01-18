export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name </label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea cols={50} rows={10} id="wd-description">
          The assignment is available online! Submit a link to the landing page of
          of your web application running on Netlify. The landing page should include
          the following: Your full name and section, links to each of the lab assignments, 
          links to the Kanbaz application... etc. etc.
        </textarea>
        <br />

        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option selected value="group-1">Group 1</option>
                <option value="group-2">Group 2</option>
                <option value="group-3">Group 3</option>
                <option value="group-4">Group 4</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-displaygrade-as">Display Grade as</label>
            </td>

            <td>
              <select id="wd-display-grade-as">
                <option selected value="percentage">Percentage</option>
                <option value="decmial">Decimal</option>
                <option value="points">Points</option>
              </select>
            </td>
          </tr>


          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>

            <td>
              <select id="wd-submission-type">
                <option selected value="online">Online</option>
                <option value="in-person">In Person</option>
              </select>

              <td align="right" valign="top">
                <label htmlFor="wd-online-entry">Online Entry Options</label>
              </td>

              <input type="checkbox" name="check-online-entry" id="wwd-text-entry"/>
              <label htmlFor="wd-text-entry">Text Entry</label><br/>

              <input type="checkbox" name="check-online-entry" id="wd-website-url"/>
              <label htmlFor="wd-website-url">Website URL</label><br/>

              <input type="checkbox" name="check-online-entry" id="wd-media-recordings"/>
              <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

              <input type="checkbox" name="check-online-entry" id="wd-student-annotation"/>
              <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

              <input type="checkbox" name="check-online-entry" id="wd-file-upload"/>
              <label htmlFor="wd-file-upload">File Uploads</label><br/>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>

            <td>
            <label htmlFor="wd-assign-to-label">Assign to</label><br/>
            <input list="wd-assign-to" id="assign-to-choice" placeholder="Type or select"/>

            <datalist id="wd-assign-to">
              <option value="Everyone"></option>
              <option value="Group 1"></option>
              <option value="Group 2"></option>
              <option value="Jackie Cool"></option>
            </datalist>
            </td>
          </tr>  

          <tr>
            <td></td>
            <td>
              <label htmlFor="wd-due-date">Due</label><br/>
              <input type="date" value="2025-01-01" id="wd-due-date" />
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <label htmlFor="wd-available-from">Available From</label><br/>
              <input type="date" value="2025-01-01" id="wd-available-from"/>
            </td>

            <td>
              <label htmlFor="wd-available-until">Available Until</label><br/>
              <input type="date" value="2025-01-01" id="wd-available-until"/>
            </td>
          </tr>

          <tr>
            <td colSpan={3}>
              <hr/>
            </td>
          </tr>


          <tr>
            <td></td>
            <td></td>
            <td>
              <button type="button">Cancel</button>
              <button type="submit">Save</button>
            </td>
          </tr>
        </table>
      </div>
  );}
  