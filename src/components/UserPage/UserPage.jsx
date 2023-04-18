import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import screenshotone from '../images/screenshotone.jpeg'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      

  
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="134"
          width="14"
          image={screenshotone}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Calorie Calculator
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Click here to see results
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      
      
      
      
      
      
      
      
      <br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br>
      <br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br>
      not sure if i want this stuff
      <br></br>
      <br></br>
      <h2>Welcome, {user.username}!</h2>

      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
