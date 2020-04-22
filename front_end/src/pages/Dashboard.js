import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { CosmetologyToBarber } from '../data/LicenseeData'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const bySubject = (required, completed) => {
	const requiredHours = CosmetologyToBarber.get(required)
	const data = [requiredHours, requiredHours - completed]
	return data

}

const renderSubject = () => {
	let renderedOptions = []
	const selectOptions = Array.from(CosmetologyToBarber.keys())
	selectOptions.forEach(subjectOption => renderedOptions.push(<option value={subjectOption}>{subjectOption}</option>)
	)
	return renderedOptions
}

const renderBySubject = document.querySelector('option')

const data = {
	labels: [
		'Completed',
		'Remaining'
	],
	datasets: [{
		// data: bySubject('history', 9),
		backgroundColor: [
			'#7FFF00',
			'#36A2EB'
		],
		hoverBackgroundColor: [
			'#7FFF00',
			'#36A2EB'
		]
	}]
};

//the drop down menu will have a value to select
const licensee_type = "apprentice"


const Dashboard = props => {
	return (
		<div className="container">
			{/* <button type="button" class="btn btn-primary dropdown-toggle" 
dataToggle="dropdown">select subject</button> */}

			<input list='subject' id='subject-choice' />
			<datalist id='subject'>
				<option value="">--Please choose a subject</option>
				{renderSubject()}
			</datalist>

			<div style={{ maxWidth: "50%" }} className="card">
				<Doughnut data={data} />
			</div>
		</div>
	)
}

export default Dashboard






{/* <div className="card" style={{ width: "400px" }}>
<h1>TOTALS BY SUBJECT</h1>
<canvas id="my-education" style={{ width: "300", height: "300" }}>
<Doughnut data={data} />
</canvas>
</div>
<div className="card" style={{ width: "400px" }}>
<h1></h1>

</div>
<div className="card" style={{ width: "400px" }}>
<h1>ADDTIONAL PRODUCTS</h1>
<button>DROPBOX</button>
<button></button>
<button></button>
<button></button>
<button></button>
</div> */}