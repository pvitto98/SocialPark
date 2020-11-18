import React, { useState } from 'react';
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
import 'pure-react-carousel/dist/react-carousel.es.css';
import Container from "react-bootstrap/Container"
import Divider from '@material-ui/core/Divider';
import Interest from "./Interest"
import { List } from '@material-ui/core';
import { UserContext } from "./UserContext";



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  root2: {
    height: 180,
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
  wrapper: {
    width: 100 + theme.spacing(2),
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};


const Profile = () => {
  const classes = useStyles();
  const [profileInfo, setProfileInfo] = useState(
    {
        name:"Gino",
        surname:"Pipino",
        birthDate:"16 Maggio 2000",
        birthPlace:"Bolzano",
        bio:"Gotta catch'em all!",
        proPic:"https://thumbs.dreamstime.com/z/little-clever-curious-black-child-boy-thinking-white-background-close-up-portrait-171970296.jpg",
        interest: ["Danza","Rugby", "Studiare", "Skateboard"]
      }

  );

  //FARE LISTA DI inchecked in base al numero di carte

  //controlla mountonenter

  return (
    <UserContext.Consumer>
    {(context) => (
    <div className={classes.root}>
      <div className={classes.wrapper}>
      <Container  style={{ position: "relative", right: "8px", right:"46px" }}>

<Card className={classes.root} style={{ position:"absolute", backgroundColor: '#5CAB7D', height: "500px", width: "500px", marginTop: "10px", top:"50px" }}>
<Avatar aria-label="recipe" className={classes.avatar} src={profileInfo.proPic} style = {{position:"absolute", width:"200px", height: "200px", left:"25%", top:"-20%"}}/>
  <CardMedia
    style={{ flex: "1", height: "400px", width: "300px", marginLeft: '7%', position: "relative" }}
    className={classes.media}
    image={profileInfo.url}
  />
  <Typography variant="subtitle1" color="subtitle1" component="p" style={{ fontStyle: "italic",fontSize:"30px", position:"absolute", top:"100px", left:"30%"}}>
      {profileInfo.name+ ` ` + profileInfo.surname}
  </Typography>
  <Divider style = {{position:"relative", top:"-240px"}}/> 
  <Typography variant="subtitle1" color="subtitle2" component="p" style={{ fontStyle: "italic",fontSize:"20px", position:"absolute", top:"190px"}}>
  Interessi: 
  </Typography>

  {profileInfo.interest.map((s)=>
  <List style={{position:"relative", top:"-180px", display:"inline-block"}}>
    <Interest interest = {s} />
    </List>
  )}
  <Divider style = {{position:"relative", top:"-200px"}}/> 
  
  <CardContent>
    <Typography variant="subtitle1" color="subtitle1" component="p" style={{ fontStyle: "italic", position:"absolute", top :"170px", right: "25%"}}>
      {`bio:`+ profileInfo.bio}
    </Typography>
    <Typography variant="subtitle2" color="subtitle1" component="p" style={{ fontStyle: "italic", color: "grey" }}>
      {`Nato a `+profileInfo.birthPlace+` il `+profileInfo.birthDate}
    </Typography>
  </CardContent>
</Card>
</Container>
      </div>
    </div>)}

                        </UserContext.Consumer>
  );

}
 
export default Profile;

/*    

                    )} */

/*          */