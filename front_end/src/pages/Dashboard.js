import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>DASHBOARD</h1>
                <span className="profile-picture">
                    <img src={require("../components/images/default.jpg")} alt="default is the seal for the State of Missouri" />
                </span>
                <span className="side-bar">
                    <button id="inbox">Inbox</button>
                    <button id="calendar">Calendar</button>
                    <button id="announcments">Announcments</button>
                </span>
                <span className="main">
                        <button><a href="/monthly"> Create Monthly Timesheet</a></button>
                        <button><a href="/weekly"> Create Weekly Timesheet</a></button>
                </span>
            </div>
        )
    }
}
