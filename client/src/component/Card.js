import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


const ExploreCard= ({dati}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [exploreCard, changeExploreCard]= useState ({
    title: 'Oggi é il primo giorno che utilizzo i colori a tempera!',
    date: '14 Luglio 2020',
    url: "https://c8.alamy.com/comp/F54GJG/happy-kid-enjoying-painting-with-his-hands-F54GJG.jpg",
    description: 'Mi sono divertito moltissimo solo che alla fine ero tutto sporco!'});


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
  return (
    <Grid container style={{position:"absolute",marginTop:'3%', marginLeft:'3%',}}>
    <Card className={classes.root} style={{ backgroundColor:'#5CAB7D', height: "650px"}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={"https://thumbs.dreamstime.com/z/little-clever-curious-black-child-boy-thinking-white-background-close-up-portrait-171970296.jpg"}>
          </Avatar>
        }
        style={{color:"white", fontWeight:"bold"}}
        title={exploreCard.title}
        subheader="Luglio 14, 2020"
      />
      <CardMedia
      style={{flex:"1", height: "420px", width:"300px", marginLeft:'7%', position:"relative"}}
        className={classes.media}
        image={exploreCard.url}
        />
      <CardContent>
        <Typography variant="subtitle1" color="subtitle1" component="p" style={{fontStyle:"italic"}}>
         {exploreCard.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing > 
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Grid>
  );
}

export default ExploreCard;