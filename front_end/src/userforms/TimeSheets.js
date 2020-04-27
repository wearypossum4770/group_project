import React, { useState } from "react";

//const timesheetType = 'BarberApprentice' ? 'querterly':'monthly'
export const MonthlyTimeSheet = (props) => {
  return <div>MONTHLY TIMESHEET</div>;
};

const boardHeaer = () => (
  <p>
    <strong>STATE OF MISSOURI</strong>
    <br />
    DIVISION OF PROFESSIONAL REGISTRATION
    <br />
    <strong>BARBER APPRENTICE WEEKLY LOG</strong>
  </p>
);

const boardAddress = () => (
  <address>
    <strong>
      MISSOURI BOARD OF COSEMTOLOGY
      <br /> AND BARBER EXAMINERS
      <br /> P.O. BOX 1052
      <br />
    </strong>{" "}
    JEFFERSON CITY, MO 65102
    <br /> 573-751-1052 PHONE
    <br /> 573-751-8167 FAX
  </address>
);
const handleChange = (e) => {
  const [name, value] = e.target;
};
export const WeeklyTimeSheet = (props) => {
  const [value, setValue] = useState(null);

  return (
    <div className="container">
      <form>
        <fieldset disabled>
          <legend>Weekly Timesheet</legend>
          <input type="button" value="History" />
          <br />
          <input type="button" value="5" />
        </fieldset>
        <input type="number" />
        <button>Reset</button>
        <button>Continue</button>
      </form>
    </div>
  );
};

/**<div class="grid-container">
            <div class="item1"><img alt="state seal" /></div>
            <div class="item2">{boardHeaer()}</div>
            <div class="item3">{boardAddress()}</div>
            <div class="item4">
                <table>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Regular<br />Hours</th>
                            <th>MONDAY</th>
                            <th>TUESDAY</th>
                            <th>WEDNESDAY</th>
                            <th>THURSDAY</th>
                            <th>FRIDAY</th>
                            <th>SATURDAY</th>
                            <th>SUNDAY</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>10</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div> */
