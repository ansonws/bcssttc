import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#364976',
      main: '#000',
    },
    secondary: {
      main: '#FFC857',
    },
    error: {
      main: '#EC2C3E',
    }
  },
});

export default theme;
