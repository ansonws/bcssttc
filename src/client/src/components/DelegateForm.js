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

function DelegateForm(props) {
  const classes = useStyles();
  return (
    <main>
      <form>
      <TextField
        label="School Name"
        style={{ margin: 8 }}
        // placeholder="Placeholder"
        fullWidth
        margin="normal"
        variant="filled"
        // InputLabelProps={{
          //   shrink: true,
          // }}
      />
      <h2>School Delegate Information</h2>
      <TextField
        label="First Name"
        className={classes.textField}
        // value={values.name}
        // onChange={handleChange('name')}
        margin="normal"
        variant="filled"
        required
      />
      <TextField
        label="Last Name"
        className={classes.textField}
        // value={values.name}
        // onChange={handleChange('name')}
        margin="normal"
        variant="filled"
        required
      />
      <br/>
      <TextField
        label="Position"
        helperText="Sponsor, Teacher, Coach..."
        className={classes.textField}
        // value={values.name}
        // onChange={handleChange('name')}
        margin="normal"
        variant="filled"
        required
      />
      <TextField
        id="filled-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="filled"
      />
      <PhoneNumberInput />
      </form>
    </main>
  )
}

export default DelegateForm;
