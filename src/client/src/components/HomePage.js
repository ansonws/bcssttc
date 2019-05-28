import React from 'react';
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
        <Fab color="secondary" variant="extended" aria-label="Edit" className={classes.fab} className={classes.extendedIcon}>
          Tournaments
        </Fab>
      </div>
    </main>
  )
}

export default HomePage;
