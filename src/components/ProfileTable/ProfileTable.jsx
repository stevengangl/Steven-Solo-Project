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


function ProfileTable() {
  const user = useSelector((store) => store.user);

  const info = useSelector((store) => store.ProfilePageReducer)
  // console.log('info:', info)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_PROFILE_INFO" });
  }, []);

  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [idToEdit, setIdToEdit] = useState('')



  function addInputField(item) {
    console.log('hello', item.id, item.gender)

    setIdToEdit(item.id)
    setHeight(item.weight)//this autogenerate the edit input field of the input field youre trying to edit
    setWeight(item.height)

  }
  function updateItem(id) {
    let updatedItem = {
      height,
      weight,
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
    <>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Weight</TableCell>
              <TableCell align="right">Height</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {info ? (info.map((item) => (
              <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.username}
                </TableCell>
                <TableCell align="right">{item.gender}</TableCell>
                <TableCell align="right">{item.weight} lbs </TableCell>
                <TableCell align="right">{item.height} inches</TableCell>
                {/* <TableCell align="right">{item.user_id} inches</TableCell> */}

                <TableCell align="right">
                  <button onClick={() => {
                    console.log('item.id:', item.id);
                    dispatch({ type: 'DELETE_ITEM', payload: item.id })
                  }}>Delete Me</button>

                </TableCell>

                {idToEdit === item.id ? <div>
                  <input value={weight} onChange={(event) => setWeight(event.target.value)}></input>
                  <input value={height} onChange={(event) => setHeight(event.target.value)}></input>
                  <button onClick={() => updateItem(item.id)}>Save changes</button>
                </div> : <button onClick={() => addInputField(item)}>edit</button>}

              </TableRow>
            ))) : ('loading')
            }
          </TableBody>
        </Table>
      </TableContainer >


    </>
  );
}

export default ProfileTable