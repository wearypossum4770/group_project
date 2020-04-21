import React from 'react'
// import UserContextProvider from '../components/UserContext'
const LoginLogoutPage = (props) => {
// const {isLoggedIn,handleSubmit} = useContext(UserContextProvider)
const isLoggedIn = false
const handleSubmit= e =>e.preventDefault()
    return (
        <div className="container">
            {!isLoggedIn ? null: (
            <form handleSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:
                                <input
                            className="form-control"
                            type="text"
                            name="username"
                            placeholder="username"
                        /></label>
                    <label htmlFor="password">Password:
                                <input
                            className="form-control"
                            type="password"
                            name="password"
                            placeholder="password"
                        /></label>
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>)
            }
        </div>
)}
export{LoginLogoutPage as default}


/**
 * 
 * 		fetchJWT : "http://192.168.86.144:8000/api&minustoken&minusauth/",
		fetchLogin : "",
 */