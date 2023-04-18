import React from 'react';
import ProfileForm from '../ProfileForm/profileForm';
import ProfileTable from '../ProfileTable/ProfileTable';
import { useDispatch, useSelector } from "react-redux";

function ProfilePage() {

    const user = useSelector((store) => store.user);


    return (
        <>
            

        {user.profile_created ? <ProfileTable /> : <ProfileForm />}

            
        </>
    )
}

export default ProfilePage;
