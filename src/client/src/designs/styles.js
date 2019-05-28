import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
    color: "black",
  },
  homePage: {
    height: 1356,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
  },
  listDivider: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }
}));

export default styles;
