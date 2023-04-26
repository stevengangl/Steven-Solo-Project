import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useHistory } from 'react-router-dom';
import cap from '../../components/images/capTransform Small.jpeg'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

function handleClick(){
  history.push('/calculator')
}

function handleProfile(){
  history.push('/profile')
}
function handleSimulator(){
  history.push('/simulator')
}

  return (

    <div className="container">
<Card sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth:350, maxHeight: 350, borderRadius: '5%', backgroundColor: 'green'}}>
        <CardActionArea onClick={handleProfile}>
          <div style={{ backgroundColor: 'lightgreen', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              image='https://cdn.dribbble.com/users/3293/screenshots/2591498/screen_shot_2016-03-15_at_12.51.52_pm.png'
              alt=""
              style={{ width: '225px', height: '225px', borderRadius: '95%' }}
            />
            <br />
                 <Typography gutterBottom variant="h5" component="div" fontStyle=''>
              <b>Edit Profile!</b>
            </Typography>
          </div>

        </CardActionArea>
      </Card>
<br />


      <Card sx={{ maxWidth:350, maxHeight: 350, borderRadius: '5%', backgroundColor: 'green'}}>
        <CardActionArea onClick={handleClick}>
          <div style={{ backgroundColor: 'lightblue', padding: '10px' , display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <CardMedia
              component="img"
              image='https://www.collinsdictionary.com/images/full/calculator_160993982.jpg'
              alt=""
              style={{ width: '250px', height: '250px', borderRadius: '95%' }}
            /> <br />
                 <Typography gutterBottom variant="h5" component="div">
             <b>Calorie Calculator!</b> 
            </Typography>
          </div>
  

        </CardActionArea>
      </Card>

      <br></br>

      <Card sx={{ maxWidth:350, maxHeight: 350, borderRadius: '5%', backgroundColor: 'green', }}>
        <CardActionArea onClick={handleSimulator}>
          <div style={{ backgroundColor: 'pink', padding: '10px' , display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <CardMedia
              component="img"
              image={cap}
              alt=""
              style={{ width: '250px', height: '250px', borderRadius: '95%' }}
            /> <br />
                 <Typography gutterBottom variant="h5" component="div">
              <b>Weight Simulator!</b>
            </Typography>
          </div>
  

        </CardActionArea>
      </Card>

      {/* <h2>Welcome, {user.username}!</h2>

      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
