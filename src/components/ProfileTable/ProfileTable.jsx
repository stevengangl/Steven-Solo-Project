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
      <h1>profile</h1>
      {isEditing ? (
        <div>
          {/* ... (editing form) */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
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
                  <FormControlLabel value="1" onChange={handleGender} control={<Radio />} label="Male" />
                  <FormControlLabel value="2" onChange={handleGender} control={<Radio />} label="Female" />
                  <FormControlLabel value="3" onChange={handleGender} control={<Radio />} label="Non-Binary" />
                </RadioGroup>
              </FormControl>
            </div>
          </Box>
          <button onClick={() => updateItem(idToEdit)}>Save changes</button>
        </div>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 150 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">Weight</TableCell>
                <TableCell align="right">Height</TableCell>
                <TableCell align="right">Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {info
                ? info.map((item) => (
                    <TableRow
                      key={item.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {user.username}
                        </TableCell>
                        <TableCell align="right">{item.gender}</TableCell>
                        <TableCell align="right">{item.weight} lbs </TableCell>
                        <TableCell align="right">{item.height} inches</TableCell>
                        <TableCell align="right">{item.age} </TableCell>
    
                        <TableCell>
                          {idToEdit === item.id ? (
                            <button onClick={() => updateItem(item.id)}>
                              Save changes
                            </button>
                          ) : (
                            <button onClick={() => addInputField(item)}>Edit</button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  : "loading"}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    );
  
}

export default ProfileTable