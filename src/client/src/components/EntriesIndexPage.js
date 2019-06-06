import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Season from '../api/season';
import Dialog from '@material-ui/core/Dialog';
import LinearProgress from '@material-ui/core/LinearProgress';

class Entries extends Component {
  state = { 
    isLoading: true,
    sortColumn: { path: 'title', order: 'asc' },
    seasons: [],
    sortASC: {},
    dialogOpen: false,
    seasonSpotlight: {
      school: {
        name: '',
        city: '',
      },
      tenures: []
    },
  }

  componentDidMount() {
    Season.index(2020).then(seasons => {
      this.setState({ 
        isLoading: false, 
        seasons,
        sortASC: {
          school: false,
          city: false,
          boysTeams: false,
          girlsTeams: false,
          boysSingles: false,
          girlsSingles: false,
          total: false,
        }
      });
    })
  }

  handleSort = column => {
    const sortASC = {...this.state.sortASC};
    const seasons = [...this.state.seasons];

    if (sortASC[column]) {
      seasons.sort(( a, b ) => {
        switch (column) {
          case 'school':
            let schoolName = 0;
            if ( a.school.name < b.school.name ){
              return -1;
            }
            if ( a.school.name > b.school.name ){
              return 1;
            }
            return schoolName;
          case 'city':
            let city = 0;
            if ( a.school.city < b.school.city ) {
              return -1;
            }
            if ( a.school.city > b.school.city ) {
              return 1;
            }
            return city;
          case 'boysTeams':
            return a.teams.filter(team => team.gender === 'Boys').length - b.teams.filter(team => team.gender === 'Boys').length;
          case 'girlsTeams':
            return a.teams.filter(team => team.gender === 'Girls').length - b.teams.filter(team => team.gender === 'Girls').length;
          case 'boysSingles':
            return a.boys_singles.length - b.boys_singles.length;
          case 'girlsSingles':
            return a.girls_singles.length - b.girls_singles.length;
          case 'total':
            return a.tenures.length - b.tenures.length;
          default:
            console.log('Nothing sorted');
        }
      });
      sortASC[column] = !sortASC[column]
    } else {
      seasons.sort(( a, b ) => {
        switch (column) {
          case 'school':
            let schoolName = 0;
            if ( a.school.name < b.school.name ){
              return 1;
            }
            if ( a.school.name > b.school.name ){
              return -1;
            }
            return schoolName;
          case 'city':
            let city = 0;
            if ( a.school.city < b.school.city ){
              return 1;
            }
            if ( a.school.city > b.school.city ){
              return -1;
            }
            return city;
          case 'boysTeams':
            return b.teams.filter(team => team.gender === 'Boys').length - a.teams.filter(team => team.gender === 'Boys').length;
          case 'girlsTeams':
            return b.teams.filter(team => team.gender === 'Girls').length - a.teams.filter(team => team.gender === 'Girls').length;
          case 'boysSingles':
            return b.boys_singles.length - a.boys_singles.length;
          case 'girlsSingles':
            return b.girls_singles.length - a.girls_singles.length;
          case 'total':
            return b.tenures.length - a.tenures.length;
          default:
            console.log('Nothing sorted');
        }
      });
      sortASC[column] = !sortASC[column]
    }
    
    this.setState({ seasons, sortASC })
  }

  handleOpenDialog = season => {
    console.log(season)
    this.setState({ dialogOpen: true });
    this.setState({seasonSpotlight: season })
  }

  handleCloseDialog = () => {
    console.log('hi')
    this.setState({ dialogOpen: false })
  }

  render() { 
    const { isLoading, seasons, seasonSpotlight } = this.state;
    if (isLoading) {
      return <LinearProgress color="primary" variant="query" />
    }

    if (seasons.length === 0) {
      return (
        <h1 style={{margin: '300px'}}>No schools have signed up yet</h1>
      )
    }
    return (
      <>
      <div>  
      <div>
      <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="table-header" onClick={() => this.handleSort('school')}>School</TableCell>
            <TableCell className="table-header" onClick={() => this.handleSort('city')}>District</TableCell>
            <TableCell className="table-header" onClick={() => this.handleSort('boysTeams')} align="right">Boys Teams</TableCell>
            <TableCell className="table-header" onClick={() => this.handleSort('girlsTeams')} align="right">Girls Teams</TableCell>
            <TableCell className="table-header" onClick={() => this.handleSort('boysSingles')} align="right">Boys Singles</TableCell>
            <TableCell className="table-header" onClick={() => this.handleSort('girlsSingles')} align="right">Girls Singles</TableCell>
            <TableCell className="table-header" onClick={() => this.handleSort('total')} align="right">Student Athletes Competing</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {seasons.map(season => (
            <TableRow 
              key={season.id} 
              className="season-show"
              onClick={() => this.handleOpenDialog(season)}
            >
              <TableCell component="th" scope="season">
                {season.school.name}
              </TableCell>
              <TableCell>{season.school.city}</TableCell>
              <TableCell align="right">{season.teams.filter(team => team.gender === "Boys").length}</TableCell>
              <TableCell align="right">{season.teams.filter(team => team.gender === "Girls").length}</TableCell>
              <TableCell align="right">{season.boys_singles.length}</TableCell>
              <TableCell align="right">{season.girls_singles.length}</TableCell>
              <TableCell align="right">{season.tenures.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
    <div>

    
      </div>
    </div>
    <Dialog
      open={this.state.dialogOpen}
      onClose={this.handleCloseDialog}
    >
    
      <div id="entry-show-dialog">
        <h1 style={{textAlign: 'center'}}>{seasonSpotlight.school.name}</h1>
        {seasonSpotlight.tenures.map(tenure => (
          <p style={{textAlign: 'center', lineHeight: '0.8'}}>{tenure.player.last_name}, {tenure.player.first_name}</p>
        ))}
      </div>
  </Dialog>
  </>
    );
  }
}
 
export default Entries;
