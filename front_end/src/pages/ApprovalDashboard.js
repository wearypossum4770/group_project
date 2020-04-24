import React, { useState } from "react";

var myArray = [
  { name: "Michael", age: "30", birthdate: "11/10/1989" },
  { name: "Mila", age: "32", birthdate: "10/1/1989" },
  { name: "Paul", age: "29", birthdate: "10/14/1990" },
  { name: "Dennis", age: "25", birthdate: "11/29/1993" },
  { name: "Tim", age: "27", birthdate: "3/12/1991" },
  { name: "Erik", age: "24", birthdate: "10/31/1995" },
];

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
