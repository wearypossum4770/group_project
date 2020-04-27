import React, {useContext} from 'react'
import uuid from 'uuid'


const SignupForm = props => {
	    
    return (
    <div className="container-sm">
        <form method="post" autoComplete="false" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username" >Username:</label>
                <input className="form-control" type="text" name="username" placeholder="username" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="email_address" >Email Address:</label>
                <input className="form-control" type="email" name="email_address" onChange={handleChange} placeholder="example@example.com" />
            </div>
            <div className="form-group">
                <label htmlFor="first_name" >First Name:</label>
                <input className="form-control" type="text" name="first_name" onChange={handleChange} placeholder="Jane or Jack" />
            </div>
            <div className="form-group">
                <label htmlFor="last_name" >Last Name:</label>
                <input className="form-control" type="text" name="last_name" onChange={handleChange} placeholder="Doe" />
            </div>
            <div className="form-group">
                <label htmlFor="password" >Password:</label>
                <input className="form-control" type="password" name="password" onChange={handleChange} placeholder="Password" />
            </div>
            <div className="form-group">
                <label htmlFor="password_confirmation">Password Confirmation:</label>
                <input className="form-control" type="password" name="password_confirmation" onChange={handleChange} placeholder="Confirm Password" />
            </div>
            <div className="form-group">
                <label htmlFor="mobile_number" >Mobile(text message):</label>
                <input className="form-control" type="tel" name="mobile_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={handleChange} placeholder="800-222-2221" />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
)}
export default SignupForm
