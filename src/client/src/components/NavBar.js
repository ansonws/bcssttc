import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../designs/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

function NavBar() {
  const classes = styles();
  return (
      <div>
    <AppBar position="static">
        <Toolbar>
          <NavLink exact to="/" className={classes.link}>
            <Button color="secondary">
              Home
            </Button>
          </NavLink>
          <NavLink exact to="/tournaments" className={classes.link}>
            <Button color="secondary">
              Tournament
            </Button>
          </NavLink>
          <NavLink exact to="/results" className={classes.link}>
            <Button color="secondary">
              Results
            </Button>
          </NavLink>
          <NavLink exact to="/contact-us" className={classes.link}>
            <Button color="secondary">
              Contact
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
