  
import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Switch from "react-bootstrap/esm/Switch";
import {Route } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./auth/AuthContext";
import { withRouter } from 'react-router-dom';
import TopBar from "./component/TopBar";
import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import ExploreCard from "./component/ExploreCard";
import Sidebar from "./component/Sidebar"
import Homepage from "./component/Homepage"
import Profile from "./component/Profile"
import SigningUp from "./component/SigningUp"
import CreateExploreCard from "./component/CreateExploreCard"
import LoginForm from "./component/LoginForm";
import API from "./api/API";
import { UserContext } from "./component/UserContext";
import NewAccount from "./api/NewAccount";


class App extends React.Component {

  constructor(props)  {
    super(props);
    this.state=[];
  }

  
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
          //this.props.history.push("/login");
        }
    }
}

  // Add a logout method
  logout = () => {
    API.userLogout().then(() => {
      this.setState({authUser: null,authErr: null, profile : null});
    });
  }

  // Add a login method
  login = (username, password) => {
    API.userLogin(username, password).then(
      (user) => { 
        console.log(user.idUtente);
        API.getProfile(user.idUtente)
          .then((profile) => {
            this.setState({ authUser: user, authErr: null, profile: profile});
            console.log(this.state.profile);
            console.log("Login fatto!");
          })
          .catch((errorObj) => {
            console.log("weeoew");
            this.handleErrors(errorObj);
        });
      }
    ).catch(
      (errorObj) => {
        //const err0 = errorObj.errors[0];
        //this.setState({authErr: err0});
      }
    );
  }

  createAccount = (name, surname, proPic, username, password) => {
    let newAccount = new NewAccount(name, surname, proPic, username,password);
    API.createAccount(newAccount).catch(
      (errorObj) => {
        //const err0 = errorObj.errors[0];
        //this.setState({authErr: err0});
      }
    );
  }
  
  
  render() {
    // compose value prop as object with user object and logout method
    const value = {
      authUser: this.state.authUser,
      authErr: this.state.authErr,
      loginUser: this.login,
      logoutUser: this.logout,
      createAccount: this.createAccount,
      profile: this.state.profile
    };

  
    return (
      <UserContext.Provider value={value}>
        <Container id="upperContainer" >
        <TopBar />
        <Box width="100%" >

            <Switch>
              <Route exact path="/">
                <Homepage/>
              </Route>

              <Route exact path="/explore">
                <ExploreCard/>
              </Route>

              <Route path = "/explore/createExploreCard">
                <CreateExploreCard/>
              </Route>

              <Route path = "/profile">
                <Profile/>
              </Route>

              <Route path = "/login">
                <LoginForm/>
              </Route>

              <Route path = "/signingUp">
              <SigningUp/>
              </Route>

            </Switch>
        </Box>
        </Container>
      </UserContext.Provider>
    );
  }
}


export default withRouter(App);


/*              <Route path="/login">
                <LoginForm authUser = {this.state.authUser} authErr = {this.state.authErr}/>
              </Route> */