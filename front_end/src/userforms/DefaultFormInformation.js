import React, { Component } from 'react'

export default class DefaultFormInformation extends Component {
constructor(props){
    super(props)
    this.state={
        month_of:"",
        year_of:"",
        apprentice_name:"",
        instructor_name:"",
        shop_name:"",
        shop_license_number:"",
        apprentice_home_address:"",
        days_absent:"",
        exam_grade:""
    }
}

    render() {
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
                                <label htmlFor="shop_name">{`NAME OF SHOP`}<input type="text" /></label>
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
                                <th colSpan="1"><td colSpan="1"> HOURS&nbsp;EARNED THIS&nbsp;</td></th>
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
