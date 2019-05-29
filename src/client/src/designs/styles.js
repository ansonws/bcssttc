import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
    color: "black",
  },
  homePage: {
    height: 1356,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    paddingLeft: '12em',
    paddingTop: '10em',
  },
  listDivider: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }
}));

export default styles;
