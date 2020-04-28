import React, { useEffect } from "react";
// import UserContextProvider from '../components/UserContext'
const Signup = () => {
  // const {handleSubmit} = useContext(UserContextProvider)
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <h1> SIGN UP NOW </h1>
      <form className="form-group" onSubmit={handleSubmit} action="POST">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            className="form-control"
            name="first-name"
            placeholder="John/Jane"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            name="last-name"
            placeholder="Doe"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="my-username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="pswd"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confrim Password:</label>
          <input
            type="password"
            className="form-control"
            name="pwd-confirm"
            placeholder="Confirm Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile-number">Mobile(text message):</label>
          <input
            className="form-control"
            type="tel"
            name="mobile-number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="800-222-2221"
          />
        </div>
        <div className="form-check">
          <label htmlFor="terms-and-conditions">
            <input
              className="form-check-input"
              autoComplete="off"
              type="checkbox"
              name="terms-and-conditions"
            />{" "}
            Terms and Conditions
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Signup;
