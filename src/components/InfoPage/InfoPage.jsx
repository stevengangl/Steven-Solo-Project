import * as React from 'react';
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
import calorie from '../../components/images/Calorie.jpeg'


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state isconst ExpandMore = styled((props) => {


function InfoPage() {


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









  return (
    <div>

      
    <div className="container">
      <Card sx={{ maxWidth: 345, borderRadius: '10%' }}>
        <CardHeader

          title="Food Volume"
          subheader="Comparisons"
        />
        <CardMedia
          component="img"
          height="194"
          image={calorie}
          alt="pic to represent type of inco"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This is a spot to talk about the subject. the drop down can be more detailed oriented
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
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardMedia
          component="img"
          height="194"
          image=""
          alt="food pic to compare foods"
        />
          <CardMedia
          component="img"
          height="194"
          image=""
          alt="food pic to compare foods"
        />
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              text goes here
            </Typography>
            <Typography paragraph>
              text can go here
            </Typography>
            <Typography paragraph>
              more text here
            </Typography>
            <Typography>
            more text here
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
    
    <div className="container">
      <Card sx={{ maxWidth: 345 , borderRadius: '10%'}}>
        <CardHeader

          title="Helpful Info"
          subheader="place holder text"
        />
        <CardMedia
          component="img"
          height="194"
          image=""
          alt="pic to represent type of inco"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This is a spot to talk about the subject. the drop down can be more detailed oriented
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
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardMedia
          component="img"
          height="194"
          image=""
          alt="food pic to compare foods"
        />
          <CardMedia
          component="img"
          height="194"
          image=""
          alt="food pic to compare foods"
        />
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              text goes here
            </Typography>
            <Typography paragraph>
              text can go here
            </Typography>
            <Typography paragraph>
              more text here
            </Typography>
            <Typography>
            more text here
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>


    </div>
  );
}

export default InfoPage;
