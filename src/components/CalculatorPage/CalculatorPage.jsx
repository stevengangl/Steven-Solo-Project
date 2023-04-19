import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { useEffect } from "react";



function CalculatorPage() {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const info = useSelector((store) => store.ProfilePageReducer);


    useEffect(() => {
        dispatch({ type: "FETCH_PROFILE_INFO" });
    }, []);


// function Calculator(){
//     let restingMeta = 
// }

    

    console.log('info:', info)
    return (
        <>
            <h1>calculator page</h1>
            <h2>Hello: {user.username}</h2>
            <h3>Here is the user data:</h3>
            <li>Gender: {info[0].gender}</li>
            <li>Height: {info[0].height}</li>
            <li>Weight: {info[0].weight}</li>
              
        </>
    )
}

export default CalculatorPage;