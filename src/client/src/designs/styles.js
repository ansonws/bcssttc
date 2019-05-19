import { makeStyles } from '@material-ui/core/styles';
const homeImage = 'images/home.jpeg';

const styles = makeStyles(theme => ({
  navLink: {
    textDecoration: "none"
  },
  homePage: {
    height: 1356,
    backgroundImage: `url(${homeImage})`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "black"
  }
}));

export default styles;
