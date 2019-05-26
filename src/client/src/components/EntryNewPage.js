import React, {Component} from 'react';
import styles from '../designs/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DelegateForm from './DelegateForm';
import EventForm from './EventForm';

function getSteps() {
  return [
    'School Information', 
    'Events', 
    'Fees'
  ];
}

class EntryNewPage extends Component {
  state = { 
    step: 1,
    schoolName: '',
    sponsorFirstName: '',
    sponsorLastName: '',
    position: '',
    email: '',
    phoneNumber: '',
    teams: [
      {
        gender: 'Boys',
        tier: 'A',
        playerCount: 0
      },
      {
        gender: 'Boys',
        tier: 'B',
        playerCount: 0
      },
      {
        gender: 'Girls',
        tier: 'A',
        playerCount: 0
      },
      {
        gender: 'Girls',
        tier: 'B',
        playerCount: 0
      }
    ]
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
          <EventForm 
            handleChange={this.handleDropDownChange}
            formValues={this.state}
          />
        )
      case 2:
        return 'Confirmation';
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

  handleDropDownChange = (input, index) => e => {
    const teams = [...this.state.teams]
    teams[index].playerCount = e.target.value;
    this.setState({teams})
  }

  handleChange = input => e => {
    console.log(e.target.value);
    console.log(input);
    console.log(this.state.teams[0].playerCount);
    this.setState({[input]: e.target.value})
    // this.setState({teams: e.target.value})
  }

  render () {
    const { 
      step,
      schoolName,
      sponsorFirstName,
      sponsorLastName,
      position,
      email,
      phoneNumber,
    } = this.state;

    const values = { 
      schoolName,
      sponsorFirstName,
      sponsorLastName,
      position,
      email,
      phoneNumber,
    }

    const steps = getSteps();
    const { 
      getStepContent,
      handleNextStep,
      handlePreviousStep,
      handleReset,
      handleChange,
    } = this;

    return (
      <div >
      <Stepper activeStep={step} alternativeLabel>
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
            <Typography >{getStepContent(step)}</Typography>
            <div>
              <Button
                disabled={step === 0}
                onClick={handlePreviousStep}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNextStep}>
                {step === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
    </div>
    );
  } 
}

export default EntryNewPage;

// class EntryNewPage extends Component {
//   state = { 
//     step: 1,
//     schoolName: '',
//     sponsorFirstName: '',
//     sponsorLastName: '',
//     position: '',
//     email: '',
//     phoneNumber: ''
//   }

//   nextStep = () => {

//   }

//   previousStep = () => {
//     const { step } = this.state;
//     this.setState({
//       step: step - 1
//     });
//   }

//   handleChange = input => e => {
//     this.setState({[input]: e.target.value})
//   }

//   render() { 


//     if (step === 1) {
//       return (
//         <DelegateForm 
//           nextStep={this.nextStep}
//           handleChange={this.handleChange}
//           values={values}
//         />
//       )
//     } else if (step === 2) {
//       return (
//         <EntryNewPage
//           nextStep={this.nextStep}
//           handleChange={this.handleChange}
//           values={values}
//         />
//       )
//     }
//   }
// }
 
// export default EntryNewPage;
