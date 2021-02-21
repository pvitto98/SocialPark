import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from'react-bootstrap/Button';
import Alert from'react-bootstrap/Alert';
import {Redirect} from 'react-router-dom';
import {UserContext} from './UserContext';
import { Link } from "react-router-dom";


class SigningUp extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {name:'', surname: '', username: '', proPic: '', password: '', repeatedPassword: '', submitted: false};
    }

    
    onChangeName = (event) => {
        this.setState({name : event.target.value});
    }; 

        
    onChangeSurname = (event) => {
        this.setState({surname : event.target.value});
    }; 

            
    onChangeProPic = (event) => {
        this.setState({proPic : event.target.value});
    }; 

    onChangeUsername = (event) => {
        this.setState({username : event.target.value});
    }; 
    
    onChangePassword = (event) => {
        this.setState({password : event.target.value});
    };
    onChangeRepeatedPassword = (event) => {
        this.setState({repeatedPassword : event.target.value});
    };
    
    handleSubmit = (event, onCreateAccount) => {
        event.preventDefault();
        //CONTROLLO PASSWORD
        if(this.state.password!= this.state.repeatedPassword){
            alert("Le password sono diverse!");
        }else {
            onCreateAccount(this.state.name, this.state.surname, this.state.proPic, this.state.username,this.state.password);
            this.setState({submitted : true});
        }
        
    }    

    render() {
        if (this.state.submitted ){
            console.log("redirect");
            return <Redirect to='/login' />;
        }
        return(
            <UserContext.Consumer>
                {(context) => (
                <>
        <Container fluid  style = {{position:"absolute", top:"50px", width:"300px"}}>
                    <Row>
                        <Col>
                            <h2 className="ui teal image header">
                                <svg className="bi bi-check-all" width="30" height="30" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M12.354 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd"/>
                                    <path d="M6.25 8.043l-.896-.897a.5.5 0 10-.708.708l.897.896.707-.707zm1 2.414l.896.897a.5.5 0 00.708 0l7-7a.5.5 0 00-.708-.708L8.5 10.293l-.543-.543-.707.707z"/>
                                </svg>  
                                <div className="content">
                                    <div id="topBarText" style={{color:"black"}}>
                                    Crea un account
                                    </div>
                                </div>
                            </h2>

                            <Form method="POST" onSubmit={(event) => this.handleSubmit(event, context.createAccount)}>
                            <Form.Group >
                                    <Form.Label>Inserisci il tuo nome</Form.Label>
                                    <Form.Control name="name" placeholder="Nome" value = {this.state.name} onChange={(ev) => this.onChangeName(ev)} required autoFocus/>
                                    <Form.Label>Inserisci il tuo cognome</Form.Label>
                                    <Form.Control  name="surname" placeholder="Cognome" value = {this.state.surname} onChange={(ev) => this.onChangeSurname(ev)} required autoFocus/>
                                    <Form.Label>Inserisci la tua foto del profilo</Form.Label>
                                    <Form.Control name="proPic" placeholder="Foto del Profilo" value = {this.state.proPic} onChange={(ev) => this.onChangeProPic(ev)} required autoFocus/>
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Inserisci la tua E-mail</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="E-mail" value = {this.state.username} onChange={(ev) => this.onChangeUsername(ev)} required autoFocus/>
                                    <Form.Label>Inserisci la tua Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" value = {this.state.password} onChange={(ev) => this.onChangePassword(ev)} required/>
                                    <Form.Label>Reinserisci la tua Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password ripetuta" value = {this.state.repeatedPassword} onChange={(ev) => this.onChangeRepeatedPassword(ev)} required/>
                                </Form.Group>
                                <Button variant="primary" type="submit">Crea account!</Button>

                            </Form>

                            {context.authErr && 
                            <Alert variant= "danger">
                                {context.authErr.msg}
                            </Alert>
                            }
                        </Col>
                    </Row>
                    </Container>
                    </>
                    )}
                    </UserContext.Consumer>
        );
    }


}

export default SigningUp;