import React,{useState, useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2'
import { CosmetologyToBarber} from '../data/LicenseeData'
import Select from 'react-select'



const renderSubject = () => {
	let renderedOptions = []
	const selectOptions = Array.from(CosmetologyToBarber.keys())
	selectOptions.forEach(subjectOption => renderedOptions.push(
	<option value={subjectOption}>{subjectOption}</option>))
	return renderedOptions
}


//const renderBySubject = document.querySelector('option')
/***
const data = {
	labels: ['Completed','Remaining'],
	datasets: [{
		data: bySubject(selectedOption, 9),
		backgroundColor: ['#7FFF00','#36A2EB'],
		hoverBackgroundColor: ['#7FFF00','#36A2EB']
	}]
};*/

//the drop down menu will have a value to select
//const licensee_type = "apprentice"
const handleChange = e => {
	const{name,value}= e.target
	console.log(value)
	}


const Dashboard =props=> {
		const [selectedOption, setSelectedOption] = useState()
useEffect(()=>{

const bySubject = (required, completed) => {
	const requiredHours = CosmetologyToBarber.get(required)
	const data = [requiredHours, requiredHours - completed]
	return data
}}
)
		
	return (
	
		<div className="container">
	
			<div style={{ maxWidth: "50%" }} className="card"> View Progress Per Subject title?		
	
	
	
					<select id="slct1" name="slct1" onChange={handleChange}> 
						<option value=''>Please Select</option>
						{renderSubject()}
					</select>				
						
						{true? <h1>CHART HERE</h1>:
							<h1>CHART NOT HERE</h1>}
						
			</div>
		</div>		
	
	)
}

export default Dashboard

