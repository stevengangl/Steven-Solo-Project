import React from 'react';
import ProfileForm from '../ProfileForm/profileForm';
import ProfileTable from '../ProfileTable/ProfileTable';
import { useDispatch, useSelector } from "react-redux";

function ProfilePage() {

    const user = useSelector((store) => store.user);


    return (
        <>
            
{/*⭐️ need to figure out why conditionaly rendering doesnt shopw the form if i delete it⭐️ */}
        {user.profile_created ? <ProfileTable /> : <ProfileForm />}

            
        </>
    )
}

export default ProfilePage;
