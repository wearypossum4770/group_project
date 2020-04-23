import React, { useState, createContext,  useEffect } from 'react'
import axios from 'axios'
// import {UserContext} from './GlobalContext'

const url = 'https://api.randomuser.me/'
 const GetData = props => {
    const [data, setData] = useState({ person: [] })
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url)
            setData(result.data.results.pop())
        }
        fetchData()
    }, [])
   
 const UserContext = createContext({user:data})

 console.log(UserContext)
    return (
<UserContext.Provider 
value={{user:data}}>
    {props.children}
</UserContext.Provider>
    )
}

export default GetData



const authenticationInformation= {
	isAuthenticated: false,
	accessJWT:null,
	refreshJWT: null,
	}

const browserStatus = {
	error:[],
	isLoading:false,
	}

const userInformation = {
	isLoggedIn: false,
	first_name:'',
	last_name:'',
	e_signature: null,
	}

export {authenticationInformation, browserStatus, userInformation}










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
