import React from 'react';
import SimulatorTable from './SimulatorTable';
import SimulatorForm from './SimulatorForm';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function SimulatorPage() {

   const  dispatch = useDispatch() 

    useEffect(() => {
        dispatch({ type: "FETCH_SIMULATOR_INFO" });
    }, []);

    const sim = useSelector((store) => store.SimulatorPageReducer);
// console.log('this is sim:', sim)

            {/* this is conditionally rendering to showonly the table  */}

if(!sim || !sim[0]) {
    return <SimulatorForm />
}
    return (
        <>
            {/* this is conditionally rendering to show the tables once a user submits data   */}
            <SimulatorForm />
{sim[0].inputEntered ? <SimulatorTable /> : 'loading' }
            
        </>

    )
}

export default SimulatorPage;
