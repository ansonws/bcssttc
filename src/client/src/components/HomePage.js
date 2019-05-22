import React from 'react';
import styles from '../designs/styles';

function HomePage() {
  const classes = styles();
  return (
    <div className={classes.homePage}>
      <h1>2019 BC Secondary School Table Tennis Championships</h1>
    </div>
  )
}

export default HomePage;