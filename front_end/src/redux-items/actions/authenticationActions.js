import axios from 'axios'
import {FETCH_JSONWEBTOKEN, USER_AUTHENTICATED} from './types'


const getToken = () => dispatch => {
	axios.post(
	{
		url:webTokenURL,
		method: 'POST',
		headers:{'Content-Type': 'application/json'},
		body:JSON.stringify({"username":username,"password":password}),
	})
	.then(response => 
	{
		dispatch ({type:FETCH_JSONWEBTOKEN, payload:response.data})
	})
	.catch(error=> console.log(error))
}
	
const authenticateUser = () => dispatch => {
	axios.post(
	{
		url:authURL
		method: 'POST',
		headers: 
		{
			'Content-Type':'application/json',
			'Authorization':`Bearer ${authToken}`
		}
	})
	.then(response =>
	{
		dispatch({type:USER_AUTHENTICATED, payload:response.data})
	})
	.catch(error => console.log(error.response.data))
}
	
	
	
	
	
	export {getToken, authenticateUser}
