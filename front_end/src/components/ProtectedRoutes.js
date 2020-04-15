import React,{useContext} from 'react'
import { Route, Redirect } from 'react-router-dom'
// import UserContextProvider from './UserContext'
// import Authentication from './Authentication'
const ProtectedRoutes = ({ component: Component, ...rest }) => {
const isAuthenticated = false
    // const {isAuthenticated} = useContext(UserContextProvider)
  
    return (
        <Route {...rest}
            render={({ location }) =>
                isAuthenticated ?
                    (<Component/>
                    ) : (
                        <Redirect to={{
                            pathname: "/login",
                            state: { from: location }
                        }} />)
            } />
    )
}
export {ProtectedRoutes as default}