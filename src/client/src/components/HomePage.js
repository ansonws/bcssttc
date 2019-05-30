import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../designs/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
const homeImage = 'images/semiahmoo-banner.jpeg';

function HomePage() {
  const classes = styles();
  return (
    <main style={{background: "black"}}>
      <div 
        className={classes.homePage}
        style={{
          backgroundImage: `url(${homeImage})`
        }}
        >
        <NavLink to="/tournaments" className={classes.link}>
          <Fab 
            size="large"
            aria-label="Tournaments" 
            className={classes.fab} 
            className={classes.extendedIcon}
            style={{
              backgroundColor: "#FF5F3E",
              height: '70px',
              width: '300px',
              borderRadius: '100px',
              fontSize: '1.3rem'
            }}
          >
            Tournaments
          </Fab>
        </NavLink>
        <br/>
        <NavLink to="tournaments/49/entries/new" className={classes.link}>
          <Fab 
            size="large"
            aria-label="Edit" 
            className={classes.fab} 
            className={classes.extendedIcon}
            style={{
              backgroundColor: "#FF5F3E",
              height: '70px',
              width: '300px',
              borderRadius: '100px',
              fontSize: '1.3rem',
              marginTop: '2em'
            }}
          >
            Enter Your School
          </Fab>
        </NavLink>
      </div>
      <div>
            
      </div>
    </main>
  )
}

export default HomePage;
