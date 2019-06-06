import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

function TeamForm(props) {
  const classes = useStyles();
  const { 
    formValues,
    teams, 
    handleDropDownChange, 
    handleTeamPlayerChange 
  } = props;

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Teams ($85 per team)</h1>
      <h2 style={{textAlign: 'center'}}>Fees: {formValues.singles.length * 12 + 85}</h2>
      {Object.entries(teams).map((team, index) => (
      <div key={index} style={{marginLeft: '70px'}}>
      <h2 style={{marginTop: '50px'}}>{team[0]}</h2>
      <label htmlFor={team[0]} style={{lineHeight: '3'}}>Number of Players</label>
      <select 
        name={team.gender + index} 
        id={team.gender + index}
        onChange={handleDropDownChange(team, index)}
        value={team.playerCount}
      >
        <option value={0}>0</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <br/>
      {Array.from({length: team[1].players.length}).map((player, playerIndex) => (
      <span key={playerIndex} style={{marginTop: '20px'}}>
      <TextField
        label="First Name"
        style={{ margin: 8 }}
        margin="normal"
        value={team[1].players[playerIndex].first_name}
        onChange={handleTeamPlayerChange(team[0], playerIndex, 'first_name')}
      />
      <TextField
        label="Last Name"
        style={{ margin: 8 }}
        margin="normal"
        value={team[1].players[playerIndex].last_name}
        onChange={handleTeamPlayerChange(team[0], playerIndex, 'last_name')}
      />
      <label htmlFor="grade" style={{lineHeight: '5.6'}}>Grade</label>
      <select 
        name="grade" 
        id="grade"
        value={team[1].players[playerIndex].grade}
        onChange={handleTeamPlayerChange(team[0], playerIndex, 'grade')}
      >
        <option selected value></option>
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
        style={{marginTop: '7px', width: '30%'}}
        margin="normal"
        helperText="If no rating is entered, player may not be seeded"
        value={team[1].players[playerIndex].rating}
        onChange={handleTeamPlayerChange(team[0], playerIndex, 'rating')}
      />
      <br/>
      </span>
      ))}
      </div>
      ))}
    </div>
  )
}

export default TeamForm;
