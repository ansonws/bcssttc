import React from 'react';
import styles from '../designs/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

function HomePage() {
  const classes = styles();
  return (
    <div className={classes.homePage}>
      <Fab color="secondary" variant="extended" aria-label="Edit" className={classes.fab} className={classes.extendedIcon}>
        Tournaments
      </Fab>
      {/* <h1>2019 BC Secondary School Table Tennis Championships</h1> */}
    </div>
  )
}

export default HomePage;
