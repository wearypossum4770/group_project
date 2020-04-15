import React from 'react'
import {Provider, connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getItems} from '../redux_items/actions/itemActions'


class UserContextProvider extends React.Component {

}
    render() {
        const {item} = this.mapStateToProps
        return (
            <div>
                USERCONTEXT
            </div>
        )
    }
}


// UserContextProvider.propTypes = {
//     getItems: PropTypes.func.isRequired,
//     item: PropTypes.object.isRequired,
// }

// const mapStateToProps = state => ({item: state.item})

export default UserContextProvider


// const fetchJWT="http://192.168.86.144:8000/api&minustoken&minusauth/"
// const fetchLogin= ""
// const ApprenticeInformation = { shopName: "", shopLicenseNumber: "", shopAddress: "", apprenticeName: "", apprenticeAddress: "" }
// const timeSheetHours = {
//     HIST: {
//         required: 10,
//         previousTimeSheetHours: 2,
//         hoursEarned: 1,
//         hoursTotal: 6,
//         hourQuickCal: () => this.hoursEarned + this.previousTimeSheetHours === this.hoursTotal,
//         columnStatus: "",
//     }
// }
// const timesheetHours = {
//  
// subjectTitle: "",
//     required: "",
//     previousTimeSheetHours: "",
//     hoursEarned: "",
//     hoursTotal: "",
//     columnStatus: "",
// }
// class TimeSheetHourClass {
//     constructor({...timesheetHours}){
//     this.subjectTitle=subjectTitle,
//     this.required=required,
//     this.previousTimeSheetHours=previousTimeSheetHours,
//     this.hoursEarned=hoursEarned,
//     this.hoursTotal=hoursTotal,
//     this.columnStatus=columnStatus
// }
// hourQuickCal = () => this.hoursEarned + this.previousTimeSheetHours === this.hoursTotal
// }
