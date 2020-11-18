import React, { Component, useContext } from "react";
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import {Redirect} from 'react-router-dom';
import { Link } from "react-router-dom";
import API from "../api/API";
import { UserContext } from "./UserContext";




export default class OralResult extends Component {

  static contextType = UserContext;
  //PROPRIETÁ
  constructor(props) {
    super(props);
    this.state = {submitted:false };

  }


  createPost= (idUtente)=>{
    let titolo = document.forms.postForm.titolo.value;
    let urlFoto = document.forms.postForm.urlFoto.value;
    let descrizione = document.forms.postForm.descrizione.value;
    API.createPost({idUtente: idUtente, titolo: titolo, dataPubblicazione:"20/10/2020",  urlFoto:urlFoto, descrizione:descrizione}).then(()=>{
        this.setState({submitted:true});
    })
  }


  render(){

      if (this.state.submitted){
        return <Redirect to='/explore'/>;
      } else {
        return (
          <UserContext.Consumer>
          {(context) => (
      <>
    <Container fluid  style = {{position:"absolute", top:"50px", width:"500px", right:"-70px"}}>
        <Card style = {{height:"500px", width: "70%", backgroundColor: "#5CAB7D", position: "relative", left: "15%", top : "5%"}}>
          <Card.Header style={{fontSize : "20px"}}>
            Insert a new Post
          </Card.Header>
          <Card.Body>
          <Form id = "postForm">
            <fieldset>
            <Form.Control type="titolo" placeholder="Titolo" id= "titolo" style ={{position: "relative", top: "100%"}}/>
            <Form.Control type="urlFoto" placeholder="Url della Foto" id= "urlFoto" style ={{position: "relative", top: "100%"}}/>
            <Form.Control type="descrizione" placeholder="Descrizione" id= "descrizione" style ={{position: "relative", top: "100%"}}/>

            </fieldset>

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>


              </Col>
            </Form.Group>
          </Form>

          <Button type="submit" onClick = {() =>this.createPost(context.authUser.idUtente)}>
                      Posta!
            </Button>
            {` `}
            <Link to="/" style={{textDecoration:"none", color:"#3F4B3B"}}>
            <Button>
                        Torna alla homepage
            </Button>
            </Link>
          </Card.Body>

        </Card>
        
            </Container>

            </>
      )}
                  </UserContext.Consumer>
        );

    }
  }
}