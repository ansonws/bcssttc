import React, {Component} from 'react';
import Tournament from "../api/tournament";
import ListDividers from './ListDividers';
import LinearProgress from '@material-ui/core/LinearProgress';

class TournamentIndexPage extends Component {
  state = {
    tournaments: [],
    isLoading: true,
  }

  componentDidMount() {
    Tournament.index().then(tournaments => {
      this.setState({ 
        tournaments,
        isLoading: false,
      });
    });
  }

  render() {
    const { tournaments, isLoading } = this.state;
    if (isLoading) {
      return <LinearProgress color="primary" variant="query" />
    }
    
    return (
      <ListDividers tournaments={tournaments} />
    );
  }
}

export default TournamentIndexPage;

