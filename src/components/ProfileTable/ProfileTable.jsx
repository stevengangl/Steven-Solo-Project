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


function ProfileTable() {
    const user = useSelector((store) => store.user);

    const info = useSelector((store) => store.ProfilePageReducer)
    console.log('info:', info)
    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch({ type: "FETCH_PROFILE_INFO" });
    }, []);
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
        { info ? (info.map((item) => (
            <TableRow
              key={item.user_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.username}
              </TableCell>
              <TableCell align="right">{item.gender}</TableCell>
              <TableCell align="right">{item.weight} lbs </TableCell>
              <TableCell align="right">{item.height} inches</TableCell>
            </TableRow>
        ))) : ('loading')
        }
        </TableBody>
      </Table>
    </TableContainer>

            
        </>
    );
}

export default ProfileTable