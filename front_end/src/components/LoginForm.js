import React from 'react'
import '../App.css'
export default class LoginForm extends React.Component {
constructor(props){
	super(props)
	this.state={username:"", password:""}
	}

handleSubmit = async (e) =>{
	e.preventDefault()
	const {username, password} = this.state
	const{accessJWT, refreshJWT} = this.props
	const myPayload = {"username":username,"password":password}
	const myInit = {
		method:"POST",
		body:JSON.stringify(myPayload),
		}
	let url ="http://"
	const resp = await fetch(url, myInit)
	const data = resp.json()
	const {access, refresh} = data
	this.setState({accessJWT:access, refreshJWT:refreshJWT})
}
	
handleChange = e=> {
		const {name, value} = e.target
		this.setState({[name]:value})
		
}	
    render() {
		
		const {username,password} = this.state
        return (
            <div>
             <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        onChange={this.handleChange}
                        placeholder="username"
                    />
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form> 
            </div>
        )
    }
}
