import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { number } from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



function ProfileTable() {
  const user = useSelector((store) => store.user);

  const info = useSelector((store) => store.ProfilePageReducer)
  // console.log('info:', info)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_PROFILE_INFO" });
  }, []);

  const [gender, setGender] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [idToEdit, setIdToEdit] = useState('')
  const [isEditing, setIsEditing] = useState(false);


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

  function addInputField(item) {
    console.log('hello', item.id, item.gender)
    setIsEditing(true);

    setIdToEdit(item.id)
    setHeight(item.height)//this autogenerate the edit input field of the input field youre trying to edit
    setWeight(item.weight)
    setGender(item.gender)
    setAge(item.age)

  }
  function updateItem(id) {
    setIsEditing(false);

    let updatedItem = {
      gender,
      height,
      weight,
      age,
      id
    }
    console.log('edit', updatedItem)

    dispatch({
      type: 'EDIT_SHELF_ITEM',
      payload: updatedItem
    })
    setIdToEdit('')
  }


  return (
    <div>
      <h1>{user.username} Profile Page</h1>
      {isEditing ? (
        <div>
          {/* ... (editing form) */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '', border: '', borderRadius: '5%' }}>
            <div>
              {/* ...(Input Fields) */}
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
                  onChange={(event) => setWeight(event.target.value)}
                  value={weight}
                  sx={{ backgroundColor: '#fff' }}

                />
                <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
              </FormControl>

              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <OutlinedInput
                  id="3"
                  type='number'
                  endAdornment={<InputAdornment position="end">Inches</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                  placeholder="165"
                  onChange={(event) => setHeight(event.target.value)}
                  value={height}
                  sx={{ backgroundColor: '#fff' }}

                />
                <FormHelperText id="outlined-weight-helper-text">Height</FormHelperText>
              </FormControl>

              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <OutlinedInput
                  id="3"
                  type='number'
                  endAdornment={<InputAdornment position="end"></InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                  placeholder="31"
                  onChange={(event) => setAge(event.target.value)}
                  value={age}
                  sx={{ backgroundColor: '#fff' }}

                />
                <FormHelperText id="outlined-weight-helper-text">Age</FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  {/* <FormControlLabel value="1" onChange={handleGender} control={<Radio />} label="Male" />
                  <FormControlLabel value="2" onChange={handleGender} control={<Radio />} label="Female" />
                  <FormControlLabel value="3" onChange={handleGender} control={<Radio />} label="Non-Binary" /> */}
                  <FormControlLabel
                    value="1"
                    onChange={handleGender}
                    control={<Radio />}
                    label="Male"
                    sx={{ color: '#fff', '& .MuiRadio-root': { color: '#fff' } }}
                  />
                  <FormControlLabel
                    value="2"
                    onChange={handleGender}
                    control={<Radio />}
                    label="Female"
                    sx={{ backgroundolor: '#fff', '& .MuiRadio-root': { color: '#fff' } }}
                  />
                  <FormControlLabel
                    value="3"
                    onChange={handleGender}
                    control={<Radio />}
                    label="Non-Binary"
                    sx={{ color: '#fff', '& .MuiRadio-root': { color: 'red' } }}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Box>
          <button onClick={() => updateItem(idToEdit)}>Save changes</button>
        </div>
      ) : (
        <div style={{ backgroundColor: '', display: 'flex', alignItems: 'center', flexDirection: 'column' }} >
          {info
            ? info.map((item) => (
              <React.Fragment key={item.id}>
                <Card sx={{ display: 'flex', alignItems: 'center', minWidth: 350, minHeight: 600, borderRadius: '5%', padding: '10px', backgroundColor: '#94cbfd' }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 24, fontWeight: 'bold', fontFamily: 'sans-serif' }} >
                      Gender: {item.gender}
                    </Typography>
                    <br />
                    <Typography sx={{ fontSize: 24, fontWeight: 'bold', fontFamily: 'sans-serif' }} >
                      Weight: {item.weight}
                    </Typography>
                    <br />
                    <Typography sx={{ fontSize: 24, fontWeight: 'bold', fontFamily: 'sans-serif' }} >
                      Height: {item.height}
                    </Typography>
                    <br />
                    <Typography sx={{ fontSize: 24, fontWeight: 'bold', fontFamily: 'sans-serif' }} >
                      Age: {item.age}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    {idToEdit === item.id ? (
                      <button onClick={() => updateItem(item.id)} >
                        Save changes
                      </button>
                    ) : (
                      <button onClick={() => addInputField(item)}>Edit</button>
                    )}
                  </CardContent>
                  {/* <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
                </Card>
              </React.Fragment>
            ))
            : ("loading")}
        </div>
      )}
    </div>
  )

}


export default ProfileTable;