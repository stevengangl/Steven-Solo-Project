import { Link } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { useDispatch } from 'react-redux';

function ProfilePage() {
    const dispatch = useDispatch();

    let [newInput, setNewInput] = useState({ feet: '', inches: '', weight: '' })

    //These handlers set the state to equal the input fields
    const handleFeet = (event) => {
        setNewInput({ ...newInput, feet: event.target.value })
    };
    const handleInches = (event) => {
        setNewInput({ ...newInput, inches: event.target.value })
    };
    const handleWeight = (event) => {
        setNewInput({ ...newInput, weight: event.target.value })
    };

    // const addNewInput = event => {
    //     event.preventDefault();
    //     console.log('feet:', newInput.feet, 'inches:', newInput.inches, 'weight:', newInput.weight);
    //     dispatch({ type: 'POST_INFO', payload: newInput});

    // };

    const addNewInput = event => {
        event.preventDefault();
        const totalInches = (newInput.feet) * 12 + parseInt(newInput.inches);
        console.log('total inches:', totalInches, 'weight:', newInput.weight);
        dispatch({ type: 'POST_INFO', payload: { totalInches, weight: newInput.weight }});
      };
      
    return (
        <>
            <h2>Enter your info</h2>

            <form onSubmit={addNewInput}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div>

                        {/* this will be the height input for feet */}
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <OutlinedInput
                                id="1"
                                endAdornment={<InputAdornment position="end">Feet</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'Height',
                                }}
                                placeholder="5"
                                onChange={handleFeet}
                                value={newInput.feet}
                            />
                            <FormHelperText id="outlined-weight-helper-text">Height</FormHelperText>
                        </FormControl>


                        {/* this will be the height input for inches */}
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <OutlinedInput
                                id="2"
                                endAdornment={<InputAdornment position="end">Inches</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'Height',
                                }}
                                placeholder="10"
                                onChange={handleInches}
                                value={newInput.inches}


                            />
                            <FormHelperText id="outlined-weight-helper-text">Height</FormHelperText>
                        </FormControl>


                        {/* this will be the height input for weight */}
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <OutlinedInput
                                id="3"
                                endAdornment={<InputAdornment position="end">Pounds</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                placeholder="165"
                                onChange={handleWeight}
                                value={newInput.weight}

                            />
                            <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
                        </FormControl>
                        <br></br>
                        {/* <Button variant="contained">Submit</Button> */}
                        <Button variant="contained" type="submit" endIcon={<SendIcon />}>Submit</Button>


                    </div>
                </Box>
            </form>
        </>
    );
}

export default ProfilePage;
