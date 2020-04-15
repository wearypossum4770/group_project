import React from 'react'

class MonthlyTimeSheet extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			appren_first_name:"",
			appren_last_name:"",
			apprentice_type:"",
			appren_sup_first_name:"",
			appren_sup_last_name:"",
			shop_name:"",
			shop_license_number:"",
			shop_address:"",
			apprentice_home_address:"",
			appren_signature:"",
			appren_sup_signature:""
			}
		}
	render(){
		
		return 
		(
		<div>
		MONTHLY TIMESHEET
		</div>
		)
	}
}
export default MonthlyTimeSheet
