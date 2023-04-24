import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
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
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import DeleteIcon from '@mui/icons-material/Delete';


function SimulatorTable() {

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


    function Calculate() {
        let calories; // shared variable
        // console.log('sim', sim[0].todo)

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


    if (!sim || !sim.length) {
        // Render loading HTML or any other placeholder content
        return <div>Loading...</div>;
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>

                {sim.map((item, index) => (
                    <Card key={index} sx={{
                        maxWidth: 400, maxHeight: 1500, backgroundColor: 'lightblue', border: '1px solid #000',
                        padding: '25px', margin: '2px'
                    }}>
                        <CardHeader

                            title={'Goal: ' + item.todo + ' ' + item.weight + 'lbs'}
                            subheader={user.username + ' daily calories ' + Calculate()}
                        />
                        <CardContent>
                            <Typography variant="body2" color="" fontSize='18px'>
                                Approach: light
                                <br />
                                Days: {item.weight * 3500 / 250}
                                <br />
                                Calorie: {(item.todo === 'Gain' ? 'Surplus' : 'Defecit')} 250
                                <br />
                                Daily Calories needed: {(Calculate() + (item.todo === 'Gain' ? 250 : -250))}
                                <br />

                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Typography variant="body2" color="text.secondary">
                                click here for more options

                            </Typography>
                            <IconButton aria-label="" sx={{
                                position: 'relative',
                                top: '30px',
                                left: '140px',
                            }} >
                                <DeleteIcon onClick={() => {
                                    console.log('item.id:', item.id);
                                    dispatch({ type: 'DELETE_SIM_ITEM', payload: item.id })
                                }} />
                            </IconButton >
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
                                <Typography variant="body2" color="text.secondary" fontSize='18px'>
                                    Approach: moderate
                                    <br />
                                    Days: {item.weight * 3500 / 500}
                                    <br />
                                    Calorie: {(item.todo === 'Gain' ? 'Surplus' : 'Defecit')} 500
                                    <br />
                                    Daily Calories needed: {(Calculate() + (item.todo === 'Gain' ? 500 : -500))}
                                    <br />

                                </Typography>
                                <br />
                                <Typography variant="body2" color="text.secondary" fontSize='18px'>
                                    Approach: Aggressive
                                    <br />
                                    Days: {item.weight * 3500 / 1000}
                                    <br />
                                    Calorie: {(item.todo === 'Gain' ? 'Surplus' : 'Defecit')} 1000
                                    <br />
                                    Daily Calories needed: {(Calculate() + (item.todo === 'Gain' ? 1000 : -1000))}
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
