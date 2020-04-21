import React, { useState, createContext, useReducer, useEffect } from 'react'
import axios from 'axios'
// import {UserContext} from './GlobalContext'

const url = 'https://api.randomuser.me/'
 const GetData = props => {
    const [data, setData] = useState({ person: [] })
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url)
            setData(result.data.results.pop())
        }
        fetchData()
    }, [])
   
 const UserContext = createContext({user:data})

 console.log(UserContext)
    return (
<UserContext.Provider 
value={{user:data}}>
    {props.children}
</UserContext.Provider>
    )
}

export default GetData


