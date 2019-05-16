import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/tournament">
        Tournament
      </NavLink>
      <NavLink exact to="/results">
        Results
      </NavLink>
      <NavLink exact to="/contact">
        Contact
      </NavLink>
    </nav>
  );
}

export default NavBar;
