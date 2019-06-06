import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

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

function SinglesForm(props) {
  const classes = useStyles();
  const { formValues, handleAddSinglesPlayerClick, handleRemoveSinglesPlayerClick, handleSinglesPlayerChange, singles } = props;
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Singles Players ($12 per Player)</h1>
      <h2 style={{textAlign: 'center', margin: '40px'}}>Fees: {formValues.singles.length * 12 + 85}</h2>
      {Array.from({length: singles.length}).map((player, playerIndex) => (
      <span key={playerIndex}>
      <TextField
        label="First Name"
        style={{ margin: 8 }}
        margin="normal"
        value={singles[playerIndex].first_name}
        onChange={handleSinglesPlayerChange(playerIndex, 'first_name')}
      />
      <TextField
        label="Last Name"
        style={{ margin: 8 }}
        margin="normal"
        value={singles[playerIndex].last_name}
        onChange={handleSinglesPlayerChange(playerIndex, 'last_name')}
      />
      <label htmlFor="grade" style={{lineHeight: 5.6}}>Grade</label>
      <select 
        name="grade" 
        id="grade"
        value={singles[playerIndex].grade}
        onChange={handleSinglesPlayerChange(playerIndex, 'grade')}
      >
        <option selected value></option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
        <option value={11}>11</option>
        <option value={12}>12</option>
      </select>
      <label htmlFor="gender">Gender</label>
      <select 
        name="gender" 
        id="gender"
        value={singles[playerIndex].gender}
        onChange={handleSinglesPlayerChange(playerIndex, 'gender')}
      >
        <option selected value></option>
        <option value="Boys">Boys</option>
        <option value="Girls">Girls</option>
      </select>
      <TextField
        id="standard-number"
        label="TTCAN Rating (if exists)"
        type="number"
        className={classes.textField}
        margin="normal"
        helperText="If no rating is entered, player may not be seeded"
        style={{width: '20%', marginTop: '7px'}}
        value={singles[playerIndex].rating}
        onChange={handleSinglesPlayerChange(playerIndex, 'rating')}
      />
      </span>
      ))}
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button 
          aria-label="Remove" 
          variant="contained"
          className={classes.Button}
          onClick={handleRemoveSinglesPlayerClick}
          style={{backgroundColor: '#EC2C3E', color: 'black', margin: '50px 8px'}}
          >
          Remove Player
        </Button>
        <Button 
          aria-label="Add" 
          variant="contained"
          className={classes.Button}
          onClick={handleAddSinglesPlayerClick}
          style={{backgroundColor: 'darkgreen', color: 'white', margin: '50px 8px'}}
          >
          Add Player
        </Button>
      </div>
    </div>
  )
}

export default SinglesForm;
