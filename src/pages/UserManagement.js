import { useContext, useEffect } from 'react';
import { ActiveContext, AuthContext } from '../App';
import '../styles/UserManagement.css'

function UserManagement(){
    const [user, setUser, loggedIn, setLoggedIn, staff, setStaff, admin, setAdmin] = useContext(AuthContext);
    const [active, setActive] = useContext(ActiveContext);

    useEffect(() => {
        setActive("User Management");
    }, []);
    return(
        <div className="container d-flex flex-column flex-lg-row">
            <div className="justify-content-center col-4 left-div">
                <h2>{user}</h2>
                <h3>{staff? 'Staff': 'Non-Staff'}</h3>
            </div>
            <div className='mid-div bg-primary'></div>
            <div className="justify-content-center col-8 right-div">

            </div>
        </div>
    )
}

export default UserManagement;