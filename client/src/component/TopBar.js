import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExploreIcon from '@material-ui/icons/Explore';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";



const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    background: '#3F4B3B',
    color: 'white',
    borderRadius: '10px'
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //sidebar

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
              <Typography variant="h6" className={classes.title} style={{marginLeft:"20px", marginTop:"20px"}}>            

      Ciao Alessio!
      </Typography>
      <Divider/>
      <List>
        <ListItem button key={'Impariamo Assieme!'}>
          <ListItemIcon> <CreateIcon/> </ListItemIcon>
          <ListItemText primary={'Impariamo Assieme!'} />
        </ListItem>

        <ListItem button key={'Esplora!'}>
          <ListItemIcon> <ExploreIcon/> </ListItemIcon>
          <Link to="/explore" style={{textDecoration:"none", color:"white"}}>
          <ListItemText primary={'Esplora!'} />
          </Link>
        </ListItem>

        <ListItem button key={'Chiacchera con la mascotte'}>
          <ListItemIcon> <ExploreIcon/> </ListItemIcon>
          <ListItemText primary={'Chiacchera con la mascotte'} />
        </ListItem>
      </List>
      <Divider />
      <List>
      <ListItem button key={'Esci dal tuo account'}>
          <ListItemText primary={'Esci dal tuo account'} />
        </ListItem>
      </List>
    </div>
  );


  return (
    <UserContext.Consumer>
    {(context) => (
    <>
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"#3F4B3B", width:"100%", marginTop:"8px", borderRadius:"10px"}} >
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
            
          <Typography variant="h6" className={classes.title}>       
          <Link to="/" style={{textDecoration:"none", color:"white"}}>     
            SocialPark 
            
        <ChildCareIcon />
        </Link>
          </Typography>

          <Link to = {context.authUser==null ? "/login": "/"} >
              <Button variant="outline-info" style = {{backgroundColor:"#3F4B3B"}}
                onClick = {() => {context.logoutUser()}}>{context.authUser==null? "Login": "Log out"}</Button> </Link>
          
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>

    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} classes={{ paper: classes.paper }}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>

</>
    )}
        </UserContext.Consumer>

  );
}






/*           <Navbar bg="dark" className="navbar-fixed-top" variant="dark" >
            <Navbar.Brand href="#home">SocialPark</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Esplora!</Nav.Link>
            <Nav.Link href="/">Impariamo Assieme!</Nav.Link>
            <Nav.Link href="/">Chiacchera con la mascotte!</Nav.Link>
            </Nav>
              <Nav>
              <Navbar.Text>
            Ciao Alessio! {` `}
              </Navbar.Text> 
              <Link to = {context.authUser==null ? "/login": "/"} >
              <Button variant="outline-info"
                onClick = {() => {context.logoutUser()}}>{context.authUser==null? "Esci dal tuo account!": "Esci dal tuo account!"}</Button> </Link>
              </Nav>
            </Navbar>
 */