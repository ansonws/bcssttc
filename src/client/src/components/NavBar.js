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
          <NavLink exact to="/" className={classes.navLink}>
            <Button color="secondary">
              Home
            </Button>
          </NavLink>
          <NavLink exact to="/tournaments" className={classes.navLink}>
            <Button color="secondary">
              Tournament
            </Button>
          </NavLink>
          <NavLink exact to="/contact-us" className={classes.navLink}>
            <Button color="secondary">
              Contact Us
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
