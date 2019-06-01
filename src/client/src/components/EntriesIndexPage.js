import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Season from '../api/season';
import LinearProgress from '@material-ui/core/LinearProgress';

class Entries extends Component {
  state = { 
    isLoading: true,
    sortColumn: { path: 'title', order: 'asc' },
    seasons: [],
    sortASC: {},
  }

  componentDidMount() {
    Season.index(2019).then(seasons => {
      this.setState({ 
        isLoading: false, 
        seasons,
        sortASC: {
          school: false,
          district: false,
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
          case 'district':
            let districtName = 0;
            if ( a.school.name < b.school.name ){
              return -1;
            }
            if ( a.school.name > b.school.name ){
              return 1;
            }
            return districtName;
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
          case 'district':
            let districtName = 0;
            if ( a.school.name < b.school.name ){
              return 1;
            }
            if ( a.school.name > b.school.name ){
              return -1;
            }
            return districtName;
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

  render() { 
    const { isLoading, seasons } = this.state;
    if (isLoading) {
      return <LinearProgress color="primary" variant="query" />
    }

    if (seasons.length === 0) {
      return (
        <h1>No schools have signed up yet</h1>
      )
    }
    return (  
      <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell onClick={() => this.handleSort('school')}>School</TableCell>
            <TableCell onClick={() => this.handleSort('district')}>District</TableCell>
            <TableCell onClick={() => this.handleSort('boysTeams')} align="right">Boys Teams</TableCell>
            <TableCell onClick={() => this.handleSort('girlsTeams')} align="right">Girls Teams</TableCell>
            <TableCell onClick={() => this.handleSort('boysSingles')} align="right">Boys Singles</TableCell>
            <TableCell onClick={() => this.handleSort('girlsSingles')} align="right">Girls Singles</TableCell>
            <TableCell onClick={() => this.handleSort('total')} align="right">Student Athletes Competing</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {seasons.map(season => (
            <TableRow key={season.id}>
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
    );
  }
}
 
export default Entries;
