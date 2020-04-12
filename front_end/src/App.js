import React from 'react';
/**import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import MonthlyTimeSheet from './components/UserForms/MonthlyTimeSheet'
*/
import UserAuthentication from './components/UserAuthentication'
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <UserAuthentication/>
      </div>
    )
  }
}
export default App;