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


function VeryActive(){




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

    function Calculate() {
        if (info[0].gender === 'Male') {

            let weight = info[0].weight * 6.23;
            let height = info[0].height * 12.7;
            let age = info[0].age * 6.8;

            let calories = 66 + weight + height - age
            console.log('male', calories)
            return Math.round(calories  * 1.725)
        }
        else {
            let weight = info[0].weight * 4.35;
            let height = info[0].height * 4.7;
            let age = info[0].age * 4.7;

            let calories = 655 + weight + height - age
            console.log('female', calories)

            return Math.round(calories  * 1.725)
        }
    }
    return (
        <>

            {info.length ? (
                <>

                    <Card sx={{ maxWidth: 275, maxHeight: 1500 }}>
                        <CardHeader
                            // avatar={
                            //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            //     ?
                            //   </Avatar>
                            // }

                            title='Very Active'
                            subheader="hard exercise every day, or exercising 2 xs/day "
                        />
                        <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="Person walking dog"
        style={{ width: '150px', height: '150px' }}

      />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {user.username} would burn {Calculate()} calories in 24 hours 
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Typography variant="body2" color="text.secondary">
                          Click to see how we got these results     </Typography>
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

                </>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );

}

export default VeryActive;