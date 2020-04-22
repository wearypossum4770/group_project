import React from 'react'

const AppNav = () => {

    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href={`/`}>Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href={`/Home`}>Home</a></li>
            <li className="nav-item"><a className="nav-link" href={`/dashboard`}>Dashboard</a></li>
            <li className="nav-item"><a className="nav-link" href={`/profile`}>My Profile</a></li>
            <li className="nav-item"><a className="nav-link" href={`/mydocs`}>My Documents</a></li>
            <li className="nav-item"><a className="nav-link" href={`/weeekly`}>Weekly TimeSheet</a></li>
            <li className="nav-item"><a className="nav-link" href={`/monthly`}>Monthly TimeSheet</a></li>
            <li className="nav-item"><a className="nav-link" href={`/messages`}>My Messages</a></li>
            <li className="nav-item"><a className="nav-link" href={`/logout`}>Logout</a></li>
          </ul>
        </div>
      </nav>
)}
export default AppNav