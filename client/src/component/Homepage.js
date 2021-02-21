import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
  },
  title: {
      fontSize: 14,
  },
  pos: {
      marginBottom: 12,
  },
});

export default function HomePage() {
  const classes = useStyles();


  return ( 
<>           
  <Card className="HomePageCard" id="impariamoAssieme">
    <CardMedia 
      className={classes.media}
      id = "media"
      image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    />
    <CardContent>
    <Box fontWeight="fontWeightBold" m={1} fontStyle="oblique">
      <Typography className="scrittaCard" variant="subtitle1" color="subtitle1" component="p" >
            IMPARIAMO ASSIEME!
      </Typography>
      </Box>
    </CardContent>
</Card>
<Card className="HomePageCard" id="esplora">
            <CardMedia
                      className={classes.media}
                      id="media"
                      image="https://www.stile.it/wp-content/uploads/2017/01/viaggiare-e1483629395741.jpg"
                    />

                    <CardContent>
                    <Box fontWeight="fontWeightBold" m={1} fontStyle="oblique">
                      <Typography className="scrittaCard" variant="subtitle1" color="subtitle1" component="p">
                      <Link to="/explore" style={{textDecoration:"none", color:"#3F4B3B"}}>
                        ESPLORA!
                        </Link>
                      </Typography>
                      </Box>
                    </CardContent>
</Card>

<Card className="HomePageCard" id="chiaccheraConLaMascotte"  >
            <CardMedia
                      className={classes.media}
                      id="media"
                      image="https://images.unsplash.com/photo-1601758261049-55d060e1159a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    />

                    <CardContent>
                    <Box>
                      <Typography className="scrittaCard">
                            CHIACCHERA CON LA MASCOTTE!

                      </Typography>
                      </Box>
                    </CardContent>
            </Card>

            <Card className="HomePageCard" id="profilo" >
            <CardMedia
                      id = "media"
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
                    />

                    <CardContent>
                    <Box >
                      <Typography className="scrittaCard" >
                      <Link to="/profile" style={{textDecoration:"none", color:"#3F4B3B"}}>
                        PROFILO
                    </Link>
                      </Typography>
                      </Box>
                    </CardContent>
            </Card>
</>
  );
}
