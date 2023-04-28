import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


function SimulatorForm() {




    const user = useSelector((store) => store.user);
    const info = useSelector((store) => store.info);
    const sim = useSelector((store) => store.SimulatorPageReducer)
    const dispatch = useDispatch();


    const [weightValue, setWeightValue] = useState('');
    const [gainOrLose, setGainOrLose] = useState('');
    //state to store type of activity level, need to send in post
    const [activityLevel, setActivityLevel] = useState('');


    //this gets the value of the weight you want to gain or lose
    function valuetext(weightValue) {
        setWeightValue(weightValue)
        // console.log('value', weightValue)
    }
    
    //this sets the gain or loose state to gain or lose
    const handleChange = (event) => {
        setGainOrLose(event.target.value);
        // console.log('gain or lose?:', gainOrLose)
    };

    const handleActivityLevel = (event) => {
        setActivityLevel(event.target.value);
        console.log('handler:', activityLevel)
    };
    function handleClick() {
        const weight = weightValue
        const todo = gainOrLose
        const level = activityLevel
        console.log('level:', level)


        dispatch({ type: 'POST_WEIGHT_GOAL', payload: { weight, todo, level } })

        // dispatch({ type: 'CHANGE_SIMULATOR', payload: sim.id})


    };

    return (
        <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            border: '2px solid black',
            padding: '16px',
            paddingLeft: '56px',
            maxWidth: '400px',
            backgroundColor: '#98e0f2',

            borderRadius: '5%'
          }}>        <Box display="flex" padding=" 16px" justifyContent='center'>
            <Box sx={{ width: 250 }}>
                {/* <h2>simulator page</h2>
                <h2>Hi {user.username}</h2> */}

                <FormControl >
                    <FormLabel id="demo-radio-buttons-group-label" sx={{ fontSize: '38px'  }}>I want to </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        
                        
                    >
                        <FormControlLabel value="Gain" onChange={handleChange} control={<Radio />} label="Gain"  />
                        <FormControlLabel value="Lose" onChange={handleChange} control={<Radio />} label="Loose" />
                    </RadioGroup>

                    <Box sx={{ mt: 2 }}>
                        <Slider
                            aria-label="Pounds"
                            defaultValue={0}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={0}
                            max={50}
                        /><span>lbs</span>
                    </Box>
                    <br />

                    <FormControl fullWidth style={{ backgroundColor: 'white' }}>
                        <InputLabel id="demo-simple-select-label">Activity Level</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={activityLevel}
                            label="Activity Level"
                            onChange={handleActivityLevel}
                            style={{ width: '200px' }}

                        >
                            <MenuItem value={1}>sleeping</MenuItem>
                            <MenuItem value={1.2}>sedetary</MenuItem>
                            <MenuItem value={1.375}>light</MenuItem>
                            <MenuItem value={1.55}>moderate</MenuItem>
                            <MenuItem value={1.725}>active</MenuItem>

                        </Select>
                    </FormControl>
                    <br />

                  
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" onClick={handleClick}>submit</Button>
                    </Stack>
                </FormControl>
            </Box>
        </Box>
        </div>
    )
}

export default SimulatorForm;
