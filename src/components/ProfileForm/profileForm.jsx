import { Link } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { number } from 'prop-types';



function ProfileForm(){
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    let [newInput, setNewInput] = useState({ feet: '', inches: '', weight: 0, age:0 })
    let [gender, setGender] = useState('')

    //These handlers set the state to equal the input fields
    const handleFeet = (event) => {
        setNewInput({ ...newInput, feet: event.target.value })
        console.log(newInput)
    };
    const handleInches = (event) => {
        setNewInput({ ...newInput, inches: event.target.value })
    };
    const handleWeight = (event) => {
        setNewInput({ ...newInput, weight: event.target.value })
    };

    const handleAge = (event) => {
        setNewInput({ ...newInput, age: event.target.value })
        console.log(newInput.age)

    };



    const handleGender = (event) => {
        const selectedValue = parseInt(event.target.value);
        let selectedGender;
        
        if (selectedValue === 1) {
          selectedGender = 'Male';
        } else if (selectedValue === 2) {
          selectedGender = 'Female';
        } else {
          selectedGender = 'Non-Binary';
        }
        
        setGender(selectedGender);
      }

    function handleClick(){
        alert('Success! Go home to see Results')
    }


    const addNewInput = event => {
        event.preventDefault();
        const height = (newInput.feet) * 12 + parseInt(newInput.inches);
                // console.log('total inches:', height, 'weight:', Number(newInput.weight), gender, newInput.age);



        // console.log('total inches:', height, 'weight:', Number(newInput.weight), gender, newInput.age);
        dispatch({ 
            type: 'POST_INFO',
             payload: {  height, weight: Number(newInput.weight), gender, age: Number(newInput.age)
                } }), 
        dispatch({ type: 'CHANGE_PROFILE_CREATED', payload: user.id})//put request to change profile created to true...this is for conditional rendering
        window.location.reload()

    };

    return (
        <>
            <h2>Enter your info here</h2>


        
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
                                type='number'
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
                                type='number'
                            />
                            <FormHelperText id="outlined-weight-helper-text">Height</FormHelperText>
                        </FormControl>


                        {/* this will be the height input for weight */}
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <OutlinedInput
                                id="3"
                                type='number'
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

                        
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="1" onChange={handleGender} control={<Radio />} label="Male" />
                                <FormControlLabel value="2" onChange={handleGender} control={<Radio />} label="Female" />
                                <FormControlLabel value="3" onChange={handleGender} control={<Radio />} label="Non-Binary" />

                            </RadioGroup>
                        </FormControl>

                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <OutlinedInput
                                id="4"
                                endAdornment={<InputAdornment position="end">Age</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'Age',
                                }}
                                placeholder="5"
                                onChange={handleAge}
                                value={newInput.age}
                                type='number'
                            />
                            <FormHelperText id="outlined-weight-helper-text">Age</FormHelperText>
                        </FormControl>
                        <br></br>
                        {/* <Button variant="contained">Submit</Button> */}
                        <Button variant="contained" onClick={handleClick}type="submit" endIcon={<SendIcon />}>Submit</Button>


                    </div>
                </Box>
            </form>
        </>
    );

}

export default ProfileForm;