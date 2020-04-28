import React from "react";
// import UserContextProvider from '../components/UserContext'
const LoginLogoutPage = (props) => {
  const user1 = { username: "user1", password: "STrfJni873!PKc." };
  const user2 = { username: "testuser2", password: "6vfnEGv@V6hk4Bt" };
  const user = { username: "testuser3", password: "fWvWzV!JGrrH3Za" };
  const user3 = { username: "testuser3", password: "vVhfEHj@dkXkwH8" };
  const user4 = { username: "testuser4", password: "KBw@GnwvPgP99yM" };
  const user5 = { username: "testuser5", password: "UBVfn@3@jAhnknu" };

  // const {isLoggedIn,handleSubmit} = useContext(UserContextProvider)
  const isLoggedIn = false;
  const handleSubmit = (e) => e.preventDefault();
  return (
    <div className="container">
      {!isLoggedIn ? null : (
        <form handleSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">
              Username:
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="username"
              />
            </label>
            <label htmlFor="password">
              Password:
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="password"
              />
            </label>
          </div>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      )}
    </div>
  );
};
export { LoginLogoutPage as default };

/**
 * 
 * 		fetchJWT : "http://192.168.86.144:8000/api&minustoken&minusauth/",
		fetchLogin : "",
 */
