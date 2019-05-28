import React, {Component} from 'react';
import Tournament from "../api/tournament";
import ListDividers from './ListDividers';

class TournamentIndexPage extends Component {
  state = {
    tournaments: [],
  }

  componentDidMount() {
    Tournament.index().then(tournaments => {
      this.setState({ tournaments });
    });
  }

  render() {
      const {tournaments} = this.state;
      return (
        <ListDividers tournaments={tournaments}/>
      );
  }
}

export default TournamentIndexPage;

