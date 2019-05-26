import React, {Component} from 'react';
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
  const { formValues, handleChange } = props;
  return (
    <main>
      <form>
      <TextField
        label="School Name"
        style={{ margin: 8 }}
        fullWidth
        variant="outlined"
        margin="normal"
        value={formValues.schoolName}
        onChange={handleChange('schoolName')}
        required
      />
      <h2>School Delegate Information</h2>
      <TextField
        label="First Name"
        className={classes.textField}
        margin="normal"
        value={formValues.sponsorFirstName}
        onChange={handleChange('sponsorFirstName')}
        required
      />
      <TextField
        label="Last Name"
        className={classes.textField}
        margin="normal"
        value={formValues.sponsorLastName}
        onChange={handleChange('sponsorLastName')}
        required
      />
      <br/>
      <TextField
        label="Position"
        helperText="Sponsor, Teacher, Coach..."
        className={classes.textField}
        margin="normal"
        value={formValues.position}
        onChange={handleChange('position')}
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
        value={formValues.email}
        onChange={handleChange('email')}
        required
      />
      <PhoneNumberInput 
        handleChange={handleChange}
      />
      </form>
    </main>
  )
}

export default DelegateForm;


