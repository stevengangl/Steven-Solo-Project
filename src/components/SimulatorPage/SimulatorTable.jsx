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

    const todo = sim[0].todo
    const weight = sim[0].weight * 3500 / 7
    const days = weight * 7
    const pound = 3500
    const dailyLoss = 500;

    function handleClick() {
        console.log('sim', sim)
        console.log(sim, todo, weight, days, pound, dailyLoss)
    }

    return (
        <>
            {/* Render content using the data from the Redux store */}
            <h3>todo = {todo}</h3>
            <button onClick={handleClick}>click</button>
        </>
    )
};

export default SimulatorTable;
