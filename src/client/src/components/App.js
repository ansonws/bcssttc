import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TournamentIndexPage from './TournamentIndexPage';
import EntryNewPage from './EntryNewPage';
import ResultsPage from './ResultsPage';
import NavBar from './NavBar';
import Footer from './Footer';
import { getThemeProps } from '@material-ui/styles';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route exact path="/tournaments" component={TournamentIndexPage} />
        <Route exact path="/tournaments/2020/entries/new" component={EntryNewPage} />
        <Route exact path="/results" component={ResultsPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )
}

export default App;
