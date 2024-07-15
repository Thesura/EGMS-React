import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchRequest from "../utils/FetchRequest";
import { ActiveContext, AuthContext } from "../App";

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

  const [users, setUsers] = useState();
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    setActive("User Management");

    const url = "http://localhost:5000/nonstaffusers";

    const response = FetchRequest(url, "GET");

    response.then((value) => {
      setUsers(value.users);
      console.log(value.users[0]);
    });
  }, [updated]);

  const handleSubmit = (id, active) => {
      const data = { id, active: active?0:1};
      const url = "http://localhost:5000/nonstaffusers/updateactive";
  
      const response = FetchRequest(url, "PUT", data);
  
      response.then((value) => {
      console.log(value);
      setUpdated(!updated);
      });
    console.log(data)
  };

  return (
    <div>
      <table className="table table-bordered text-light">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr key={user.id} className="menu-card-text text-emerald-200">
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.active ? "Active" : "Inactive"}</td>
                  <td>
                    <div>
                      <button className="discreet-button discreet-button-emerald" onClick={(event) => { handleSubmit(user.id, user.active)}}>
                        {user.active ? "Deactivate" : "Activate"}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
