import { useContext, useEffect, useState } from "react";
import { FetchRequest } from "../utils/FetchRequest";
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

    try {
      const response = await FetchRequest(url, "GET");
      console.log(response.users[0]);
      setUsers(response.users);
    } catch (error) {
      if (error.status === 404) {
        console.log('Resource not found')
      } else if (error.status >= 500) {
        console.log('Server error, try again later')
      } else {
        console.log('Request failed:', error.message)
      }
    }
  }, [updated]);

  const handleSubmit = (id, active) => {
    const data = { id, active: active ? 0 : 1 };
    const url = "http://localhost:5000/nonstaffusers/updateactive";
    console.log(data)
    try {
        const response = await FetchRequest(url, "PUT", data);
        console.log(response);
        setUpdated(!updated);
      } catch (error) {
        if (error.status === 404) {
          console.log('Resource not found')
        } else if (error.status >= 500) {
          console.log('Server error, try again later')
        } else {
          console.log('Request failed:', error.message)
        }
      }
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
                      <button className="discreet-button discreet-button-emerald" onClick={(event) => { handleSubmit(user.id, user.active) }}>
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
