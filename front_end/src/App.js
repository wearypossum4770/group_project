import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Authentication from "./components/Authentication";
// import ProtectedRoutes from './components/ProtectedRoutes'
import AppNav from "./components/AppNav";
import LandingPage from "./pages/LandingPage";
import MyMessages from "./pages/MyMessages";
import MyDocs from "./pages/MyDocs";
import Signup from "./pages/Signup";
import LoginLogoutPage from "./pages/LoginLogoutPage";
import Dashboard from "./pages/Dashboard";
import BlogPosts from "./pages/BlogPosts";
import Profile from "./pages/Profile";
import FAQPage from "./pages/FAQPage";
import { MonthlyTimeSheet, WeeklyTimeSheet } from "./userforms/TimeSheets";
import AdminPage from "./pages/AdminPage";
import ApprovalDashboard from "./pages/ApprovalDashboard";
class App extends React.Component {
  render() {
    //const MyContext = React.createContext();
    return (
      <div>
        <AppNav />
        <Router>
          <Switch>
            {/* <MyContext.Provider value ={UserContext}> */}
            <Route exact path="/approval" component={ApprovalDashboard} />
            <Route exact path="/posts" component={BlogPosts} />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={LandingPage} />
            <Route path="/authenticate" component={Authentication} />
            {/* <ProtectedRoutes exact
									path='/account'
									component={Dashboard} />
								<ProtectedRoutes exact
									path="/messages"
									component={MyMessages} />
								<ProtectedRoutes exact
									path="/mydocs"
									component={MyDocs} /> */}
            <Route path="/faq" component={FAQPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/messages" component={MyMessages} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/mydocs" component={MyDocs} />
            <Route exact path="/monthly" component={MonthlyTimeSheet} />
            <Route exact path="/weekly" component={WeeklyTimeSheet} />
            <Route exact path="/signup" component={Signup} />
            <Route
              exact
              path={["/login", "/logout"]}
              component={LoginLogoutPage}
            />
            {/* </MyContext.Provider> */}
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
