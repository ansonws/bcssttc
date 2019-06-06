import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TournamentIndexPage from './TournamentIndexPage';
import EntryNewPage from './EntryNewPage';
import EntriesIndexPage from './EntriesIndexPage';
import ResultsPage from './ResultsPage';
import ConfirmationPage from './ConfirmationPage';
import Bracket from './Bracket';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route exact path="/tournaments/2020/events/boys-singles/draw" component={Bracket} />
        <Route exact path="/tournaments/2020/entries/new" component={EntryNewPage} />
        <Route exact path="/tournaments/2020/entries" component={EntriesIndexPage} />
        <Route exact path="/tournaments" component={TournamentIndexPage} />
        <Route exact path="/results" component={ResultsPage} />
        <Route exact path="/confirm" component={ConfirmationPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
      
    </BrowserRouter>
  )
}

export default App;
