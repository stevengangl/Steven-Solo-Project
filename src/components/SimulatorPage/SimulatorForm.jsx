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

function SimulatorForm() {

    const user = useSelector((store) => store.user);
    const info = useSelector((store) => store.info);
    const dispatch = useDispatch();


    const [weightValue, setWeightValue] = useState('');
    const [gainOrLose, setGainOrLose] = useState('')


    //this gets the value of the weight you want to gain or lose
    function valuetext(weightValue) {
        setWeightValue(weightValue)
        console.log('value', weightValue)
    }
    //this sets the gain or loose state to gain or lose
    const handleChange = (event) => {
        setGainOrLose(event.target.value);
        console.log('gain or lose?:', gainOrLose)
    };

    function handleClick() {
        const weight = weightValue
        const todo = gainOrLose
        console.log('weight and todo:', weight, todo)


        dispatch({ type: 'POST_WEIGHT_GOAL', payload: {weight, todo}})
    }

    return (
        <Box display="flex" padding=" 16px">
            <Box sx={{ width: 250 }}>
                <h2>simulator page</h2>
                <h2>Hi {user.username}</h2>

                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">I want to </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="gain" onChange={handleChange} control={<Radio />} label="Gain" />
                        <FormControlLabel value="lose" onChange={handleChange} control={<Radio />} label="Loose" />
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
                            max={100}
                        /><span>lbs</span>
                    </Box>
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" onClick={handleClick}>submit</Button>
                    </Stack>
                </FormControl>
            </Box>
        </Box>
    )
}

export default SimulatorForm;
