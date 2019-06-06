import React from 'react';

function EntryFormConfirmation(props) {
  const { 
    schoolName,
    sponsorFirstName,
    sponsorLastName,
    position,
    email,
    teams,
    singles
  } = props.formValues;
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '20px'}}>
      <h1>Confirmation</h1>
      <table>
        <tr>
          <th>School:</th>
          <td>{schoolName}</td>
        </tr>
        <tr>
          <th>Delegate: </th>
          <td>{sponsorFirstName} {sponsorLastName}</td>
        </tr>
        <tr>
          <th>Position:</th>
          <td>{position}</td>
        </tr>
        <tr>
          <th>Email:</th>
          <td>{email}</td>
        </tr>
        <tr>
          <th>Entry Fees:</th>
          <td>{singles.length * 12 + 85}</td>
        </tr>
      </table>
      <h2>Teams</h2>
      {Object.entries(teams).map((team, index) => (
        <div key={team[0]}>
          {teams[team[0]].players.length > 0 ? (
            <div>
              <h3 style={{textAlign: 'center'}}>{team[0]}</h3>
              <ul>
                {teams[team[0]].players.map((player, index) => (
                  <li
                    key={player.first_name + player.last_name}
                  >
                    {player.last_name}, {player.first_name} – Grade {player.grade}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            null
          )}
        </div>
      ))} 
      <h2>Singles</h2>
      <ul>
        {singles.map((player, index) => (
          <li
            key={player.first_name + player.last_name}
          >
            {player.last_name}, {player.first_name} – Grade {player.grade}, {player.gender} Singles
          </li>
        ))}
      </ul>
    </div> 
  );
}
 
export default EntryFormConfirmation;
