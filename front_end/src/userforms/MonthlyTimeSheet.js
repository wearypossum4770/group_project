import React from 'react';
import '../../App.css'
class MonthlyTimeSheet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            month_of: "",
            year_of: "",
            apprentice_name: "",
            apprentice_type: "barber",
            instructor_name: "",
            shop_name: "",
            shop_license_number: "",
            apprentice_home_address: "",
            days_absent: "",
            exam_grade: "",
            monthly_quarterly: "quarter",
            time_sheet_data: {
                subject_title: ['history', 'professional image', 'bacteriology', 'sterilization and sanitization', 'implements, tools, and equipment', 'properties and disorders of the skin', 'treatement of hair and scalp', 'facial massage and treatments', 'shaving', 'haircutting', 'hairstyling', 'mustache and beard design', 'permanent waving', 'chemical hair relaxing and soft curl permanents', 'hair coloring', 'hair pieces', 'chemistry', 'anatony and physiology', 'salesmanship and shop management', 'state law'],
                subject_hours: [10, 10, 10, 40, 30, 30, 40, 10, 70, 850, 650, 10, 60, 60, 60, 10, 10, 10, 10, 20],
                entered_hours: ''
            }
        }
    }
    renderRemainingForm = () => {
        let renderedRows = []
        const { time_sheet_data: { subject_title, subject_hours } } = this.state
        for (let index = 0; index < subject_title.length; index++) {

            renderedRows.push(
                <tr>
                    <td colSpan="9"><label htmlFor={`${subject_title[index]}`}><button disabled  >{subject_title[index].toUpperCase()}</button></label></td>
                    <td colSpan="1"><label className="min-hours" htmlFor={`${subject_hours[index]}`}><button disabled>{subject_hours[index]}</button></label></td>
                    <td colSpan="1"><label maxLength="3" htmlFor="hours-earned"><input min="0"maxLength="3" type="number" name="hours_earned" /></label></td>
                    <td colSpan="1"><label htmlFor="total-hours"><input maxLength="3" min="0" type="number" name="total_hours" /></label></td>
                </tr>
            )
        }
        return renderedRows
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    handleSubmit = e => {
        e.preventDefault()
    }

    render() {
        console.log(this.state.time_sheet_data)
        const { apprentice_type, monthly_quarterly } = this.state
        return (
            <div className="form-div">
                <form  >

                    <div className="header" ><strong>INSTRUCTIONS</strong></div>
                    <div className="ordered-list">
                        <ol>
                            <li>THIS FORM IS TO BE USED FOR REPORTING THE NUMBER OF HOURS EARNED BY EACH APPRENTICE FOR EACH MONTH</li>
                            <li>THE ORIGINAL (WHITE) COPY MUST BE SUBMITTED BY THE 10TH OF THE MONTH TO THE FOLLOWING ADDRESS BELOW</li>
                            <li>RETAIN THE SECOND PAGE (YELLOW) FOR YOUR RECORDS AND GIVE THE STUDENT THE PINK COPY.</li>
                        </ol>
                        <ul><li><strong>BOARD OF COSEMTOLOGY AND BERBER EXAMINERS, P.O. BOX 1062, JEFFERSON CITY, MO 65102</strong></li></ul>
                    </div>

                    <div className="header"><strong>APPRENTICE INFORMATION</strong></div>
                    <div className="main">
                        <tr>
                            <td style={{width:"80%"}}>
                                <label htmlFor="shop_name">{`NAME OF ${apprentice_type.toUpperCase()} SHOP`}<input type="text" /></label>
                            </td>
                            <td>

                                <label htmlFor="shop_license_number"> SHOP LICENSE NUMBER<input type="number" /></label>

                            </td>

                        </tr>
                        <tr style={{width:"100%%"}}>
                            <td >
                                <label htmlFor="shop_address">ADDRESS<input type="text" /></label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="apprentice_name">NAME OF APPRENTICE<input type="text" /></label>

                            </td>
                            </tr><tr>
                            <td><label htmlFor="apprentice_home_address">APPRENTICE HOME ADDRESS<input type="text" /></label>
                            </td>
                        </tr>
                    </div>


                    <div>
                        <table colSpan="13">

                            <thead className="small-thead">
                                <th colSpan="12">  <strong>HOURS ACCUMULATED INFORMATION</strong>
                                </th>
                            </thead>

                            <thead className="large-thead">
                                <th colSpan="9"><td colSpan="9"> SUBJECT</td></th>
                                <th colSpan="1"><td colSpan="1"> HOURS REQUIRED</td></th>
                                <th colSpan="1"><td colSpan="1"> HOURS&nbsp;EARNED THIS&nbsp;{monthly_quarterly.toUpperCase()}</td></th>
                                <th colSpan="1"> <td colSpan="1"> TOTAL&nbsp;HOURS TO&nbsp;DATE</td></th>


                            </thead>

                            <tbody>
                                {this.renderRemainingForm()}
                            </tbody>


                        </table>
                    </div>
                    <div className="bottom">

                        <label className="form-group" htmlFor="instructor_signature">APPRENTICE INSTRUCTOR<input type="text" /></label>
                        <label className="form-group" htmlFor="days_absent">DAYS ABSENT<input type="number" name="days_absent" /></label>
                        <label className="form-group" htmlFor="exam_grade">WRITTEN EXAM GRADE<input type="number" name="exam_grade"/></label>
                    
                    
                    </div>


                </form>
            </div>
        )
    }
}
export default MonthlyTimeSheet