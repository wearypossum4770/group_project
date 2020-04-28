import React, { useState } from "react";

var myArray = [
  { name: "Michael", age: "30", birthdate: "11/10/1989" },
  { name: "Mila", age: "32", birthdate: "10/1/1989" },
  { name: "Paul", age: "29", birthdate: "10/14/1990" },
  { name: "Dennis", age: "25", birthdate: "11/29/1993" },
  { name: "Tim", age: "27", birthdate: "3/12/1991" },
  { name: "Erik", age: "24", birthdate: "10/31/1995" },
];
const recdForm =
  "Thank you for taking the time to redo the application, we did receive it and it is now part of your record.  If we need anything further, we will notify you by email.";
const disclaimer =
  "WARNING: This E-mail, and any attachments, are covered by the Electronic Communications Privacy Act, 18 U.S.C. §2510-2521. This email may contain confidential and legally privileged information. The contents of this e-mail, and any attachments, are intended solely for the use of the person or entity to whom the e-mail was addressed. This email may also contain information that may be protected by the attorney-client privilege, work-product doctrine, or other privileges, and may be restricted from disclosure by applicable Federal and State laws. If you are not the intended recipient of this email you are advised that any dissemination, distribution, or use of the contents of this message is strictly prohibited. If you received this e-mail message in error, please contact the sender by reply e-mail or phone. Please also permanently delete all copies of the original e-mail and any attachments.";

const populateRows = () => {};

const ApprovalDashboard = (props) => {
  const [orderBy, setOrderBy] = useState("dec");
  return (
    <table>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Previous Total</th>
          <th>Hours Submitted</th>
          <th>Approve?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>History</td>
          <td>30</td>
          <td>20</td>
          <td>
            <input type="checkbox" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default ApprovalDashboard;
