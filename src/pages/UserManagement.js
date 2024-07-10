import { useContext, useEffect, useState } from "react";
import { ActiveContext, AuthContext } from "../App";
import "../styles/UserManagement.css";
import "../styles/Map.css";
import { Link } from "react-router-dom";
import FetchRequest from "../utils/FetchRequest";

function UserManagement() {
  const [
    username,
    setUsername,
    loggedIn,
    setLoggedIn,
    staff,
    setStaff,
    admin,
    setAdmin,
  ] = useContext(AuthContext);
  const [active, setActive] = useContext(ActiveContext);

  const [usernameUpdate, setUsernameUpdate] = useState("");
  const [passwordUpdate, setPasswordUpdate] = useState("");
  const [repeatUpdate, setRepeatUpdate] = useState("");
  const [phoneUpdate, setPhoneUpdate] = useState("");
  const [emailUpdate, setEmailUpdate] = useState("");
  const [readOnly, setReadOnly] = useState(true);
  const [editPassword, setEditPassword] = useState(false);
  const [userObject, setUserObject] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setActive("User Management");

    const data = { username };
    const url = "http://localhost:5000/nonstaffusers/getuser";

    const response = FetchRequest(url, "POST", data);

    response.then((value) => {
        console.log(value[0]);
        setUserObject(value[0]);
        setUsernameUpdate(value[0].username);
        setEmailUpdate(value[0].email);
        setPhoneUpdate(value[0].phone)
        setLoading(false);
        console.log(userObject);
      });
  }, []);

  const handleUsername = (event) => {
    setUsernameUpdate(event.target.value);
  };

  const handlePassword = (event) => {
    setPasswordUpdate(event.target.value);
  };

  const handleRepeat = (event) => {
    setRepeatUpdate(event.target.value);
  };

  const handlePhone = (event) => {
    setPhoneUpdate(event.target.value);
  };

  const handleEmail = (event) => {
    setEmailUpdate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
    {loading? <h2 className="menu-card-title">Loading...</h2> :
    <div className="container d-flex flex-column flex-lg-row">
        {/*left pane*/}
      <div className="justify-content-center col-4 left-div">
        <h2 className="menu-card-title">{username}</h2>
        <h3 className="menu-card-text">{staff ? "Staff" : "Non-Staff"}</h3>
        <h3 className="menu-card-text mt-4">Phone: {userObject.phone}</h3>
        <h3 className="menu-card-text mt-2">Email: {userObject.email}</h3>
      </div>
      <div className="mid-div bg-primary"></div>
    {/*right pane*/}
      <div className="justify-content-center col-8 right-div">
        <div className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="text-input"
                id="username"
                placeholder={usernameUpdate}
                readOnly = {readOnly}
                onChange={handleUsername}
                required
              />
              {/* <label htmlFor="username">Username</label> */}
            </div>
            <div className="mb-3 text-body">
              <input
                type="tel"
                className="text-input"
                id="phone"
                placeholder={phoneUpdate}
                readOnly = {readOnly}
                onChange={handlePhone}
              />
              {/* <label htmlFor="phone">Phone</label> */}
            </div>
            <div className="mb-3 text-body">
              <input
                type="email"
                className="text-input"
                id="email"
                placeholder={emailUpdate}
                readOnly = {readOnly}
                onChange={handleEmail}
                required
              />
              {/* <label htmlFor="email">Email</label> */}
            </div>
            <div className="mb-3 text-body" style={editPassword ? { display: "flex" } : { display: "none" }}>
              <input
                type="password"
                className="text-input"
                id="password"
                placeholder="Password"
                readOnly = {readOnly}
                onChange={handlePassword}
                required
              />
              {/* <label htmlFor="password">Password</label> */}
            </div>
            <div className="mb-3 text-body" style={editPassword ? { display: "flex" } : { display: "none" }}>
              <input
                type="password"
                className="text-input"
                id="repeatPassword"
                placeholder="Repeat Password"
                readOnly = {readOnly}
                onChange={handleRepeat}
                required
              />
              {/* <label htmlFor="repeatPassword">Repeat Password</label> */}
            </div>
            <div className="flex justify-center" style={readOnly ? { display: "none" } : { display: "flex" }}>
            <button type="cancel" className="button button-sky px-3">
                Cancel
              </button>  
              <button type="submit" className="button button-sky px-3">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>}
    </>
  );
}

export default UserManagement;
