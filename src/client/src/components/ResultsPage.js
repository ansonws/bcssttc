import React from 'react';
import { boysTeamStandings, girlsTeamStandings } from '../config';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function Results(props) {
  return (
    <div>
      <div class="eventTable">
        <div class="resultsTableDiv">
          <h2 class="resultsHeading">Boys Singles</h2>
          <Table class="resultsTable">
            <TableRow>
              <TableCell style={{textAlign: "right"}}>
              <img 
                  src="images/icons/gold-medal.svg"
                  width="25px"
                  height="25px" 
              />
              </TableCell>
              <TableCell>Edison Huang, Lord Byng</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{textAlign: "right"}}>  
              <img 
                  src="images/icons/silver-medal.svg"
                  width="25px"
                  height="25px" 
              />
              </TableCell>
              <TableCell>Jason Zhang, J. N. Burnett</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{textAlign: "right"}}>  
              <img 
                  src="images/icons/bronze-medal.svg"
                  width="25px"
                  height="25px" 
              />
              </TableCell>
              <TableCell>Max Ji, Steveston-London & Andy Chen, J. N. Burnett</TableCell>
            </TableRow>
          </Table>
        </div>
        <div class="resultsTableDiv">
          <h2 class="resultsHeading">Girls Singles</h2>
          <Table class="resultsTable">
            <TableRow>
                <TableCell style={{textAlign: "right"}}>
                <img 
                    src="images/icons/gold-medal.svg"
                    width="25px"
                    height="25px" 
                />
              </TableCell>
              <TableCell>Isabelle Xiong, York House</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{textAlign: "right"}}>  
              <img 
                  src="images/icons/silver-medal.svg"
                  width="25px"
                  height="25px" 
              />
              </TableCell>
              <TableCell>Ivy Liao, Britannia</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{textAlign: "right"}}>  
                <img 
                    src="images/icons/bronze-medal.svg"
                    width="25px"
                    height="25px" 
                />
              </TableCell>
              <TableCell>Rose Huang, Britannia & Chuchu Lai, Columbia Academy</TableCell>
            </TableRow>
          </Table>
        </div>
      </div>
      <div class="eventTable">
        <div class="resultsTableDiv">
        <h2>Boys Team Standings</h2>
        <Table class="resultsTable">
          <TableRow>
            <TableCell style={{textAlign: "right"}}>
              <img 
                src="images/icons/gold-medal.svg"
                width="25px"
                height="25px" 
              />
            </TableCell>
            <TableCell>J. N. Burnett</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{textAlign: "right"}}>
              <img 
                  src="images/icons/silver-medal.svg"
                  width="25px"
                  height="25px" 
              />
              </TableCell>
            <TableCell>St. George's A</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{textAlign: "right"}}> 
              <img 
                  src="images/icons/bronze-medal.svg"
                  width="25px"
                  height="25px" 
              />
              </TableCell>
            <TableCell>Burnaby North A</TableCell>
          </TableRow>
          {boysTeamStandings.map((team, index) => (
            <TableRow>
              <TableCell style={{textAlign: "right"}}>{index + 4}.</TableCell>
              <TableCell>{team}</TableCell>
            </TableRow>
          ))}
        </Table>
        </div>
      <div class="resultsTableDiv">
        <h2>Girls Team Standings</h2>
        <Table class="resultsTable">
          <TableRow>
            <TableCell style={{textAlign: "right"}}>
              <img 
                  src="images/icons/gold-medal.svg"
                  width="25px"
                  height="25px" 
              />
            </TableCell>
            <TableCell>J. N. Burnett</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{textAlign: "right"}}>
              <img 
                  src="images/icons/silver-medal.svg"
                  width="25px"
                  height="25px" 
              />
              </TableCell>
            <TableCell>St. George's A</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{textAlign: "right"}}>
              <img 
                  src="images/icons/bronze-medal.svg"
                  width="25px"
                  height="25px" 
              />
              </TableCell>
            <TableCell>Burnaby North A</TableCell>
          </TableRow>
          {girlsTeamStandings.map((team, index) => (
            <TableRow>
              <TableCell style={{textAlign: "right"}}>{index + 4}.</TableCell>
              <TableCell>{team}</TableCell>
            </TableRow>
          ))}
        </Table>  
      </div>
    </div>
    <div style={{margin: '5em', textAlign: 'center'}}>Icons made by <a href="https://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    </div>

  );
}

export default Results;
