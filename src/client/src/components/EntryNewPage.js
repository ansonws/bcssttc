import React, {Component} from 'react';
import styles from '../designs/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DelegateForm from './DelegateForm';
import TeamForm from './TeamForm';
import SinglesForm from './SinglesForm';
import EntryFormConfirmation from './EntryFormConfirmation';
import Season from '../api/season';

function getSteps() {
  return [
    'School Information', 
    'Teams', 
    'Singles', 
    'Confirmation'
  ];
}

class EntryNewPage extends Component {
  state = { 
    step: 0,
    edition: 49,
    schoolName: '',
    city: '',
    sponsorFirstName: 'Anson',
    sponsorLastName: 'Lam',
    position: 'Coach',
    email: 'anson.lam94@gmail.com',
    teams: {
      "Boys Team A": {
        gender: 'Boys',
        tier: 'A',
        players: [
        {
          "first_name": 'Stephen',
          "last_name": 'Curry',
          "grade": '12',
          "rating": 900,
        },
        {
          "first_name": 'Tiger',
          "last_name": 'Woods',
          "grade": '9',
          "rating": 500,
        },
        {
          "first_name": 'Elias',
          "last_name": 'Pettersson',
          "grade": '8',
          "rating": 15000,
        }
      ]
      },
      "Boys Team B": {
        gender: 'Boys',
        tier: 'B',
        players: []
      },
      "Girls Team A": {
        gender: 'Girls',
        tier: 'A',
        players: []
      },
      "Girls Team B": {
        gender: 'Girls',
        tier: 'B',
        players: []
      }
    },
    singles: [],
  }

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <DelegateForm 
            handleChange={this.handleChange}
            formValues={this.state}
          />
        )
      case 1:
        return (
          <TeamForm 
            teams={this.state.teams}
            formValues={this.state}
            handleDropDownChange={this.handleDropDownChange}
            handleTeamPlayerChange={this.handleTeamPlayerChange}
          />
        )
      case 2:
        return (
          <SinglesForm
            singles={this.state.singles}
            formValues={this.state}
            handleAddSinglesPlayerClick={this.handleAddSinglesPlayerClick}
            handleRemoveSinglesPlayerClick={this.handleRemoveSinglesPlayerClick}
            handleSinglesPlayerChange={this.handleSinglesPlayerChange}
          />
        )
      case 3:
        return (
          <EntryFormConfirmation 
            formValues={this.state}
          />
        )
      default:
        return 'Unknown stepIndex';
    }
  }

  handleNextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  handlePreviousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleReset = () => {
    const { step } = this.state;
    this.setState({
      step: 0
    });
  }

  handleDropDownChange = (team, index) => e => {
    const teams = {...this.state.teams}
    const players = Array.from({length: e.target.value}).fill({
      "first_name": '',
      "last_name": '',
      "grade": '',
      "rating": 0,
    });
    teams[team[0]] = {...teams[team[0]], players}
    this.setState({teams})
  }

  handleAddSinglesPlayerClick = e => {
    const singles = [...this.state.singles];
    singles.push({
      "first_name": '',
      "last_name": '',
      "grade": '',
      "rating": 0,
      "gender": '',
    })
    this.setState({singles})
  }

  handleRemoveSinglesPlayerClick = e => {
    const singles = [...this.state.singles];
    singles.pop();
    this.setState({singles});
  }

  handleSinglesPlayerChange = (index, value) => e => {
    const singles = [...this.state.singles]
    const player = {...this.state.singles[index]};
    player[value] = e.target.value;
    singles[index] = player;
    this.setState({ singles })
  }

  handleTeamPlayerChange = (team, playerIndex, value) => e => {
    const teams = {
      ...this.state.teams,
      [team]: {
        ...this.state.teams[team],
        players: [
          ...this.state.teams[team].players,
        ] 
      }
    }
    teams[team].players[playerIndex] = {
      ...teams[team].players[playerIndex],
      [value]: e.target.value,
    }
    this.setState({teams})
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value})
  }

  createSeason = e => {
    e.preventDefault();
    Season.create(2020, {...this.state, newkey: 'test'});
    this.props.history.push('/confirm');
  }

  render () {
    const { step } = this.state;
    // same as: const step = this.state.step
    const steps = getSteps();
    const { 
      getStepContent,
      handleNextStep,
      handlePreviousStep,
      handleReset,
    } = this;

    return (
      <div >
      <Stepper 
        activeStep={step} 
        alternativeLabel
        style={{ backgroundColor: '#E8E8E8' }}
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Container maxWidth="md">
      <div>
        {step === steps.length ? (
          <div>
            <Typography>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography>
            <form>
                {getStepContent(step)}
            <div style={{display: 'flex', justifyContent: 'center', margin: '150px auto'}}>
              <Button
                disabled={step === 0}
                onClick={handlePreviousStep}
                size="large"
              >
                Back
              </Button>
                {step === steps.length - 1? (
                  <Button 
                    variant="contained" 
                    color="primary"
                    onClick={e => this.createSeason(e)}
                    size="large"
                    color="primary"
                    style={{color: '#FFC857'}}
                  >
                    Complete Registration
                    <i 
                      className="material-icons"
                      style={{marginLeft: '8px'}}
                      style={{color: '#FFC857'}}
                    >
                      assignment_turned_in
                    </i>
                  </Button>
                  ) : (
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleNextStep}
                    style={{color: '#FFC857'}}
                    size="large"
                  >
                    Next
                  </Button>
                )}
            </div>
            </form>
            </Typography>
          </div>
        )}
      </div>
    </Container>
    </div>
    );
  } 
}

export default EntryNewPage;
