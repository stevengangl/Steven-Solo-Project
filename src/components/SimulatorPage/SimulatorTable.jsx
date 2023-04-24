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
        console.log('sim', sim[0].todo)

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

    function whatToDo() {
        let objective = 'hi'; // default value
        
        sim.map(item => {
            if (item.todo == 'Gain') {
                objective = 'Surplus'; // update the value
                console.log('objective:', objective);
            } else {
                objective = 'deficit'; // update the value for the else block
                console.log('ELSE objective:', objective);
            }
            console.log('ELSE:', objective);
        });
        
        return objective;
    }
    







    if (!sim || !sim.length) {
        // Render loading HTML or any other placeholder content
        return <div>Loading...</div>;
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

                {sim.map((item, index) => (
                    <Card key={index} sx={{
                        maxWidth: 500, maxHeight: 1500,
                    }}>
                        <CardHeader

                            title={'Goal: ' + item.todo + ' ' + item.weight + 'lbs'}
                            subheader={'daily calories ' + Calculate()}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">

                                Average weight {item.todo} (based on 500 {(item.todo === 'Gain' ? 'Surplus' : 'Defecit')} )
                                <br />

                                This is based on a 500 calorie per day ?
                                <br />
                                Days to goal with  500 calorie ?: {item.weight * 3500 / 500}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Typography variant="body2" color="text.secondary">
                                Calorie to target per day...
                                NEED {(Calculate() + (item.todo === 'Gain' ? 500 : -500))}

                            </Typography>
                            <IconButton aria-label="">
                                <DeleteIcon onClick={() => {
                                    console.log('item.id:', item.id);
                                    dispatch({ type: 'DELETE_SIM_ITEM', payload: item.id })
                                }} />
                            </IconButton>
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

                            </CardContent>
                        </Collapse>
                    </Card>

                ))}
            </div>

        </>

    )
};

export default SimulatorTable;
