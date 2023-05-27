import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';

function SimulatorTable() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "FETCH_SIMULATOR_INFO" });
    }, []);

    const sim = useSelector((store) => store.SimulatorPageReducer);

    if (!sim || !sim[0]) {
        // Render loading HTML or any other placeholder content
        return <div>Loading...</div>;
    }

    const goal = sim[0].todo
    const calorieTotal = sim[0].weight * 3500
    const newWeight = sim[0].weight + 'lbs'
    const weight = newWeight


    const timeToAccomplish = calorieTotal / 500
    const days = timeToAccomplish + ' days'
    // const days = calorieTotal * 7
    const pound = 3500
    const dailyLoss = 500;

    function handleClick() {
        console.log('sim', sim)
        console.log(sim, goal, calorieTotal, weight, pound, dailyLoss)
    }

    function discipline(){
        if(goal === 'gain'){
            return 'defecit'
        }
        else{
            return 'surplus'
        }
    }

    return (
        <>
            {/* Render content using the data from the Redux store */}
            <h3>what the goal is: {goal} {weight}</h3>
            <h3>Its going to take {days} at {dailyLoss} calorie {discipline()} </h3>

            <h3>Total calories needed to get to goal: {calorieTotal}</h3>
            <h3>lbs to {goal}: {weight}</h3>
            <h3>days to accomplish: {timeToAccomplish}</h3>
            <h3>what the goal is: {goal}</h3>

            <button onClick={handleClick}>click</button>
        </>
    )
};
//check this comp
export default SimulatorTable;
