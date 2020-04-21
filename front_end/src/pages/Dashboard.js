import React, { Component } from 'react'
import Chart from 'chart.js'

const chartConfig = {
    type: 'bar',
    data: ''
}

// const myChart = new Chart(ctx, { ...chartConfig })
const licensee_type = "apprentice"
const Dashboard = props => {

    return (
        <div className="container">
            <div className="card" style={{ width: "400px" }}>
                <h1>TOTALS BY SUBJECT</h1>

                <canvas id="my-education" style={{ width: "300", height: "300" }}>

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
            </div>
        </div>
    )
}

export default Dashboard

// //             <div>
// <h1>DASHBOARD</h1>
// <span className="profile-picture">
//     <img src={require("../components/images/default.jpg")} alt="default is the seal for the State of Missouri" />
// </span>
// <span className="side-bar">
//     <button id="inbox">Inbox</button>
//     <button id="calendar">Calendar</button>
//     <button id="announcments">Announcments</button>
// </span>
// <span className="main">
//         <button><a href="/monthly"> Create Monthly Timesheet</a></button>
//         <button><a href="/weekly"> Create Weekly Timesheet</a></button>
// </span>
// </div>