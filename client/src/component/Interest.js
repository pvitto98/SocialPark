import React, { Component } from "react";
import Paper from "@material-ui/core/Paper"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
    },
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

//

const interestsDitionary = 
[{interest:"Calcio", img: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"},
{interest: "Canto", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
{interest: "Danza", img: "https://images.unsplash.com/photo-1495926048989-432065eaae46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"},
{interest: "Giocare con la bicicletta", img: "https://images.unsplash.com/photo-1523798146182-2375d53e1e5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"},
{interest:"Animali", img: "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
{interest:"Studiare", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
{interest:"Informatica", img:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"},
{interest:"Skateboard", img: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"},
{interest: "Pallavolo", img: "https://images.unsplash.com/photo-1562552052-c72ceddf93dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
{interest:"Rugby", img: "https://images.unsplash.com/photo-1517340650606-17091f8e86ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
{interest: "Videogiochi", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=598&q=80"},
{interest: "Ascoltare Musica", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
{interest: "Film", img: "https://images.unsplash.com/photo-1523207911345-32501502db22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
{interest: "Colorare", img: "https://images.unsplash.com/photo-1516986018469-1f121d166270?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"},
{interest: "Disegnare", img: "https://images.unsplash.com/photo-1525278070609-779c7adb7b71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80"},
];


export default class Interest extends Component {   
  //PROPRIETÁ
  constructor(props) {  
    super(props);
}


render(){
    let choosenInterest = interestsDitionary.filter((s)=> (s.interest==this.props.interest));
    
    if(choosenInterest.length==1){
        return (
            <Card style = {{ backgroundColor: "#3F4B3B", width: "170px",height:"100px"}} >
            <CardMedia
              style={{ flex: "1", height: "100px", width: "170px", position: "relative" }}
                 image={choosenInterest[0].img}                   />                   
            <CardContent>
            <Box fontWeight="fontWeightBold" m={1} fontStyle="oblique">
                {choosenInterest.interest}
              <Typography variant="subtitle1" color="subtitle1" component="p" style={{position:"absolute", top:"164px", left: "10px", color:"#3F4B3B", backgroundColor:"#4ADBC8", borderRadius:"10px"}}>
              </Typography>     
              </Box>
            </CardContent>
            </Card>
            );
    } else {
        return(null);
    }
}
}


/*             <Card style = {{position: "absolute", backgroundColor: "#3F4B3B", width: "180px", height: "200px", marginTop:"15px", left:"-7px"}} >
            <CardMedia
              style={{ flex: "1", height: "200px", width: "180px", position: "relative" }}
                 image={z.img}                   />                   
            <CardContent>
            <Box fontWeight="fontWeightBold" m={1} fontStyle="oblique">
                {z.interest}
              <Typography variant="subtitle1" color="subtitle1" component="p" style={{position:"absolute", top:"164px", left: "10px", color:"#3F4B3B", backgroundColor:"#4ADBC8", borderRadius:"10px"}}>
                    {this.props.interest}
              </Typography>
              </Box>
            </CardContent>
        
    </Card> */
