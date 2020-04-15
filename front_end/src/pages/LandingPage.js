import React from 'react'
// import UserContextProvider from '../components/UserContext'

class LandingPage extends React.Component{
    // static contextType = UserContextProvider

    async componentDidMount() {
        const myHeader = new Headers()
        myHeader.append("Content-Type", "application/json")
        // const urlAuthToken= "http://192.168.86.144:8000/api/token/"
        const urlAuthToken = ""
        const body = JSON.stringify({username:"testuser2", password:"6vfnEGv@V6hk4Bt"})
        // const {access, refresh} = await (await fetch(urlAuthToken, { method: "POST", headers:myHeader, body:body })).json()
        const  {token} =await (await fetch(urlAuthToken, { method: "POST", headers:myHeader, body:body })).json()
        console.log(token)
        // this.setState({accessJWT:access, refreshJWT:refresh,isLoading:false})
        this.setState({accessJWT:token})
    }
    render() {

        return(
   <div>
 
   </div>
    )
}}
export default LandingPage