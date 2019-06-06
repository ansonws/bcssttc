import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../designs/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import createTypography from '@material-ui/core/styles/createTypography';
// import SemiahmooMap from './SemiahmooMap';

const homeImage = 'images/semiahmoo-banner.jpeg';
const semiahmoo = 'images/tournament_cards/2019.jpg';

function HomePage() {
  const classes = styles();
  return (
    <main style={{background: "black"}}>
      <div 
        className={classes.homePage}
        style={{
          backgroundImage: `url(${homeImage})`,
          height: 575
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
              fontSize: '1.3rem',
              marginTop: '2em'
            }}
          >
            Tournaments
          </Fab>
        </NavLink>
        <br/>
        <NavLink to="tournaments/2020/entries/new" className={classes.link}>
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
      <div 
        className="description" 
        className={classes.homePage}
        style={{
          backgroundColor: 'black', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: '0.3'
        }}>
        <div 
          style={{
            height: '80%',
            width: '70%',
            fontFamily: 'Montserrat',
            fontSize: 32,
          }}  
        >
          {/* <div style={{display: 'flex',}}>
          <p style={{ color: 'white', opacity: '1' }}>
        For years, schools have gotten together for a weekend to compete for the Table Tennis provincial title for their school team. This yearly event has attracted schools from multiple districts across BC to send out their best players to represent. 

          </p>
          </div> */}
        </div>
      </div>
    </main>
  )
}

export default HomePage;
