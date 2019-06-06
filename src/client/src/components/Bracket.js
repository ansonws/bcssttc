import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Bracket extends Component {
  state = {
    seeds: [
      "1. Fan, Zhendong",
      "2. Lin, Gaoyuan",
      "3. Xu, Xin",
      "4. Tomokazu, Harimoto",
      "5. Ma, Long",
      "6. Boll, Timo",
      "7. Liang, Jingkun",
      "8. Calderano, Hugo",
      "9. Falck, Mattias",
      "10. Jang, Woojin",
      "11. Lee, Sangsu",
      "12. Ovtcharov, Dimitrij",
      "13. Niwa, Koki",
      "14. Mizutani, Jun",
      "15. Pitchford, Liam",
      "16. Franziska, Patrick",
    ],
    scores: Array(30).fill('0'),
    matchup16: Array(8).fill(['','']),
    matchup8: Array(4).fill(['','']),
    matchup4: Array(2).fill(['','']),
    matchup2: ['',''],
    champion: '',
  }

  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  deepClone = array => {
    if (Array.isArray(array)) {
      let copy = array.slice(0);
      for (let i = 0; i < copy.length; i++) {
        copy[i] = this.deepClone(copy[i]);
      }
      return copy;
    } else {
      return array;
    }
  }

  handleCreateBracket = () => {
    if (window.confirm("Are you sure? Changes to this bracket will be lost.")) {
      const { seeds } = this.state;
      let topHalf = [];
      const topTwo = seeds.slice(0, 2);
      const seedSF = this.shuffle(seeds.slice(2, 4));
      const seedQF = this.shuffle(seeds.slice(4, 8));
      const seedR16 = seeds.slice(seeds.length / 2);

      topHalf = topTwo.concat(seedSF, seedQF);

      const matchup16 = [];
      topHalf.forEach((player, index, arr) => {
        let matchup = [];
        matchup.push(
          player,
          seedR16.splice(
            Math.floor(Math.random() * seedR16.length), 1
          )[0]
        );
        matchup16.push(matchup);
      })
      this.setState({ matchup16 });
    }
  }

  handleAdvanceTeam = (matchup) => e => {
    const scores = [...this.state.scores];
    const matchup8 = this.deepClone(this.state.matchup8);
    const matchup4 = this.deepClone(this.state.matchup4);
    const matchup2 = this.deepClone(this.state.matchup2);
    let champion = this.state.champion;
    const loser = [...e.currentTarget.parentNode.children].filter(child => child !== e.currentTarget)[0]
    const loserName = loser.childNodes[0].data
    const winnerName = e.currentTarget.childNodes[0].data;
    const loserScore = prompt(`${winnerName} won!\n How many games did ${loserName} win?`);

    if (loserScore === '0' || loserScore === '1' || loserScore === '2') {
      loser.classList.add('lost');
      e.currentTarget.classList.remove('lost');

      switch (matchup) {
        case 'r16_1':
          matchup8[0][0] = e.currentTarget.childNodes[0].data;
          scores[0] = '3';
          scores[1] = loserScore;
          this.setState({ matchup8, scores });
          break;
        case 'r16_2':
          matchup8[0][0] = e.currentTarget.childNodes[0].data;
          scores[0] = loserScore;
          scores[1] = '3';
          this.setState({ matchup8, scores });
          break;
        case 'r16_3':
          matchup8[0][1] = e.currentTarget.childNodes[0].data;
          scores[2] = '3';
          scores[3] = loserScore;
          this.setState({ matchup8, scores });
          break;
        case 'r16_4':
          matchup8[0][1] = e.currentTarget.childNodes[0].data;
          scores[2] = loserScore;
          scores[3] = '3';
          this.setState({ matchup8, scores });
          break;
        case 'r16_5':
          matchup8[1][0] = e.currentTarget.childNodes[0].data;
          scores[4] = '3';
          scores[5] = loserScore;
          this.setState({ matchup8, scores });
          break;
        case 'r16_6':
          matchup8[1][0] = e.currentTarget.childNodes[0].data;
          scores[4] = loserScore;
          scores[5] = '3';
          this.setState({ matchup8, scores });
          break;
        case 'r16_7':
          matchup8[1][1] = e.currentTarget.childNodes[0].data;
          scores[6] = '3';
          scores[7] = loserScore;
          this.setState({ matchup8, scores });
          break;
        case 'r16_8':
          matchup8[1][1] = e.currentTarget.childNodes[0].data;
          scores[6] = loserScore;
          scores[7] = '3';
          this.setState({ matchup8, scores });
          break;
        case 'r16_9':
          matchup8[2][0] = e.currentTarget.childNodes[0].data;
          scores[8] = '3';
          scores[9] = loserScore;
          this.setState({ matchup8, scores });
          break;
        case 'r16_10':
          matchup8[2][0] = e.currentTarget.childNodes[0].data;
          scores[8] = loserScore;
          scores[9] = '3';
          this.setState({ matchup8, scores });
          break;
        case 'r16_11':
          matchup8[2][1] = e.currentTarget.childNodes[0].data;
          scores[10] = '3';
          scores[11] = loserScore;
          this.setState({ matchup8, scores });
          break;
        case 'r16_12':
          matchup8[2][1] = e.currentTarget.childNodes[0].data;
          scores[10] = loserScore;
          scores[11] = '3';
          this.setState({ matchup8, scores });
          break;
        case 'r16_13':
          matchup8[3][0] = e.currentTarget.childNodes[0].data;
          scores[12] = '3';
          scores[13] = loserScore;
          this.setState({ matchup8, scores });
          break;
        case 'r16_14':
          matchup8[3][0] = e.currentTarget.childNodes[0].data;
          scores[12] = loserScore;
          scores[13] = '3';
          this.setState({ matchup8, scores });
          break;
        case 'r16_15':
          matchup8[3][1] = e.currentTarget.childNodes[0].data;
          scores[14] = '3';
          scores[15] = loserScore;
          this.setState({ matchup8, scores });
          break;
        case 'r16_16':
          matchup8[3][1] = e.currentTarget.childNodes[0].data;
          scores[14] = loserScore;
          scores[15] = '3';
          this.setState({ matchup8, scores });
          break;
        case 'r8_1':
          matchup4[0][0] = e.currentTarget.childNodes[0].data;
          scores[16] = '3';
          scores[17] = loserScore;
          this.setState({ matchup4, scores });
          break;
        case 'r8_2':
          matchup4[0][0] = e.currentTarget.childNodes[0].data;
          scores[16] = loserScore;
          scores[17] = '3';
          this.setState({ matchup4, scores });
          break;
        case 'r8_3':
          matchup4[0][1] = e.currentTarget.childNodes[0].data;
          scores[18] = '3';
          scores[19] = loserScore;
          this.setState({ matchup4, scores });
          break;
        case 'r8_4':
          matchup4[0][1] = e.currentTarget.childNodes[0].data;
          scores[18] = loserScore;
          scores[19] = '3';
          this.setState({ matchup4, scores });
          break;
        case 'r8_5':
          matchup4[1][0] = e.currentTarget.childNodes[0].data;
          scores[20] = '3';
          scores[21] = loserScore;
          this.setState({ matchup4, scores });
          break;
        case 'r8_6':
          matchup4[1][0] = e.currentTarget.childNodes[0].data;
          scores[20] = loserScore;
          scores[21] = '3';
          this.setState({ matchup4, scores });
          break;
        case 'r8_7':
          matchup4[1][1] = e.currentTarget.childNodes[0].data;
          scores[22] = '3';
          scores[23] = loserScore;
          this.setState({ matchup4, scores });
          break;
        case 'r8_8':
          matchup4[1][1] = e.currentTarget.childNodes[0].data;
          scores[22] = loserScore;
          scores[23] = '3';
          this.setState({ matchup4, scores });
          break;
        case 'r4_1':
          matchup2[0] = e.currentTarget.childNodes[0].data;
          scores[24] = '3';
          scores[25] = loserScore;
          this.setState({ matchup2, scores });
          break;
        case 'r4_2':
          matchup2[0] = e.currentTarget.childNodes[0].data;
          scores[24] = loserScore;
          scores[25] = '3';
          this.setState({ matchup2, scores });
          break;
        case 'r4_3':
          matchup2[1] = e.currentTarget.childNodes[0].data;
          scores[26] = '3';
          scores[27] = loserScore;
          this.setState({ matchup2, scores });
          break;
        case 'r4_4':
          matchup2[1] = e.currentTarget.childNodes[0].data;
          scores[26] = loserScore;
          scores[27] = '3';
          this.setState({ matchup2, scores });
          break;
        case 'r2_1':
          champion = e.currentTarget.childNodes[0].data;
          scores[28] = '3';
          scores[29] = loserScore;
          this.setState({ champion, scores });
          break;
        case 'r2_2':
          champion = e.currentTarget.childNodes[0].data;
          scores[28] = loserScore;
          scores[29] = '3';
          this.setState({ champion, scores });
          break;
      }
    } else {
      alert('Games won can only be 0, 1, or 2');
    }
  }

  render() {
    const { matchup16, matchup8, matchup4, matchup2, champion, scores, seeds } = this.state;
    return (
      <div>
          <h1 className="bracket-title">Boys Singles</h1>
      <header class="dashboard">
        <div style={{width: '70%', display: 'flex', align: 'left'}}>
          <ul style={{width: '50%', listStyle: 'none', padding: '0', float: 'left'}}>
            {seeds.slice(0, 8).map((team, index) => (
              <li key={{index}} className="team-list-item">{team}</li>
            ))}
          </ul>
          <ul style={{width: '50%', listStyle: 'none'}}>
            {seeds.slice(8).map((team, index) => (
              <li key={{index}} className="team-list-item">{team}</li>
            ))}
          </ul>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Button 
            variant="contained" 
            size="large" 
            style={{backgroundColor: '#EC2C3E', width: '200px'}}
            onClick={this.handleCreateBracket}  
          >
            Create Bracket
          </Button>
        </div>
      </header>
      <div id="bracket">
        <div id="rounds">
        <div className="round r-16">
        <div className="round-heading">
          <h2 className="round-title">Round of 16</h2>
        </div>
        <ul className="matchup">
          <li className="team" onClick={this.handleAdvanceTeam('r16_1')}>
            {matchup16[0][0]}
            <span className="score">{scores[0]}</span>
          </li>
          <li className="team" onClick={this.handleAdvanceTeam('r16_2')}>
            {matchup16[0][1]}
            <span className="score">{scores[1]}</span>
          </li>
        </ul>
        <ul className="matchup">
          <li className="team" onClick={this.handleAdvanceTeam('r16_3')}>
            {matchup16[4][0]}
            <span className="score">{scores[2]}</span>
          </li>
          <li className="team" onClick={this.handleAdvanceTeam('r16_4')}>
            {matchup16[4][1]}
            <span className="score">{scores[3]}</span>
          </li>
        </ul>
        <ul className="matchup">
          <li className="team" onClick={this.handleAdvanceTeam('r16_5')}>
            {matchup16[7][1]}
            <span className="score">{scores[4]}</span>
          </li>
          <li className="team" onClick={this.handleAdvanceTeam('r16_6')}>
            {matchup16[7][0]}
            <span className="score">{scores[5]}</span>
          </li>
        </ul>
        <ul className="matchup">
          <li className="team" onClick={this.handleAdvanceTeam('r16_7')}>
            {matchup16[2][1]}
            <span className="score">{scores[6]}</span>
          </li>
          <li className="team" onClick={this.handleAdvanceTeam('r16_8')}>
            {matchup16[2][0]}
            <span className="score">{scores[7]}</span>
          </li>
        </ul>
        <ul className="matchup">
          <li className="team" onClick={this.handleAdvanceTeam('r16_9')}>
            {matchup16[3][0]}
            <span className="score">{scores[8]}</span>
          </li>
          <li className="team" onClick={this.handleAdvanceTeam('r16_10')}>
            {matchup16[3][1]}
            <span className="score">{scores[9]}</span>
          </li>
        </ul>
        <ul className="matchup">
          <li className="team" onClick={this.handleAdvanceTeam('r16_11')}>
            {matchup16[5][0]}
            <span className="score">{scores[10]}</span>
          </li>
          <li className="team" onClick={this.handleAdvanceTeam('r16_12')}>
            {matchup16[5][1]}
            <span className="score">{scores[11]}</span>
          </li>
        </ul>
        <ul className="matchup">
          <li className="team" onClick={this.handleAdvanceTeam('r16_13')}>
            {matchup16[6][1]}
            <span className="score">{scores[12]}</span>
          </li>
          <li className="team" onClick={this.handleAdvanceTeam('r16_14')}>
            {matchup16[6][0]}
            <span className="score">{scores[13]}</span>
          </li>
        </ul>
        <ul className="matchup">
          <li className="team" onClick={this.handleAdvanceTeam('r16_15')}>
            {matchup16[1][1]}
            <span className="score">{scores[14]}</span>
          </li>
          <li className="team" onClick={this.handleAdvanceTeam('r16_16')}>
            {matchup16[1][0]}
            <span className="score">{scores[15]}</span>
          </li>
        </ul>
        </div>
        <div className="connector"></div>
        <div className="round r-8">
        <div className="round-heading">
          <h2 className="round-title">Quarter-Finals</h2>
        </div>
            <ul className="matchup">
              <li className="team" onClick={this.handleAdvanceTeam('r8_1')}>
                {matchup8[0][0]}
                <span className="score">{scores[16]}</span>
              </li>
              <li className="team" onClick={this.handleAdvanceTeam('r8_2')}>
                {matchup8[0][1]}
                <span className="score">{scores[17]}</span>
              </li>
            </ul>
            <ul className="matchup">
              <li className="team" onClick={this.handleAdvanceTeam('r8_3')}>
                {matchup8[1][0]}
                <span className="score">{scores[18]}</span>
              </li>
              <li className="team" onClick={this.handleAdvanceTeam('r8_4')}>
                {matchup8[1][1]}
                <span className="score">{scores[19]}</span>
              </li>
            </ul>
            <ul className="matchup">
              <li className="team" onClick={this.handleAdvanceTeam('r8_5')}>
                {matchup8[2][0]}
                <span className="score">{scores[20]}</span>
              </li>
              <li className="team" onClick={this.handleAdvanceTeam('r8_6')}>
                {matchup8[2][1]}
                <span className="score">{scores[21]}</span>
              </li>
            </ul>
            <ul className="matchup">
              <li className="team" onClick={this.handleAdvanceTeam('r8_7')}>
                {matchup8[3][0]}
                <span className="score">{scores[22]}</span>
              </li>
              <li className="team" onClick={this.handleAdvanceTeam('r8_8')}>
                {matchup8[3][1]}
                <span className="score">{scores[23]}</span>
              </li>
            </ul>           
        </div>
        <div className="connector"></div>
        <div className="round r-4">
        <div className="round-heading">
          <h2 className="round-title">Semi-Finals</h2>
        </div>
            <ul className="matchup">
              <li className="team" onClick={this.handleAdvanceTeam('r4_1')}>
                {matchup4[0][0]}
                <span className="score">{scores[24]}</span>
              </li>
              <li className="team" onClick={this.handleAdvanceTeam('r4_2')}>
                {matchup4[0][1]}
                <span className="score">{scores[25]}</span>
              </li>
            </ul>
            <ul className="matchup">
              <li className="team" onClick={this.handleAdvanceTeam('r4_3')}>
                {matchup4[1][0]}
                <span className="score">{scores[26]}</span>
              </li>
              <li className="team" onClick={this.handleAdvanceTeam('r4_4')}>
                {matchup4[1][1]}
                <span className="score">{scores[27]}</span>
              </li>
            </ul>
        </div>
        <div className="connector"></div>
        <div className="round r-2">
        <div className="round-heading">
          <h2 className="round-title">Finals</h2>
        </div>
            <ul className="matchup">
              <li className="team" onClick={this.handleAdvanceTeam('r2_1')}>
                {matchup2[0]}
                <span className="score">{scores[28]}</span>
              </li>
              <li className="team" onClick={this.handleAdvanceTeam('r2_2')}>
                {matchup2[1]}
                <span className="score">{scores[29]}</span>
              </li>
            </ul>
        </div>
        <div className="connector"></div>
        <div className="round r-1">
        <div className="round-heading">
          <h2 className="round-title">Champion</h2>
        </div>
            <ul className="matchup">
              <li id="champion">
                {champion}
              </li>
            </ul>
        </div>
      </div>
      </div>
      </div>
    )
  } 
}

export default Bracket;
