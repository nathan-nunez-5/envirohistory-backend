import React from 'react';

const NavBar = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/dashboard">
        E
      </a>
      <ul className="navbar-nav row">
        <li className="nav-item">
          <a className="nav-link" href="/dashboard">
            History
          </a>
          <a className="nav-link" href="/search">
            Search
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
