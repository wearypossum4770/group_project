import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux-items/store/store'
// import applicationStore from './redux_items/store/store'
import './App.css'
import Authentication from './components/Authentication'
// import UserContextProvider from './components/UserContext'
import ProtectedRoutes from './components/ProtectedRoutes'
import AppNav from './components/AppNav'
import LandingPage from './pages/LandingPage'
import MyMessages from './pages/MyMessages'
import MyDocs from './pages/MyDocs'
import Signup from './pages/Signup'
import LoginLogoutPage from './pages/LoginLogoutPage'
import Dashboard from './pages/Dashboard'
import BlogPosts from './pages/BlogPosts'

class App extends React.Component {
constructor(props){
	super(props)

this.handleSubmit = this.handleSubmit.bind(this)
this.handleChange = this.handleChange.bind(this)
}

handleChange = e => console.log(e.target.value)
handleSubmit = e => e.preventDefault()

	render() {
		return (
			<div>
				<AppNav />
				<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path ="/posts" component={BlogPosts} />
							<Route path="/authenticate" component = {Authentication}/>
							<ProtectedRoutes exact
								path='/account'
								component={Dashboard} />
							<ProtectedRoutes exact
								path="/messages"
								component={MyMessages} />
							<ProtectedRoutes exact
								path="/mydocs"
								component={MyDocs} />
							<Route exact
								path='/signup'
								component ={Signup}/>
							<Route exact
								path={['/login', '/logout']}
								component={LoginLogoutPage} />
							<Route exact
								path='/'
								component={LandingPage} />
					
					</Switch>
				</Router>
				</Provider>
			</div>
		)
	}
}
export default App;
