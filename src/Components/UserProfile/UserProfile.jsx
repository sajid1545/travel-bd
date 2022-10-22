import React, { useContext } from 'react';
import { AuthContext } from './../../Context/UserContext';

const UserProfile = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
            <h1>User Profile</h1>
        </div>
    );
};

export default UserProfile;