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
        if (info[0].gender === 'Male') {

            let weight = info[0].weight * 6.23;
            let height = info[0].height * 12.7;
            let age = info[0].age * 6.8;

            let calories = 66 + weight + height - age
            // console.log('male', calories)
            return Math.round(calories)
        }
        else {
            let weight = info[0].weight * 4.35;
            let height = info[0].height * 4.7;
            let age = info[0].age * 4.7;

            let calories = 655 + weight + height - age
            // console.log('female', calories)

            return Math.round(calories)
        }
    }

    // const goal = sim[0].todo
    // const calorieTotal = sim[0].weight * 3500
    // const newWeight = sim[0].weight + 'lbs'
    // const weight = newWeight


    // const timeToAccomplish = calorieTotal / 500
    // const days = timeToAccomplish + ' days'
    // const days = calorieTotal * 7
    // const pound = 3500
    // const dailyLoss = 500;


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
                            title={item.todo +' '+ item.weight + 'lbs'}
                            subheader={item.weight + 'lbs'}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Days: {item.weight * 3500 / 500} 
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Typography variant="body2" color="text.secondary">
                                Calorie to target per day...
                                NEED{Calculate()}
                                
                            </Typography>
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
