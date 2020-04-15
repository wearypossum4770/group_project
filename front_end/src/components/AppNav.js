import React from 'react'
const isLoggedIn = true
const AppNav = () => {
    const login_out = isLoggedIn ? 'Logout' : 'Login'
    return (
        <div className="topnav">
            <button><a href={`/`}> Home </a></button>
            <button><a href={`/mydocs`}> My Documents </a></button>
            <button><a href={`/account`}> My Profile </a></button>
            <button><a href={`/messages`}> My Messages </a></button>
            <button><a href={`/${"logout" || login_out}`}> {`${login_out}`} </a></button>
        </div>
)}
export{AppNav as default}