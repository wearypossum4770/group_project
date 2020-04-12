import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {LandingPage} from './pages/LandingPage'
import {Signup} from './pages/Signup'
import {Login} from './pages/Login'
import Dashboard from './pages/Dashboard'
class App extends React.Component {
  
  render(props) {
    return (
      <div>
		<Router>
				<Switch>
					<Route exact path='/account' component ={Dashboard}/>
					<Route exact path = '/signup' component={Signup}/>
					<Route exact path ={['/login','/logout']} component={LoginLogout}/>
					<Route exact path ='/' component = {LandingPage}/>
				</Switch>
			</Router>
		</div>
    )
  }
}
export default App;
