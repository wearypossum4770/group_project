import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {createStore} from 'redux'
import './App.css' 

import Authentication from './components/Authentication'
// import ProtectedRoutes from './components/ProtectedRoutes'
import AppNav from './components/AppNav'
import LandingPage from './pages/LandingPage'
import MyMessages from './pages/MyMessages'
import MyDocs from './pages/MyDocs'
import Signup from './pages/Signup'
import LoginLogoutPage from './pages/LoginLogoutPage'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import FAQPage from './pages/FAQPage'
import {MonthlyTimeSheet,WeeklyTimeSheet} from './userforms/TimeSheets'


class App extends React.Component {
	render() {
		//const MyContext = React.createContext();
		return (
			<div>
				<AppNav />
				<Router>
					<Switch>
						<Route exact path="/profile" 
							component={Profile}/>
						<Route exact path = "/" 
							component={LandingPage}/>
						<Route exact path ='/faq' 
							component={FAQPage}/>
					</Switch>
				</Router>
			</div>
		)
	}
}
export default App;
