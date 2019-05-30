import React from 'react';
import styles from '../designs/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import TournamentCard from './TournamentCard';

function ListDividers(props) {
  const classes = styles();
  return (
    <List>
      <Divider />
      {
        props.tournaments.map(tournament => 
          <ListItem divider key={tournament.id}>
            <TournamentCard tournament={tournament}/>
          </ListItem>
        )
      }
    </List>
  );
}

export default ListDividers;
