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


function Coma() {




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
    return (
        <>


            {info.length ? (
                <>

                    <Card sx={{
                        maxWidth: 400, maxHeight: 1500, backgroundColor: 'lightblue', border: '1px solid #000',
                        padding: '25px', margin: '2px'
                    }}>
                        <CardHeader  sx={{ fontSize: '30px'}}
                            // avatar={
                            //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            //     ?
                            //   </Avatar>
                            // }

                            title={
                                <Typography variant="h5" style={{ fontSize: '40px' }}>
                                  Sleeping
                                </Typography>
                              }
                        // subheader= "In bed all day"

                        />
                        <CardMedia
                            component="img"
                            height="250"
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Man_Sleeping_in_Bed_Cartoon_Vector.svg/1024px-Man_Sleeping_in_Bed_Cartoon_Vector.svg.png?20180304135213"
                            alt="Paella dish"
                            style={{ width: '350px', height: '250px' }}


                        />
                        <CardContent>
                            <Typography variant="body2" color="black" fontSize='28px'>
                               Calories Burned:  {Calculate()}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Typography variant="body2" color="text.secondary">
                                Wanna know more? Click to see info                        </Typography>
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
                            <CardContent >
                                <Typography
                                    paragraph fontSize='22px'>Laying down all day with no physical activity.
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

export default Coma;