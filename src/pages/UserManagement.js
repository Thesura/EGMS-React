import { useContext, useEffect, useState } from "react";
import { ActiveContext, AuthContext } from "../App";
import "../styles/UserManagement.css";
import "../styles/Map.css";
import { Link } from "react-router-dom";
import FetchRequest from "../utils/FetchRequest";
import { event } from "jquery";

function UserManagement() {
  const [
    user,
    setUser,
    loggedIn,
    setLoggedIn,
    staff,
    setStaff,
    admin,
    setAdmin,
  ] = useContext(AuthContext);
  const [active, setActive] = useContext(ActiveContext);

  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [readOnly, setReadOnly] = useState(true);
  const [editPassword, setEditPassword] = useState(false);
  const [userObject, setUserObject] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setActive("User Management");

    const data = { username: user };
    const url = "http://localhost:5000/nonstaffusers/getuser";

    const response = FetchRequest(url, "POST", data);

    response.then((value) => {
      console.log(value[0]);
      setUserObject(value[0]);
      setId(value[0].id);
      setUsername(value[0].username);
      setEmail(value[0].email);
      setPhone(value[0].phone);
      setLoading(false);
      console.log(id);
    });
  }, []);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRepeat = (event) => {
    setRepeat(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(editPassword){

    }else{
      const data = { id, username, email, phone };
    const url = "http://localhost:5000/nonstaffusers/nopwd";

    const response = FetchRequest(url, "PUT", data);

    response.then((value) => {
      console.log(value);
    });
    }
    
  };

  const handleEdit = (event) => {
    event.preventDefault();
    setReadOnly(!readOnly);
  };

  const handleCancel = (event) => {
    // event.preventDefault();
    setUsername(userObject.username);
    setEmail(userObject.email);
    setPhone(userObject.phone);
    setReadOnly(true);
    setEditPassword(false);
  };

  const handleEditPassword = (event) => {
    setEditPassword(!editPassword);
  };

  return (
    <>
      {loading ? (
        <h2 className="menu-card-title">Loading...</h2>
      ) : (
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
                    className={readOnly ? "text-input-disabled" : "text-input"}
                    id="username"
                    placeholder={username}
                    readOnly={readOnly}
                    value={username}
                    onChange={handleUsername}
                    required
                  />
                  {/* <label htmlFor="username">Username</label> */}
                </div>
                <div className="mb-3 text-body">
                  <input
                    type="tel"
                    className={readOnly ? "text-input-disabled" : "text-input"}
                    id="phone"
                    placeholder={phone}
                    readOnly={readOnly}
                    value={phone}
                    onChange={handlePhone}
                  />
                  {/* <label htmlFor="phone">Phone</label> */}
                </div>
                <div className="mb-3 text-body">
                  <input
                    type="email"
                    className={readOnly ? "text-input-disabled" : "text-input"}
                    id="email"
                    placeholder={email}
                    readOnly={readOnly}
                    value={email}
                    onChange={handleEmail}
                    required
                  />
                  {/* <label htmlFor="email">Email</label> */}
                </div>
                <div className="flex justify-center" style={
                    editPassword ? { display: "block" } : { display: "none" }
                  }>
                <div
                  className="mb-3 text-body"
                >
                  <input
                    type="password"
                    className="text-input justify-center"
                    id="password"
                    placeholder="New Password"
                    readOnly={readOnly}
                    onChange={handlePassword}
                  />
                  {/* <label htmlFor="password">Password</label> */}
                </div>
                <div
                  className="mb-3 text-body"
                >
                  <input
                    type="password"
                    className="text-input justify-center"
                    id="repeatPassword"
                    placeholder="Repeat Password"
                    readOnly={readOnly}
                    onChange={handleRepeat}
                  />
                  {/* <label htmlFor="repeatPassword">Repeat Password</label> */}
                </div>
                </div>
                
                <label className="flex justify-center">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    id="userType"
                    checked={editPassword}
                    disabled={readOnly}
                    onChange={handleEditPassword}
                  />
                  <div
                    className={readOnly? "relative w-11 h-6 bg-slate-600 peer peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-slate-400 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-full peer-checked:after:border-slate-400 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-slate-600 after:border-slate-400 after:border after:rounded-full after:h-5 after:w-5 peer-checked:after:bg-slate-900 after:transition-all after:duration-150 after:ease-linear" 
                      : "relative w-11 h-6 bg-slate-950  peer peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-sky-600 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-full peer-checked:after:border-sky-100 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-slate-950 after:border-sky-600 after:border after:rounded-full after:h-5 after:w-5 peer-checked:after:bg-sky-600 after:transition-all after:duration-150 after:ease-linear" }
                  ></div>
                  <pan className="mx-2">Update Password?</pan>
                </label>
                <div
                  className="flex justify-center"
                  style={readOnly ? { display: "none" } : { display: "flex" }}
                >
                  <button
                    type="reset"
                    className="button button-sky px-3 me-5"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="button button-sky px-4">
                    Save
                  </button>
                </div>
                <div
                  className="flex justify-center"
                  style={readOnly ? { display: "flex" } : { display: "none" }}
                >
                  <button
                    className="button button-sky px-5"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserManagement;
