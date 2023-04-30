import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useHistory } from "react-router-dom";


function SimulatorTable() {


    const history = useHistory();
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

    useEffect(() => {
        dispatch({ type: "FETCH_SIMULATOR_INFO" }),
            dispatch({ type: "FETCH_PROFILE_INFO" });
    }, []);
    const user = useSelector((store) => store.user);
    const sim = useSelector((store) => store.SimulatorPageReducer);
    const info = useSelector((store) => store.ProfilePageReducer);


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    function Calculate() {
        let calories; // shared variable
        // console.log('sim', )

        if (info.length) {
            if (info[0].gender === 'Male') {
                let weight = info[0].weight * 6.23;
                let height = info[0].height * 12.7;
                let age = info[0].age * 6.8;

                calories = 66 + weight + height - age;
                return Math.round(calories);
            } else {
                let weight = info[0].weight * 4.35;
                let height = info[0].height * 4.7;
                let age = info[0].age * 4.7;


                calories = 655 + weight + height - age;
                return Math.round(calories);

            }
        }




        // this gets the data and retunes with a 1 second delay which fixes timing issue
        setTimeout(() => {
            console.log('Calories:', Math.round(calories));
            return Math.round(calories);
        }, 1000);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    if (!sim || !sim.length) {
        // Render loading HTML or any other placeholder content
        return <div>Loading...</div>;
    }

    return (
        <>
            {/* <h1>want to change color based on activity level chosen</h1>
            <h1>color also changes from lose/gain</h1>
            <h1>add confirmation on new post/ alert on delete</h1> */}



            <div className='SimulatorCard' style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>

                {sim.map((item, index) => (
                    <Card key={index} sx={{
                        maxWidth: 400, maxHeight: 1500, border: '2px solid #000', borderRadius: '5%',
                        padding: '25px', margin: '10px', backgroundColor: item.todo === 'Gain' ? '#86e0a1' : '#f0a7df'
                    }}>
                        {/* <CardHeader

                            title={'Goal: ' + item.todo + ' ' + item.weight + 'lbs'}
                            subheader={ 'Daily Calories needed: ' + Math.round((Calculate() * item.active + (item.todo === 'Gain' ? 500 : -500)))
                        }
                        /> */}
                        <CardHeader
                            title={
                                <div style={{ color: 'black', fontStyle: 'bold', fontSize: '28px' }}>
                                    {'Goal: ' + item.todo + ' ' + item.weight + 'lbs'}
                                </div>}

                            subheader={
                                <div style={{ color: 'black', fontStyle: 'bold', fontSize: '24px' }}>

                                    {/* Days To Accomplish: {item.weight * 3500 / 500} */}

                                    Activity Level: {
                                        (() => {
                                            switch (item.active) {
                                                case 1:
                                                    return 'Sleeping';
                                                case 1.2:
                                                    return 'Sedetary';
                                                case 1.375:
                                                    return 'Light';
                                                case 1.55:
                                                    return 'Moderate';
                                                case 1.725:
                                                    return 'Active';
                                                default:
                                                    return 'Unknown';
                                            }
                                        })()
                                    }
                                </div>
                            }
                        />
                        <br />
                        <CardContent>
                            <Typography variant="body2" color="#" fontStyle='bold'>


                                <div style={{ color: 'black', fontStyle: 'bold', fontSize: '18px' }}>
                                    Approach: Normal
                                    <br />
                                    Days To Accomplish: {item.weight * 3500 / 500}

                                    {/* {' Daily Calorie Burned: ' + Math.round(Calculate() * item.active)} */}
                                    <br />       {' Daily Calorie Burned: ' + Math.round(Calculate() * item.active)}

                                    <br />
                                    Daily Calorie {(item.todo === 'Gain' ? 'Surplus' : 'Defecit')}: 500
                                    <br />
                                    {'Daily Calories Needed: ' +
                                        Math.round(
                                            Calculate() * item.active + (item.todo === 'Gain' ? 500 : -500)
                                        )}
                                </div>

                                {/* active level: {item.active}
                                <br /> */}

                            </Typography>
                        </CardContent>

                        <CardActions disableSpacing>

                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>

                            <IconButton aria-label="" sx={{

                                position: 'relative',
                                bottom: '0px',
                                left: '0px',
                            }}  >
                                <DeleteIcon fontSize="large" color="" onClick={handleClickOpen} />
                            </IconButton >

                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Are you sure you want to delete
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Disagree</Button>
                                    <Button
                                        onClick={() => {
                                            dispatch({ type: 'DELETE_SIM_ITEM', payload: item.id });
                                            handleClose(); // Add this line to close the dialog
                                            history.push('/simulator');
                                        }}
                                        autoFocus
                                    >
                                        Agree
                                    </Button>

                                </DialogActions>
                            </Dialog>
                            {/* <IconButton aria-label="" sx={{

                                position: 'relative',
                                bottom: '0px',
                                left: '0px',
                            }}  >
                                <DeleteIcon fontSize="large" color="black" onClick={handleClickOpen} />
                            </IconButton > */}
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography variant="body2" color="" fontSize='20px' fontStyle='bold'>
                                    {/* {user.username + ' burns ' + Math.round(Calculate() * item.active) + ' everyday'} */}
                                    <br />
                                    Approach: Easy
                                    <br />
                                    Days To Accomplish: {item.weight * 3500 / 250}
                                    <br />
                                    {' Daily Calorie Burned: ' + Math.round(Calculate() * item.active)}
                                    <br />
                                    Daily Calorie: {(item.todo === 'Gain' ? 'Surplus' : 'Defecit')} 250

                                    {/* Calorie: {(item.todo === 'Gain' ? 'Surplus' : 'Defecit')} 250 */}
                                    <br />
                                    {/* Daily Calories needed: {Math.round((Calculate() * item.active + (item.todo === 'Gain' ? 250 : -250)))} */}
                                    Daily Calories Needed: {Math.round((Calculate() * item.active + (item.todo === 'Gain' ? 250 : -250)))}


                                    <br />

                                </Typography>
                                <br />
                                <Typography variant="body2" color="" fontSize='20px' fontStyle='bold'>
                                    {/* {user.username + ' burns ' + Math.round(Calculate() * item.active) + ' everyday'} */}
                                    <br />
                                    Approach: Aggressive
                                    <br />
                                    Days To Accomplish: {item.weight * 3500 / 1000}
                                    <br />
                                    {' Daily Calorie Burned: ' + Math.round(Calculate() * item.active)}
                                    <br />
                                    Daily Calorie: {(item.todo === 'Gain' ? 'Surplus' : 'Defecit')} 1000

                                    {/* Calorie: {(item.todo === 'Gain' ? 'Surplus' : 'Defecit')} 250 */}
                                    <br />
                                    {/* Daily Calories needed: {Math.round((Calculate() * item.active + (item.todo === 'Gain' ? 250 : -250)))} */}
                                    Daily Calories Needed: {Math.round((Calculate() * item.active + (item.todo === 'Gain' ? 1000 : -1000)))}


                                    <br />

                                </Typography>


                            </CardContent>
                        </Collapse>
                    </Card>

                ))}
            </div>

        </>

    )
};

export default SimulatorTable;
