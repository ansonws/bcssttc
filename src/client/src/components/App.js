import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import Footer from './Footer';
import { getThemeProps } from '@material-ui/styles';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )
}

export default App;
