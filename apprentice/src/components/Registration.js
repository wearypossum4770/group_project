import React from 'react'

const httpHeaders = {
	"Content-Type":"application/json"
	}
	
const registrationData = {
    "email": "example@example.com",
    "username": "testuser2",
    "password": "password"
}
const myHeaders = new Headers(httpHeaders)
const fechParams = {
	
	method:"POST",
	data:JSON.stringify(registrationData),
	headers:myHeaders
	
	}


class Registration extends React.Component {
	
	async componentDidMount() {
		const response = await fetch('http://localhost:8000/auth/users/',  fechParams)
		const result = await response.json()
		console.log(result)
		
		
		}
	render(){
		
		
		return(<div>REGISTRATION</div>)
		
		
		}
	
	
	
	}
	
	export default Registration
