import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ThemeProvider } from '@material-ui/styles';
import theme from './designs/theme';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App /> 
  </ThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
