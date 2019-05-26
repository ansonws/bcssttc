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
    width: 300,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 300,
  },
}))

function TeamInput(props) {
  const classes = useStyles();
  const { teams, handleChange } = props;
  return (
    <div>
      {teams.map((team, index) => (
      <React.Fragment key={index}>
      <h2>{team.gender} Team {team.tier}</h2>

      <label htmlFor={team.gender + index}>Number of Players</label>
      <select 
        name={team.gender + index} 
        id={team.gender + index}
        onChange={handleChange(`teams`, index)}
        value={team.playerCount}
      >
        <option value={0}>0</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <br/>
      {Array.from({length: team.playerCount}).map((value, index) => (
      <span key={index}>
      <TextField
        label="First Name"
        style={{ margin: 8 }}
        margin="normal"
      />
      <TextField
        label="Last Name"
        style={{ margin: 8 }}
        margin="normal"
      />
      <label htmlFor="grade">Grade</label>
      <select name="grade" id="grade">
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
        <option value={11}>11</option>
        <option value={12}>12</option>
      </select>
      <TextField
      id="standard-number"
      label="TTCAN Rating (if exists)"
        type="number"
        className={classes.textField}
        margin="normal"
        helperText="If no rating is entered, player may not be seeded"
      />
      </span>
      ))}
      </React.Fragment>
      ))}
    </div>
  )
}

export default TeamInput;
