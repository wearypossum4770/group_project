import React,{useContext} from 'react'
// import UserContextProvider from './UserContext'
// const {accessJWT} = useContext(UserContextProvider)

const UserLogin = async (accessJWT) => {
    const urlLogin= "http://192.168.86.144:8000/api/blog/"
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    // myHeaders.append('Authorization', `Bearer ${token}`)
    myHeaders.append('Authorization:', `JWT ${accessJWT}`)
    const myInit = {
        method:"POST",
        header:myHeaders
    }
    const {status} = await (await fetch(urlLogin, myInit )).json()
}
export default UserLogin
