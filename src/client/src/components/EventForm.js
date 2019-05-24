import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PhoneNumberInput from './PhoneNumberInput';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}))

function EventForm(props) {
  const classes = useStyles();
  return (
    <main>
      <form>
      <TextField
        label="Number of Teams"
        // value={values.age}
        // onChange={handleChange('age')}
        type="number"
        className={classes.textField}
        // InputLabelProps={{
        //   shrink: true,
        // }}
        margin="normal"
        variant="filled"
      />
      </form>
    </main>
  )
}

export default EventForm;
