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


    // Men: BMR = 66 + (6.23 x weight in lbs) + (12.7 x height in in) - (6.8 x age in years)

    // let weight = info[0].weight * 6.23;
    // let height = info[0].height * 12.7;
    // let age = info[0].age * 6.8;

 
    // Female: BMR = 655 + (4.35 x weight in pounds) + (4.7 x height in inches) – (4.7 x age in years)

function Calculate(){
    if (info[0].gender === 'Male') {

        let weight = info[0].weight * 6.23;
        let height = info[0].height * 12.7;
        let age = info[0].age * 6.8;

        let calories = 66 + weight + height  - age 
        console.log('male',calories)
        return calories
    }
    else {
        let weight = info[0].weight * 4.35;
        let height = info[0].height * 4.7;
        let age = info[0].age * 4.7;

        let calories = 655 + weight + height  - age 
        console.log('female',calories)

        return calories
    }
}

    

    console.log('info:', info)
    return (
        <>
          {info.length ? (
            <>
              <h1>calculator page</h1>
              <h2>Hello: {user.username}</h2>
              <button onClick={Calculate}>click</button>
              <h3>Here is the user data:</h3>
              <li>Gender: {info[0].gender}</li>
              <li>Height: {info[0].height}</li>
              <li>Weight: {info[0].weight}</li>
              <li>Age: {info[0].age}</li>



            </>
          ) : (
            <p>Loading...</p>
          )}
        </>
      );
      
}

export default CalculatorPage;