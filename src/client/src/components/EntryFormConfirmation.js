import React from 'react';

function EntryFormConfirmation(props) {
  const { 
    schoolName,
    sponsorFirstName,
    sponsorLastName,
    position,
    email,
    phoneNumber,
    teams,
    singles
  } = props.formValues;
  
  return (
    <div>
      <h1>Confirmation</h1>
      <p>School: {schoolName}</p>
      <p>Delegate: {sponsorFirstName} {sponsorLastName}</p>
      <p>Position: {position}</p>
      <p>Email: {email}</p>
      <p>Phone Number: {phoneNumber}</p>
      <h2>Teams</h2>
      {Object.entries(teams).map((team, index) => (
        <div key={team[0]}>
          {teams[team[0]].players.length > 0 ? (
            <div>
              <h3>{team[0]}</h3>
              <ul>
                {teams[team[0]].players.map((player, index) => (
                  <li
                    key={player.first_name + player.last_name}
                  >
                    Name: {player.last_name}, {player.first_name} Grade {player.grade}
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
            Name: {player.last_name}, {player.first_name} Grade {player.grade}, Gender: {player.gender} 
          </li>
        ))}
      </ul>
    </div> 
  );
}
 
export default EntryFormConfirmation;
