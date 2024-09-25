export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
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
                    <td>
                        <label htmlFor="wd-assignment">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-assignment"> 
                            <option>ASSIGNMENT</option>
                            <option>HOMEWORK</option>
                            <option>QUIZ</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="wd-grade"> Display Grade as </label>
                    </td>
                    <td>
                        <select id="wd-grade"> 
                            <option>PERCENTAGE</option>
                            <option>LETTERGRADE</option>
                        </select>      
                    </td>
                </tr>
                <tr> <td>
                        <label htmlFor="wd-grade"> Display Grade as </label>
                    </td>
                    <td>
                        <select id="wd-grade"> 
                            <option>PERCENTAGE</option>
                            <option>LETTERGRADE</option>
                        </select>      
                    </td>
                </tr>
                <tr>
                     <td>
                        <label htmlFor="wd-submissiontype"> Submission Type </label>
                    </td>
                    <td>
                        <select id="wd-submissiontype"> 
                            <option>ONLINE</option>
                            <option>INPERSON</option>
                        </select>
                    </td>
                </tr> 
                <tr> 
                    <td></td>
                    <td>
                    Online Entry Options 
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                        <input id="wd-text-entry" type="checkbox" /><label htmlFor="wd-text-entry">Text Entry</label>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                        <input id="wd-website-url" type="checkbox"/><label htmlFor="wd-website-url">Website URL</label>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                        <input id="wd-media-recordings" type="checkbox"/><label htmlFor="wd-media-recordings">Media Recordings</label>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                        <input id="wd-student-annotation" type="checkbox"/><label htmlFor="wd-student-annotations">Student Annotations</label>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                     <td>
                        <input id="wd-file-uploads" type="checkbox"/><label htmlFor="wd-file-uploads">File Uploads</label>
                    </td> 
                </tr>
                <tr>
                    <td align="right" valign="top">
                        Assign
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign To</label><br />
                        <input id="wd-assign-to" value="Everyone" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="wd-available-from">Available From</label>
                        <br/><input type="date" id="wd-available-from" value="2024-05-06"/>
                    </td>
                    <td>
                        <label htmlFor="wd-available-from">Until</label>
                        <br/><input type="date" id="wd-available-from" value="2024-05-20"/>
                    </td>
                </tr>
            </table>
            <hr/>
            <button>Cancel</button>
            <button>Save</button>
        </div>
    );
}

