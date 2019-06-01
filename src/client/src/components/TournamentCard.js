import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import {BASE_URL} from '../config';

const useStyles = makeStyles(theme => ({
  card: {
    width: 1200,
  },
  media: {
    height: 300,
  },
  fab: {
    margin: theme.spacing(1),
  },
}));

function TournamentCard(props) {
  const classes = useStyles();
  const { tournament } = props;
  return (
    <Card className={classes.card} style={{margin: 'auto'}}>
      <CardActionArea>
        <CardMedia
          className={classes.media} 
          image={`images/tournament_cards/${tournament.year}.jpg`}
          title={tournament.year + " " + tournament.host}
        />
        <CardContent style={{justifyContent: 'center', display: 'flex'}}>
          <Typography variant="h5" component="h2">
            {tournament.year} {tournament.host}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}}>
        {tournament.year === 2020 ? (
          <>
            <Button 
              size="large" 
              color="primary"
              href={`/tournaments/${tournament.year}/entries`}
            >
              Entries
            </Button>
            <Button size="large" color="primary">
              Draw
            </Button>
            <Fab 
              variant="extended"
              size="large"
              aria-label="sign-up"
              style={{
                backgroundColor: '#FF5F3E',
                marginLeft: '20px',
              }}
              classes={classes.fab}
              href={`/tournaments/${tournament.year}/entries/new`}
            >
              Sign Up
            </Fab>
          </>
        ) : (
          <Button size="large" color="primary">
              Results 
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default TournamentCard;
