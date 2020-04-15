import React,{ useContext } from 'react'
// import UserContextProvider from './UserContext'




const Authentication = (props) => {
  // let {providerState:{isAuthenticated, accessJWT, updateContextValue}} = useContext(UserContextProvider)
  // const urlAuthToken= "http://192.168.86.144:8000/api-token-auth/"
  const urlAuthToken= "https://jsonplaceholder.typicode.com/users"
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  const myHeaderBody =  JSON.stringify({username:"testuser2", password:"6vfnEGv@V6hk4Bt"})
  
  const fetchData = async () => {
    // const resp = await fetch(urlAuthToken, {method:"POST", headers:myHeaders, body:myHeaderBody})
    const resp = await fetch(urlAuthToken)
    const data = await resp.json()
    console.log(data)
  }
fetchData()
    
		return(
        <div>AUTHENTICATION</div>
      )
	
}
export default Authentication
