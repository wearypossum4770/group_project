import React,{useState} from 'react'


export const Signup = (props) =>{
	const [state, setState] = useState(false)
	return(
<div className="container">
  <h1> SIGN UP NOW </h1>
  <form className="form-group" action="POST">

<div class="form-group">
    <label htmlFor="firstName">First Name:</label>
    <input 
    type = "text" 
    className="form-control" 
    id="" 
    placeholder="John/Jane"/>
</div>
<div class="form-group">
    <label htmlFor="lastName">Last Name:</label>
    <input 
    type = "text" 
    className="form-control" 
    id="" 
    placeholder="Doe"/>
</div>        
<div class="form-group">
    <label htmlFor="username">Username:</label>
    <input 
    type = "text" 
    className="form-control" 
    id="" 
    placeholder="my-username"/>
</div>       
<div class="form-group">     
    <label htmlFor="email">Email:</label>
    <input 
    type="email" 
    className="form-control" 
    id="email" 
    placeholder="Enter email" 
    name="email"/>
</div>
<div class="form-group">
    <label htmlFor="pwd">Password:</label>
    <input 
    type="password" 
    className="form-control" 
    id="pwd" 
    placeholder="Enter password" 
    name="pswd"/>
</div>
<div class="form-group">
    <label htmlFor="confirm-password">Confrim Password:</label>
    <input 
    type = "password" 
    className="form-control" 
    id="" 
    placeholder="Confirm Password"/>
</div>
<div className="form-group">
                <label htmlFor="mobile_number" >Mobile(text message):</label>
                <input 
                className="form-control" 
                type="tel" name="mobile_number" 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                placeholder="800-222-2221" />
</div>    
    <div className="form-check">
      <label htmlFor="terms-and-conditions">
        <input 
        className="form-check-input" 
        autocomplete="off" 
        type="checkbox"  
        name="terms-and-conditions"/> Terms and Conditions</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>
	


)}
