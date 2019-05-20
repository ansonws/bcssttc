import { makeStyles } from '@material-ui/core/styles';
const homeImage = 'images/home.jpeg';

const styles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
    color: "black",
  },
  homePage: {
    height: 1356,
    backgroundImage: `url(${homeImage})`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "black"
  },
  listDivider: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }
}));

export default styles;
