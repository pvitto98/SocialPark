import React, { useState , useEffect, useContext} from 'react';
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
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";


import API from "../api/API";

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


const ExploreCard = () => {
  const classes = useStyles();
  
  const [exploreCard, setExploreCard] = useState([]);

  const contextValue = useContext(UserContext);


  //sliding part
  useEffect(() => {
    API.getPosts(contextValue.authUser.idUtente).then((posts)=>{
      setExploreCard(posts);
      console.log("fatto");
    })
  },[]);


  const [checked, setChecked] = React.useState([true, true]);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  //FARE LISTA DI inchecked in base al numero di carte

  //controlla mountonenter

  return (
    <UserContext.Consumer>
    {(context) => (    
    <div className={classes.root}>
      <div className={classes.wrapper}>
        
        <Container fluid style={{ position: "relative", right: "8px", right:"46px" }}>
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{ width: "350px", height: "500px" }}>
            <ol class="carousel-indicators" style={{ position: "absolute", bottom: "-135px" }}>
              {exploreCard.map((value, index) => (
                <li data-target="#carouselExampleIndicators" data-slide-to={index} class={` ${index == 0 ? "active" : ""}`}></li>
              ))}
            </ol>
            <div class="carousel-inner">
              {exploreCard.map((card, index) => (
                <div class={`carousel-item ${index == 0 ? "active" : ""}`} key={index} >
                  <Card className={classes.root} style={{ backgroundColor: '#5CAB7D', height: "590px", width: "500px", marginTop: "10px" }} onTouchMove={handleChange}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar} src={""}>
                        </Avatar>
                      }
                      style={{ color: "white" }}
                      title={card.titolo}
                      subheader={card.dataPubblicazione}>
                    </CardHeader>

                    <CardMedia
                      style={{ flex: "1", height: "360px", width: "300px", marginLeft: '7%', position: "relative" }}
                      className={classes.media}
                      image={card.urlFoto}
                    />
                    <CardContent>
                      <Typography variant="subtitle1" color="subtitle1" component="p" style={{ fontStyle: "italic" }}>
                        {card.descrizione}
                      </Typography>
                      <Typography variant="subtitle2" color="subtitle1" component="p" style={{ fontStyle: "italic", color: "grey" }}>
                        {card.dataPubblicazione}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing >
                      <IconButton aria-label="add to favorites" >
                        <FavoriteIcon style={{ position: "relative", color: "grey", left: "50px", top: "-20px" }} />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon style={{ position: "relative", color: "grey", left: "180px", top: "-20px" }} />
                      </IconButton>
                    </CardActions>
                  </Card>

                </div>
              ))
              }

            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" style={{ position: "relative", top: "-350px", left: "-40px" }}>
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" style={{ position: "relative", top: "-365px", left: "333px" }}>
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <Link to="/explore/createExploreCard" style={{position:"absolute", textDecoration:"none", color:"#3F4B3B", top : "600px", left : "300px"}}>
                    <Button>
                        Pubblica un post!
                  </Button>
            </Link>
        </Container>
      </div>
    </div>)}

    </UserContext.Consumer>

  );
}

export default ExploreCard;

