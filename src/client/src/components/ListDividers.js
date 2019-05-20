import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../designs/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function ListDividers(props) {
  const classes = styles();
  return (
    <List component="nav" className={classes.listDivider}>
      <Divider />
        {
          props.tournaments.map(tournament => 
      
        <Link to={
          new Date(tournament.date).getYear() === new Date().getYear() ? (
            `tournaments/${tournament.id}/entries`
            ) : (
            `tournaments/${tournament.id}/events`
          )}
          className={classes.link}
          key={tournament.id}>
            <ListItem button divider>
              <ListItemText primary={new Date(tournament.date).getYear() + 1900} />
            </ListItem>
          </Link>
        )
      }
    </List>
  );
}

export default ListDividers;
