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
console.log('this is sim:', sim)
if(!sim || !sim[0]) {
    return <div>Laoding...</div>
}
    return (
        <>


{/* if (!sim || !sim[0]) {
        // Render loading HTML or any other placeholder content
        return <div>Loading...</div>;
    } */}



            <SimulatorForm />
{sim[0].inputEntered ? <SimulatorTable /> : 'loading' }
            
        </>

    )
}

export default SimulatorPage;
