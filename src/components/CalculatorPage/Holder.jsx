// THIS FILE IS JUST HOLDING TABLE STRUCTUES
// DONT WANT TO DELETE THEM YET
//THIS PAGE ISNT BEING RENDERED 


import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function Holder(){




    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const info = useSelector((store) => store.ProfilePageReducer);


    useEffect(() => {
        dispatch({ type: "FETCH_PROFILE_INFO" });
    }, []);


    // Men: BMR = 66 + (6.23 x weight in lbs) + (12.7 x height in in) - (6.8 x age in years)

    // let weight = info[0].weight * 6.23;
    // let height = info[0].height * 12.7;
    // let age = info[0].age * 6.8;


    // Female: BMR = 655 + (4.35 x weight in pounds) + (4.7 x height in inches) – (4.7 x age in years)

    function Calculate() {
        if (info[0].gender === 'Male') {

            let weight = info[0].weight * 6.23;
            let height = info[0].height * 12.7;
            let age = info[0].age * 6.8;

            let calories = 66 + weight + height - age
            console.log('male', calories)
            return calories
        }
        else {
            let weight = info[0].weight * 4.35;
            let height = info[0].height * 4.7;
            let age = info[0].age * 4.7;

            let calories = 655 + weight + height - age
            console.log('female', calories)

            return calories
        }
    }
    return (
        <>



            {info.length ? (
                <>



                    <Card sx={{ maxWidth: 400, maxHeight: 1500, backgroundColor: 'lightblue', border: '1px solid #000',
                        padding: '25px', margin: '2px' }}>
                        <CardHeader
                            // avatar={
                            //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            //     ?
                            //   </Avatar>
                            // }

                            title='Results'
                            subheader="Life Style: Coma"
                        />
                        {/* <CardMedia
        component="img"
        height="194"
        image="https://www.collinsdictionary.com/images/full/calculator_160993982.jpg"
        alt="Paella dish"
        style={{ width: '150px', height: '150px' }}

      /> */}
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {user.username} burns {Calculate()} calories in 24 hours
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Typography variant="body2" color="text.secondary">
                            how did we get these results?
                                 What are the different lifestyles?
                                 click below to see                            </Typography>
                            {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
                            {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>i can change this:</Typography>
                                <Typography paragraph>
                                    i can put info here
                                </Typography>
                                <Typography paragraph>
                                    and here
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>



                    <Card sx={{ maxWidth: 275, maxHeight: 1500 }}>
                        <CardHeader
                            // avatar={
                            //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            //     ?
                            //   </Avatar>
                            // }

                            title='Results'
                            subheader="Life Style: Sedetary"
                        />
                        {/* <CardMedia
        component="img"
        height="194"
        image="https://www.collinsdictionary.com/images/full/calculator_160993982.jpg"
        alt="Paella dish"
        style={{ width: '150px', height: '150px' }}

      /> */}
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {user.username} burns {Calculate() * 1.2}calories in 24 hours
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Typography variant="body2" color="text.secondary">
                                how did we get these results?
                                 What are the different lifestyles?
                                 click below to see
                            </Typography>
                            {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
                            {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>i can change this:</Typography>
                                <Typography paragraph>
                                    i can put info here
                                </Typography>
                                <Typography paragraph>
                                    and here
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                    {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Calories Burned</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {info.map((info) => (
            <TableRow
              key={info.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.username}
              </TableCell>
              
              <TableCell align="right">{Calculate()}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}


                    <h1>calculator page</h1>
                    <h2>Hello: {user.username}</h2>
                    <button onClick={Calculate}>click</button>
                    <h3>Here is the user data:</h3>
                    <li>Gender: {info[0].gender}</li>
                    <li>Height: {info[0].height}</li>
                    <li>Weight: {info[0].weight}</li>
                    <li>Age: {info[0].age}</li>

                    <h3>Calories burned:{Calculate()}</h3>




                </>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );

}

export default Holder;