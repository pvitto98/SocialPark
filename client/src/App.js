  
import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Switch from "react-bootstrap/esm/Switch";
import {Route } from "react-router-dom";
import "./App.css";
//import API from "./api/API";
import { AuthContext } from "./auth/AuthContext";
import { withRouter } from 'react-router-dom';
import TopBar from "./component/TopBar";
import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import ExploreCard from "./component/Card";
import Sidebar from "./component/Sidebar"


class App extends React.Component {

  constructor(props)  {
    super(props);
    this.state = {content: {description: "ciii"}};
    console.log(this.state.content);
  }

  /*

  componentDidMount() {
    //check if the user is authenticated
    API.isAuthenticated().then(
      (user) => {
        this.setState({authUser: user});
      }
    ).catch((err) => { 
      this.setState({authErr: err.errorObj});
      //this.props.history.push("/login");
    });
  }



  handleErrors(err) {
    if (err) {
        if (err.status && err.status === 401) {
          this.setState({authErr: err.errorObj});
          this.props.history.push("/login");
        }
    }
}

  // Add a logout method
  logout = () => {
    API.userLogout().then(() => {
      this.setState({authUser: null,authErr: null, tasks: null, id: -1, subjectName: "", students: []});
    });
  }

  // Add a login method
  login = (username, password) => {
    API.userLogin(username, password).then(
      (user) => { 
        API.getStudentsForAnExam(user.id)
          .then((students) => {
            this.setState({ authUser: user, authErr: null});
            //this.props.history.push("/teacherPortal");
          })
          .catch((errorObj) => {
            this.handleErrors(errorObj);
        });
      }
    ).catch(
      (errorObj) => {
        const err0 = errorObj.errors[0];
        this.setState({authErr: err0});
      }
    );
  }
  
  */
  render() {
    // compose value prop as object with user object and logout method
    const value = {
      authUser: this.state.authUser,
      authErr: this.state.authErr,
      loginUser: this.login,
      logoutUser: this.logout,
    };

  
    return (
      <AuthContext.Provider value={value}>
        <Container id="upperContainer" >
        <TopBar />
        <Box width="100%" >
          <ExploreCard props={this.state.content[0]}/>
            <Switch>

              {/* Common routes */}

              <Route exact path="/">
              </Route>


              
            </Switch>
        </Box>
        </Container>
      </AuthContext.Provider>
    );
  }
}


export default withRouter(App);


/*              <Route path="/login">
                <LoginForm authUser = {this.state.authUser} authErr = {this.state.authErr}/>
              </Route> */