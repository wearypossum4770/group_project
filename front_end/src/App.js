import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { Provider, connect } from "react-redux";
import { getItems } from "./actions/itemActions";
import store from "./store";
import "./App.css";
import Authentication from "./components/Authentication";
// import ProtectedRoutes from './components/ProtectedRoutes'
import { loadUser } from "./actions/authActions";
import AppNav from "./components/AppNav";
import LandingPage from "./pages/LandingPage";
import MyMessages from "./pages/MyMessages";
import MyDocs from "./pages/MyDocs";
import Signup from "./pages/Signup";
import LoginLogoutPage from "./pages/LoginLogoutPage";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import FAQPage from "./pages/FAQPage";
import { MonthlyTimeSheet, WeeklyTimeSheet } from "./userforms/TimeSheets";

const App = (props) => {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  //const MyContext = React.createContext();
  return (
    <div>
      <AppNav />
      <Router>
        <Switch>
          <Provider store={store}>
            <Route exact path="/auth" component={Authentication} />
            <Route exact path="/monthly" component={MonthlyTimeSheet} />
            <Route exact path="/weekly" component={WeeklyTimeSheet} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/mydocs" component={MyDocs} />
            <Route exact path="/messages" component={MyMessages} />
            <Route exact path="/logout" component={LoginLogoutPage} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/faq" component={FAQPage} />
          </Provider>
        </Switch>
      </Router>
    </div>
  );
};
App.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default App;
