import React, { useState } from "react";
import data from "../data/userdata.json";

const handleSubmit = (e) => {
  e.preventDefault();
};
const handleChange = (e) => {
  const [name, value] = e.target;
  console.log([name, value]);
};
const Profile = (props) => {
  // const mobileDisclaimer = "Do you authorize the board to use this number for texting important information about your account? See your carriers"
  const [value, setValue] = useState(null);

  const [isToggled, setToggled] = useState(false);
  const [
    {
      picture: { large },
      name: { title, first, last },
      location: { street, city, state, postcode },
      cell,
      phone,
    },
  ] = data.results;
  return (
    <div>
      <div id="profile-info" className="card col-sm-6 ">
        <img className="card-img-top" src={large} alt="your photograph" />
        <span className="card-body">
          <h4 className="card-title">
            {" "}
            {`${title} ${last} ${first}`}
            <br />
          </h4>
          <small name="pronounciation">
            {" "}
            Name Pronouciation:
            <br />
            <br />
          </small>
          <address name="mailing-address">
            Mailing Address:
            <br />
            {`${street.number} ${street.name}`}
            <br />
            {`${city}, ${state}  ${postcode}`}
            <br />
            Mobile Number: {cell}
            <br />
            <label htmlFor="agree to messages">
              Accept Messages?&nbsp;&nbsp;&nbsp;
            </label>
            <input type="checkbox" />
          </address>
          <address name="business-address">
            Business Address: <br />
            {`${street.number} ${street.name}`}
            <br />
            {`${city}, ${state}  ${postcode}`}
            <br />
            Business Number: {phone}
          </address>
          <a href="/" className="btn btn-primary">
            Update Picture
          </a>
          <a href="/" className="btn btn-primary">
            REMOVE PICTURE
          </a>
        </span>
      </div>
      <div id="menu-options" className="card col-sm-6">
        <button>INBOX</button>
        <button>SETTINGS</button>
        <button>HELP AND SUPPORT</button>
        <button>ANNOUCEMENTS</button>
        <button onClick={() => setToggled(!isToggled)}>
          UPDATE INFORMATION
        </button>
        {isToggled && (
          <form onSubmit={handleSubmit} method="post">
            <input
              type="text"
              onChange={handleChange}
              name="personal-name-change"
              placeholder="Personal Name Change"
            />
            <input
              type="text"
              onChange={handleChange}
              name="update-street1"
              placeholder="update-street1"
            />
            <input
              type="text"
              onChange={handleChange}
              name="update-street2"
              placeholder="update-street2"
            />
            <input
              type="text"
              onChange={handleChange}
              name="update-city"
              placeholder="update-city"
            />
            <input
              type="text"
              onChange={handleChange}
              name="update-state"
              placeholder="update-state"
            />
            <input
              type="text"
              onChange={handleChange}
              name="update-zipcode"
              placeholder="update-zipcode"
            />
            <input type="button" onClick={handleSubmit} />
          </form>
        )}
        <button>DISPLAY PREFERENCES</button>
        <button>LOGOUT</button>
      </div>
    </div>
  );
};
const formSubmit = () => {};
export default Profile;
